<?php

namespace JAiO\Domain\Page;

class EmptyContent implements \JsonSerializable
{
    public function jsonSerialize() : array
    {
        return [
            'type' => 'body',
            'attributes' => [],
            'parameters' => [
                'style' => [
                    'background-color' => 'white',
                    'color' => 'black',
                    'font-weight' => 900,
                    'width' => '100%'
                ]
            ],
            'children' => [
                [
                    'type' => 'section',
                    'attributes' => [],
                    'parameters' => [
                        'style' => [
                            'background-color' => 'lightgreen',
                            'width' => 960,
                            'height' => 700,
                            'margin' => '0 auto',
                            'position' => 'relative'
                        ]
                    ],
                    'children' => []
                ]
            ]
        ];
    }
}
