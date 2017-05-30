<?php

namespace JAiO\Editor;

use JAiO\CommonApplication;
use Silex\Application;
use Silex\Provider;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class EditorApplication extends CommonApplication
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

        $this['editor.controller'] = function ($container) : EditorController {
            return new EditorController($container);
        };

        $this->setupRoutes();
    }

    final protected function registerCoreProviders()
    {
        parent::registerCoreProviders();

        $this->register(new Provider\HttpFragmentServiceProvider());
        $this->register(new Provider\TwigServiceProvider(), [
            'twig.path' => [
                ROOT_PATH . '/src/JAiO/Editor',
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

    private function setupRoutes() : void
    {
        $this->before(function (Request $request, EditorApplication $container) {
            $controller = $container['resolver']->getController($request);

            if (is_array($controller)) {
                if (array_key_exists(0, $controller) && $controller[0] instanceof EditorController) {
                    return $controller[0]->preExecute();
                }
            }
        });

        $this->match('/{uuid}', 'editor.controller:indexAction')
            ->assert('uuid', '^.{36}$')
            ->bind('pages');

        $this->after(function (Request $request, Response $response) {
            $response->headers->addCacheControlDirective('no-cache', true);
            $response->headers->addCacheControlDirective('no-store', true);
            $response->headers->addCacheControlDirective('must-revalidate', true);
        }, Application::EARLY_EVENT);
    }
}
