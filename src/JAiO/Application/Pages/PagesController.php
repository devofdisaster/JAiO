<?php

namespace JAiO\Application\Pages;

use JAiO\Application\LayoutController;
use Symfony\Component\HttpFoundation\Request;

class PagesController extends LayoutController
{
    public function IndexAction(Request $request)
    {
        $pages = [];

        return $this->render('Index', [$pages]);
    }

    protected final function render($template, $vars = [])
    {
        return parent::render(sprintf('/Pages/Templates/%s.twig', $template), $vars);
    }

    protected final function renderRaw($template, $vars = [])
    {
        return parent::renderRaw(sprintf('/Pages/Templates/%s.twig', $template), $vars);
    }
}
