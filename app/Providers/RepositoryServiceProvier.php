<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvier extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
        $this->app->bind('App\Http\Interfaces\API\AuthInterface','App\Http\Repositories\API\AuthRepository');
        $this->app->bind('App\Http\Interfaces\API\TodoInterface','App\Http\Repositories\API\TodoRepository');
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
