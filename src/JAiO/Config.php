<?php
namespace JAiO;

use Symfony\Component\Yaml\Parser;

class Config
{
    const CONFIG_PATH = '/app/config/config.yml';
    const PARAMS_PATH = '/app/config/parameters.yml';

    /**
     * @var array
     */
    private $values;
    /**
     * Config constructor.
     */
    public function __construct()
    {
        $parser = new Parser();
        $config = $parser->parse(file_get_contents(ROOT_PATH . self::CONFIG_PATH));
        $parameters = $parser->parse(file_get_contents(ROOT_PATH . self::PARAMS_PATH));

        $config = array_merge_recursive($parameters, $config);

        if (isset($config)) {
            foreach ($config as $property => $value) {
                $this->initialize($property, $value);
            }
        }
    }

    public function get($name, $default = null)
    {
        return isset($this->values[$name]) ? $this->values[$name] : $default;
    }

    public function set($name, $value)
    {
        $this->values[$name] = $value;

        return $this;
    }

    private function initialize($name, $value)
    {
        $this->values[$name] = $value;

        if (is_array($value)) {
            foreach ($value as $property => $val) {
                $this->initialize($name . '.' . $property, $val);
            }
        }
    }

}