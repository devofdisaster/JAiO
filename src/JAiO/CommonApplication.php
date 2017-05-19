<?php

namespace JAiO;

use Dflydev\Provider\DoctrineOrm\DoctrineOrmServiceProvider;
use Doctrine\DBAL\Types\Type;
use Silex\Application;
use Silex\Provider;

class CommonApplication extends Application
{
    use Application\UrlGeneratorTrait;

    public function __construct($devEnv = false, array $params = [])
    {
        parent::__construct($params);

        $this['config'] = function () {
            return new Config();
        };

        $this->registerCoreProviders();
        $this->registerDoctrineProviders();

        if ($devEnv) {
            $this['debug'] = true;
        }

        $this->setupThirdPartyOptions();
    }

    protected function registerCoreProviders()
    {
        $this->register(new Provider\ServiceControllerServiceProvider());
        $this->register(new Provider\LocaleServiceProvider());
        $this->register(new Provider\TranslationServiceProvider(), array(
            'locale_fallbacks' => array('en'),
        ));
        $this->register(new Provider\MonologServiceProvider(), array(
            'monolog.logfile' => ROOT_PATH . '/development.log',
        ));
    }

    protected function registerDoctrineProviders()
    {
        $this->register(new Provider\DoctrineServiceProvider(), [
            'db.options' => [
                'driver' => 'pdo_mysql',
                'dbname' => $this['config']->get('db.name'),
                'user' => $this['config']->get('db.user'),
                'password' => $this['config']->get('db.password'),
                'port' => $this['config']->get('db.port'),
                'charset' => 'utf8mb4'
            ]
        ]);

        $this->register(new DoctrineOrmServiceProvider(), [
            'orm.proxies_dir' => ROOT_PATH . '/app/cache',
            'orm.em.options' => [
                'mappings' => [
                    [
                        'type' => 'xml',
                        'namespace' => 'JAiO\Domain',
                        'path' => ROOT_PATH . '/src/JAiO/Infrastructure/Resources/Mappings'
                    ]
                ]
            ],
            'orm.auto_generate_proxies' => true
        ]);
    }

    private function setupThirdPartyOptions()
    {
        Type::addType('uuid', 'Ramsey\Uuid\Doctrine\UuidType');
    }
}
