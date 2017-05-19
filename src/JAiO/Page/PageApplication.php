<?php
namespace JAiO\Page;

use JAiO\CommonApplication;
use Silex\Application;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class PageApplication extends CommonApplication
{
    use Application\UrlGeneratorTrait;

    public function __construct($devEnv = false, array $params = [])
    {
        parent::__construct($devEnv, $params);

        $this['page.controller'] = function () {
            return new PageController($this);
        };
        $this->setupRoutes($devEnv);
    }

    private function setupRoutes($devEnv) : void
    {
        $this->get('/{uuid}', 'page.controller:indexAction')
            ->assert('uuid', $devEnv ? '^((?!_profiler|assets/).*)$' : '^((?!assets/).*)$')
            ->bind('page');

        $this->after(function (Request $request, Response $response) {
            $response->headers->addCacheControlDirective('no-cache', true);
            $response->headers->addCacheControlDirective('no-store', true);
            $response->headers->addCacheControlDirective('must-revalidate', true);
        }, Application::EARLY_EVENT);
    }
}
