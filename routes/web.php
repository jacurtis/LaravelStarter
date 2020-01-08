<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::auth();
Route::redirect('home', 'dashboard');
Route::get('/', function() {
    return redirect('/dashboard');
});
Route::get('/users', function() {
    return "Coming Soon";
})->name('users');
Route::get('/dashboard', 'HomeController@index')->middleware('permission:dashboard')->name('dashboard');
