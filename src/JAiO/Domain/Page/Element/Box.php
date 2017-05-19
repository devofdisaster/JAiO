<?php

namespace JAiO\Domain\Page\Element;

use JAiO\Domain\Page\Element;

class Box extends Element
{
    public function render() : string
    {
        $attributes = $this->renderAttributes();
        $style = $this->renderStyle();

        return <<<HTML
<div ${attributes} ${style}></div>
HTML;
    }
}
