<?php

namespace JAiO\Application\Pages;

use JAiO\Application\Layout\LayoutController;
use JAiO\Domain\Page;
use Symfony\Component\HttpFoundation\Request;

class PagesController extends LayoutController
{
    public function indexAction(Request $request)
    {
        return $this->render(
            'Index',
            ['pages' => $this->getRepository('Page')->findAll()]
        );
    }

    public function newAction()
    {
        $newPage = new Page(
            sprintf('Page %s', (new \DateTime())->format('Y-m-d h:i:s')),
            json_encode(new Page\EmptyContent())
        );

        $this->getEM()->persist($newPage);
        $this->getEM()->flush();

        return $this->redirect('pages');
    }

    public function editAction($uuid)
    {
        $page = $this->getRepository('Page')->find($uuid);

        return $this->app->redirect(sprintf('http://editor.jaio.dev/%s', $page->getUuid()));
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
