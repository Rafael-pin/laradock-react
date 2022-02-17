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

Route::post('/new_user', 'App\Http\Controllers\UserController@store')->name('user.store');

Route::post('/new_address', 'App\Http\Controllers\AddressController@store')->name('address.store');

Route::post('/new_company', 'App\Http\Controllers\CompanyController@store')->name('company.store');
