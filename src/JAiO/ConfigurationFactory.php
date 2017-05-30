<?php

namespace JAiO;

use JAiO\Application\FrontendApplication;
use JAiO\Editor\EditorApplication;
use JAiO\Page\PageApplication;
use Symfony\Component\Debug\ErrorHandler;
use Symfony\Component\Debug\ExceptionHandler;

class ConfigurationFactory
{
    public static function getApplication()
    {
        $devIps = ['::1'];
        $dev = in_array(@$_SERVER['REMOTE_ADDR'], $devIps);

        if ($dev) {
            ErrorHandler::register();
            ExceptionHandler::register();
            ini_set('display_errors', 1);
            error_reporting(E_ALL);
        }

        $host = $_SERVER['HTTP_HOST'];

        switch ($host) {
            case 'app.jaio.dev':
                return new FrontendApplication($dev);
            case 'editor.jaio.dev':
                return new EditorApplication($dev);
            default:
                return new PageApplication($dev);
        }
    }
}
