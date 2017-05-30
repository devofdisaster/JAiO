<?php

namespace JAiO\Application;

use JAiO\Config;

class FrontendController
{
    /**
     * @var FrontendApplication
     */
    protected $app;

    public function __construct(FrontendApplication $app)
    {
        $this->app = $app;
    }

    public function preExecute()
    {
    }

    /**
     * @return \Doctrine\ORM\EntityManager
     */
    protected function getEM()
    {
        return $this->app['orm.em'];
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
}
