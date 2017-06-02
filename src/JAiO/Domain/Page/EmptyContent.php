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
                    'children' => [
                        [
                            'type' => 'box',
                            'attributes' => [],
                            'parameters' => [
                                'style' => [
                                    'background-color' => 'red',
                                    'box-sizing' => 'border-box',
                                    'width' => 100,
                                    'height' => 100,
                                    'top' => 340,
                                    'left' => 234,
                                    'position' => 'absolute'
                                ]
                            ]
                        ],
                        [
                            'type' => 'box',
                            'attributes' => [],
                            'parameters' => [
                                'style' => [
                                    'background-color' => 'blue',
                                    'border-radius' => 50,
                                    'box-sizing' => 'border-box',
                                    'width' => 100,
                                    'height' => 100,
                                    'top' => 243,
                                    'left' => 456,
                                    'position' => 'absolute'
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ];
    }
}
