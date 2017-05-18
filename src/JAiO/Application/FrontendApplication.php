<?php
namespace JAiO\Application;

use Dflydev\Provider\DoctrineOrm\DoctrineOrmServiceProvider;
use JAiO\Application\Pages\PagesController;
use JAiO\Config;
use Silex\Application;
use Silex\Provider;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class FrontendApplication extends Application
{
    use Application\UrlGeneratorTrait;
    use Application\TwigTrait;

    public function __construct($devEnv = false, array $params = [])
    {
        parent::__construct($params);

        $this['config'] = function () {
            return new Config();
        };

        $this->registerCoreProviders();
        $this->registerDoctrineProviders();

        if ($devEnv) {
            $this->register(new Provider\WebProfilerServiceProvider(), [
                'profiler.cache_dir'    => ROOT_PATH . '/app/cache/profiler',
                'profiler.mount_prefix' => '/_profiler'
            ]);
            $this['debug'] = true;
        }

        $this['pages.controller'] = function($container) {
            return new PagesController($container);
        };

        $this->setupRoutes($devEnv);
    }

    private function registerCoreProviders()
    {
        $this->register(new Provider\HttpFragmentServiceProvider());
        $this->register(new Provider\ServiceControllerServiceProvider());
        $this->register(new Provider\TwigServiceProvider(), [
            'twig.path' => [ROOT_PATH . '/src/JAiO/Application', ROOT_PATH . '/src/JAiO/Resources/Views'],
            'twig.options' => [
                'debug' => $this['debug'],
                'cache' => ROOT_PATH . '/app/cache',
                'strict_variables' => true,
            ],
            'twig.form.templates' => ['jaio_bootstrap_3_horizontal_layout.html.twig']
        ]);
        $this->register(new Provider\LocaleServiceProvider());
        $this->register(new Provider\TranslationServiceProvider(), array(
            'locale_fallbacks' => array('en'),
        ));
        $this->register(new Provider\MonologServiceProvider(), array(
            'monolog.logfile' => ROOT_PATH . '/development.log',
        ));
    }

    private function registerDoctrineProviders()
    {
        $this->register(new Provider\DoctrineServiceProvider(), [
            'db.options' => [
                'driver' => 'pdo_mysql',
                'dbname' => $this['config']->get('db.name'),
                'user' => $this['config']->get('db.user'),
                'password' => $this['config']->get('db.password'),
                'port' => $this['config']->get('db.port'),
                'charset' => 'utf8mb4'
            ]
        ]);

        $this->register(new DoctrineOrmServiceProvider(), [
            'orm.proxies_dir' => ROOT_PATH . '/app/cache',
            'orm.em.options' => [
                'mappings' => [
                    [
                        'type' => 'xml',
                        'namespace' => 'JAiO\Frontend',
                        'path' => ROOT_PATH . '/src/JAiO/Infrastructure/Resources/Mappings'
                    ]
                ]
            ],
            'orm.auto_generate_proxies' => true
        ]);
    }

    private function setupRoutes($devEnv)
    {
        $this->before(function (Request $request, FrontendApplication $container) {
            $controller = $container['resolver']->getController($request);

            if (is_array($controller) && array_key_exists(0, $controller) && $controller instanceof FrontendController) {
                return $controller[0]->preExecute();
            }
        });

        $this->match('/pages', 'pages.controller:IndexAction')->bind('pages');
        $this->match('/{anything}', function (FrontendApplication $container) {
            return $container->redirect($container->url('pages'));
        })->assert('anything', $devEnv ? '^((?!_profiler).*)$' : '.*');
        $this->after(function (Request $request, Response $response) {
            $response->headers->addCacheControlDirective('no-cache', true);
            $response->headers->addCacheControlDirective('no-store', true);
            $response->headers->addCacheControlDirective('must-revalidate', true);
        }, Application::EARLY_EVENT);
    }
}