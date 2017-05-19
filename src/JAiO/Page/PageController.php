<?php
namespace JAiO\Page;

use Doctrine\ORM\EntityRepository;
use JAiO\Domain\Page;
use JAiO\Repository\PageRepository;
use Ramsey\Uuid\Exception\InvalidUuidStringException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class PageController
{
    /**
     * @var PageApplication
     */
    private $container;

    public function __construct(PageApplication $container)
    {
        $this->container = $container;
    }

    public function indexAction(string $uuid)
    {
        $page = $this->getPageByUuid($uuid);

        return new Response($page);
    }

    private function getPageByUuid($uuid) : Page
    {
        try {
            return $this->getPageRepository()->find($uuid);
        } catch (InvalidUuidStringException $e) {
            throw new \Exception('Page not found', 404);
        }
    }

    /**
     * @return PageRepository|EntityRepository
     */
    private function getPageRepository() : PageRepository
    {
        return $this->getRepository('Page');
    }

    private function getRepository($name) : ?EntityRepository
    {
        return $this->container['orm.em']->getRepository(sprintf('\JAiO\Domain\%s', $name));
    }
}
