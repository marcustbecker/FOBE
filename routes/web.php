<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('home');
});

Route::get('/react', function () {
    return view('home');
});

Route::get('/userdata', function () {
    $user = DB::table('users')->get();
    return $user;
});

Route::get('/restaurant', function () {
    return view('home');
});
