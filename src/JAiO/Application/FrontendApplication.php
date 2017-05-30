<?php
namespace JAiO\Application;

use JAiO\Application\Pages\PagesController;
use JAiO\CommonApplication;
use Silex\Application;
use Silex\Provider;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class FrontendApplication extends CommonApplication
{
    use Application\TwigTrait;

    public function __construct($devEnv = false, array $params = [])
    {
        parent::__construct($devEnv, $params);

        if ($devEnv) {
            $this->register(new Provider\WebProfilerServiceProvider(), [
                'profiler.cache_dir'    => ROOT_PATH . '/app/cache/profiler',
                'profiler.mount_prefix' => '/_profiler'
            ]);
        }

        $this['pages.controller'] = function ($container) : PagesController {
            return new PagesController($container);
        };

        $this->setupRoutes($devEnv);
    }

    final protected function registerCoreProviders()
    {
        parent::registerCoreProviders();

        $this->register(new Provider\HttpFragmentServiceProvider());
        $this->register(new Provider\TwigServiceProvider(), [
            'twig.path' => [
                ROOT_PATH . '/src/JAiO/Application',
                ROOT_PATH . '/src/JAiO/Infrastructure/Resources/Views'
            ],
            'twig.options' => [
                'debug' => $this['debug'],
                'cache' => ROOT_PATH . '/app/cache',
                'strict_variables' => true,
            ],
            'twig.form.templates' => ['jaio_bootstrap_3_horizontal_layout.html.twig']
        ]);
    }

    private function setupRoutes($devEnv) : void
    {
        $this->before(function (Request $request, FrontendApplication $container) {
            $controller = $container['resolver']->getController($request);

            if (is_array($controller)) {
                if (array_key_exists(0, $controller) && $controller[0] instanceof FrontendController) {
                    return $controller[0]->preExecute();
                }
            }
        });

        $this->match('/pages', 'pages.controller:indexAction')->bind('pages');
        $this->match('/pages/new', 'pages.controller:newAction')->bind('pages_new');
        $this->match('/edit/{uuid}', 'pages.controller:editAction')
            ->assert('uuid', '^.{36}$')
            ->bind('edit');
        $this->match('/{anything}', function (FrontendApplication $container) {
            return $container->redirect($container->url('pages'));
        })->assert('anything', $devEnv ? '^((?!_profiler|assets/).*)$' : '.*');
        $this->after(function (Request $request, Response $response) {
            $response->headers->addCacheControlDirective('no-cache', true);
            $response->headers->addCacheControlDirective('no-store', true);
            $response->headers->addCacheControlDirective('must-revalidate', true);
        }, Application::EARLY_EVENT);
    }
}
