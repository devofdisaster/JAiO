<?php

namespace JAiO\Domain\Page\Element;

use JAiO\Domain\Page\Element;

class Body extends Element
{
    public function render() : string
    {

        $name = $this->getName();
        $attributes = $this->renderAttributes();
        $style = $this->renderStyle();
        $children = $this->renderChildren();

        return <<<HTML
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${name}</title>
</head>
<body ${attributes} ${style}>
    ${children}
</body>
</html>
HTML;
    }

    private function getName()
    {
        return isset($this->page) ? $this->page->getName() : '';
    }


}
