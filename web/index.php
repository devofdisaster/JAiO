<?php
require_once __DIR__.'/../vendor/autoload.php';
define('ROOT_PATH', __DIR__ . '/..');

\JAiO\ConfigurationFactory::getApplication()->run();
