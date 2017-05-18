<?php
require_once __DIR__.'/../vendor/autoload.php';
define('ROOT_PATH', __DIR__ . '/..');

$devIps = ['127.0.0.1'];
$dev = in_array(@$_SERVER['REMOTE_ADDR'], $devIps);

if ($dev) {
    \Symfony\Component\Debug\ErrorHandler::register();
    \Symfony\Component\Debug\ExceptionHandler::register();
    ini_set('display_errors', 1);
    error_reporting(E_ALL);
}

$app = new JAiO\Application\FrontendApplication($dev);

if ($dev) {
    $app['debug'] = true;
}

$app->run();