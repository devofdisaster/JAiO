<?php

namespace JAiO\Domain;

use JAiO\Domain\Page\Element;
use JAiO\Domain\Page\Element\Body;
use JAiO\ElementFactory;
use Ramsey\Uuid\Uuid;

class Page
{
    /**
     * @var Uuid
     */
    private $uuid;
    private $name;
    private $content;

    public function __construct(string $name, string $content)
    {
        $this->name = $name;
        $this->content = $content;
    }

    public function getName() : string
    {
        return $this->name;
    }

    public function getContent() : string
    {
        return $this->content;
    }

    /**
     * @return Body|Element
     */
    public function getBody() : Body
    {
        return ElementFactory::build(json_decode($this->content), $this);
    }

    public function render() : string
    {
        return $this->getBody()->render();
    }

    public function __toString() : string
    {
        return $this->render();
    }


}
