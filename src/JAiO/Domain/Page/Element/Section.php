<?php

namespace JAiO\Domain\Page\Element;

use JAiO\Domain\Page\Element;

class Section extends Element
{
    public function render() : string
    {
        $attributes = $this->renderAttributes();
        $style = $this->renderStyle();
        $children = $this->renderChildren();
        $uuid = $this->uuid;

        return <<<HTML
<div id="${uuid}" ${attributes} ${style}>${children}</div>
HTML;
    }
}
