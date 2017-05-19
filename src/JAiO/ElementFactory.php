<?php
namespace JAiO;

use JAiO\Domain\Page;
use JAiO\Domain\Page\Element;

class ElementFactory
{
    public static function build(\stdClass $element, Page $page = null) : Element
    {
        $class = sprintf('JAiO\Domain\Page\Element\%s', ucfirst($element->type));

        if (!class_exists($class)) {
            throw new \Exception('Element not found');
        }

        return new $class($element, $page);
    }
}
