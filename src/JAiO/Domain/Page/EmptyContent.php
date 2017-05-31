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
                    'background-color' => 'red',
                    'color' => 'white',
                    'font-weight' => 900
                ]
            ],
            'children' => [
                [
                    'type' => 'box',
                    'attributes' => [],
                    'parameters' => [
                        'style' => [
                            'background-color' => 'green',
                            'width' => 100,
                            'height' => 100
                        ]
                    ]
                ]
            ]
        ];
    }
}
