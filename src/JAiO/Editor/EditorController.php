<?php

namespace JAiO\Editor;

use Doctrine\ORM\EntityRepository;
use JAiO\Config;
use JAiO\Domain\Page;
use JAiO\Repository\PageRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class EditorController
{
    /**
     * @var EditorApplication
     */
    protected $app;

    public function __construct(EditorApplication $app)
    {
        $this->app = $app;
    }

    public function preExecute()
    {
    }

    public function indexAction($uuid) : Response
    {
        return $this->render($this->getPageByUuid($uuid));
    }

    public function pageJsonAction($uuid) : Response
    {
        return JsonResponse::fromJsonString($this->getPageByUuid($uuid)->getContent());
    }

    /**
     * @param $uuid
     * @return Page|null
     */
    protected function getPageByUuid($uuid) : ?Page
    {
        return $this->getPageRepository()->find($uuid);
    }

    /**
     * @return \Doctrine\ORM\EntityManager
     */
    protected function getEM()
    {
        return $this->app['orm.em'];
    }

    /**
     * @return PageRepository|EntityRepository
     */
    protected function getPageRepository() : PageRepository
    {
        return $this->getRepository('Page');
    }

    protected function getRepository($name)
    {
        return $this->getEM()->getRepository(sprintf('JAiO\\Domain\\%s', $name));
    }

    /**
     * @return \Doctrine\DBAL\Connection
     */
    protected function getDoctrine()
    {
        return $this->getEM()->getConnection();
    }

    /**
     * @return Config
     */
    protected function getConfig()
    {
        return $this->app['config'];
    }

    /**
     * @param $name
     * @param $default
     * @return mixed|null
     */
    protected function getParameter($name, $default = null)
    {
        return $this->getConfig()->get($name, $default);
    }

    protected function redirect($route, $parameters = [], $status = 302)
    {
        return $this->app->redirect($this->app->url($route, $parameters), $status);
    }

    protected function render($page)
    {
        return $this->app->render('Templates/Index.twig', ['page' => $page]);
    }
}
