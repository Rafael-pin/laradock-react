<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('user')->group(function () {
    Route::get('/', 'App\Http\Controllers\UserController@index')->name('user.index');
    Route::get('/{id}', 'App\Http\Controllers\UserController@get')->name('user.get');
    Route::post('/new', 'App\Http\Controllers\UserController@store')->name('user.store');
    Route::delete('/delete/{id}', 'App\Http\Controllers\UserController@delete')->name('user.delete');
    Route::put('/update/{id}', 'App\Http\Controllers\UserController@update')->name('user.update');
});

Route::prefix('address')->group(function () {
    Route::get('/', 'App\Http\Controllers\AddressController@index')->name('address.index');
    Route::get('/{id}', 'App\Http\Controllers\AddressController@get')->name('address.get');
    Route::post('/new', 'App\Http\Controllers\AddressController@store')->name('address.store');
    Route::delete('/delete/{id}', 'App\Http\Controllers\AddressController@delete')->name('address.delete');
    Route::put('/update/{id}', 'App\Http\Controllers\AddressController@update')->name('address.update');
});

Route::prefix('company')->group(function () {
    Route::get('/', 'App\Http\Controllers\CompanyController@index')->name('company.index');
    Route::get('/{id}', 'App\Http\Controllers\CompanyController@get')->name('company.get');
    Route::post('/new', 'App\Http\Controllers\CompanyController@store')->name('company.store');
    Route::delete('/delete/{id}', 'App\Http\Controllers\CompanyController@delete')->name('company.delete');
    Route::put('/update/{id}', 'App\Http\Controllers\CompanyController@update')->name('company.update');
});


