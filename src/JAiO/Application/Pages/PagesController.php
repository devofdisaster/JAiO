<?php

namespace JAiO\Application\Pages;

use JAiO\Application\Layout\LayoutController;
use JAiO\Domain\Page;
use Symfony\Component\HttpFoundation\Request;

class PagesController extends LayoutController
{
    public function indexAction(Request $request)
    {
        $pages = [];

        return $this->render('Index', [$pages]);
    }

    public function newAction()
    {
        $newPage = new Page('test page', json_encode(new Page\EmptyContent()));

        $this->getEM()->persist($newPage);
        $this->getEM()->flush();

        return $this->redirect('pages');
    }

    final protected function render($template, $vars = [])
    {
        return parent::render(sprintf('/Pages/Templates/%s.twig', $template), $vars);
    }

    final protected function renderRaw($template, $vars = [])
    {
        return parent::renderRaw(sprintf('/Pages/Templates/%s.twig', $template), $vars);
    }
}
