<?php

namespace JAiO\Domain\Page\Element;

use JAiO\Domain\Page\Element;

class Text extends Element
{
    public function render() : string
    {
        $attributes = $this->renderAttributes();
        $style = $this->renderStyle();
        $value = htmlentities($this->value ?: '');

        return <<<HTML
<div ${attributes} ${style}>${value}</div>
HTML;
    }
}
