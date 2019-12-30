<?php

namespace App\Providers;

use Auth;
use Config;
use Inertia\Inertia;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
  /**
   * Register any application services.
   *
   * @return void
   */
  public function register()
  {
    Inertia::share([
      // Synchronously
      'app' => [
        'name' => Config::get('app.name')
      ],
      // Lazily
      'auth' => function () {
        return [
          'user' => Auth::user() ? [
            'id' => Auth::user()->id,
            'first_name' => Auth::user()->first_name,
            'last_name' => Auth::user()->last_name,
            'role' => Auth::user()->role,
            'level' => Auth::user()->level(),
          ] : null
        ];
      },
      'flash' => [
        'success' => (session()->get('success') ? session()->get('success') : (object) []),
      ],
      'errors' => (session()->get('errors') ? session()->get('errors')->getBag('default')->getMessages() : (object) []),
    ]);
  }

  /**
   * Bootstrap any application services.
   *
   * @return void
   */
  public function boot()
  {
    //
  }
}
