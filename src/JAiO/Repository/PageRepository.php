<?php
namespace JAiO\Repository;

use Doctrine\ORM\EntityRepository;
use JAiO\Domain\Page;
use Ramsey\Uuid\Uuid;

class PageRepository extends EntityRepository
{
    /**
     * @param mixed $uuid
     * @param null $lockMode
     * @param null $lockVersion
     * @return Page|object|null
     */
    public function find($uuid, $lockMode = null, $lockVersion = null) : ?Page
    {
        return parent::find(Uuid::fromString($uuid), $lockMode, $lockVersion);
    }

}
