<?php

use Forumify\Core\ForumifyKernel;
use Forumify\Plugin\Application\PluginManagerRunner;

require_once dirname(__DIR__).'/vendor/autoload_runtime.php';

return static function (array $context) {
    return match ($context['REQUEST_URI']) {
        '/plugins' => new PluginManagerRunner($context),
        default => new ForumifyKernel($context),
    };
};
