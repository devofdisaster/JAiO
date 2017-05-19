<?php
namespace JAiO\Application\Layout;

use JAiO\Application\FrontendController;

class LayoutController extends FrontendController
{
    const LOGIN = 'Layout/Templates/anonymous.twig';

    protected function render($template, $vars = [])
    {
        return $this->app->render(
            'Layout/Templates/frontend.twig',
            ['content' => $this->app['twig']->render($template, $vars),]
        );
    }

    protected function renderRaw($template, $vars = [])
    {
        return $this->app->render($template, $vars);
    }
}
