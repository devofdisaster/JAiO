<?php

namespace JAiO\Domain\Page;

use JAiO\Domain\Page;
use JAiO\ElementFactory;
use Ramsey\Uuid\Uuid;

abstract class Element
{
    /**
     * @var \Ramsey\Uuid\UuidInterface
     */
    protected $uuid;
    protected $type;
    protected $attributes;
    protected $parameters;
    protected $children = [];

    public function __construct(\stdClass $element, Page $page = null)
    {
        $this->uuid = isset($element->uuid) ? Uuid::fromString($element->uuid) : Uuid::uuid1();
        $this->type = $element->type;
        $this->attributes = $element->attributes;
        $this->parameters = $element->parameters;
        $this->page = $page;

        if (!empty($element->children)) {
            foreach ($element->children as $child) {
                $this->children[] = ElementFactory::build($child);
            }
        }
    }

    protected function renderChildren() : string
    {
        $html = '';

        if (!empty($this->children)) {
            foreach ($this->children as $child) {
                $html .= $child->render();
            }
        }

        return $html;
    }

    protected function renderAttributes() : string
    {
        $attrs = [];

        foreach ($this->attributes as $name => $value) {
            $attrs[] = sprintf('%s="%s"', $name, $value);
        }

        return join(' ', $attrs);
    }

    protected function renderStyle() : string
    {
        $declarations = [];

        foreach ($this->parameters->style as $name => $value) {
            $declarations[] = sprintf('%s:%s', $name, is_numeric($value) ? sprintf('%spx', $value) : $value);
        }

        return sprintf('style="%s"', join(';', $declarations));
    }

    public function __toString() : string
    {
        return $this->render();
    }

    abstract public function render() : string;
}
