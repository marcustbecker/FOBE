<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\FoodController;
use App\Http\Controllers\foodController2;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\RestaurantController;
use App\Models\User;

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

Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);

Route::get('/food', [foodController2::class, 'index']);
Route::post('/food', [foodController2::class, 'store']);
Route::put('/food/:id', [foodController2::class, 'update']);
Route::delete('/food/:id', [foodController2::class, 'destroy']);

// Route::get('/food', 'foodController@index');
// Route::post('/food', 'foodController@store');
// Route::put('/food/{id}', 'foodController@update');
// Route::delete('/food/{id}', 'foodController@destroy');

//Route::resource('/food', "foodController2");

// Route::get('/food', [FoodController::class, 'index']);
// Route::post('/food', [FoodController::class, 'store']);
// Route::put('/food', [FoodController::class, 'update']);
// Route::delete('/food/:id', [FoodController::class, 'destroy']);

Route::get('/category', [CategoryController::class, 'index']);
Route::post('/category', [CategoryController::class, 'store']);

Route::get('/restaurant', [RestaurantController::class, 'index']);
Route::post('/restaurant', [RestaurantController::class, 'store']);

Route::get('/food', [FoodController::class, 'index']);
Route::post('/food', [FoodController::class, 'store']);
Route::put('/food', [FoodController::class, 'update']);
Route::get('/userFood', [FoodController::class, 'showFoodCategory']);
Route::get('/userFood/{id}', [FoodController::class, 'showFoodByCategory']);

Route::get('/getCategory', [CategoryController::class, 'displayCategories']);

Route::view('/{path?}', 'app');
