<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\FoodController;
use App\Http\Controllers\RestaurantController;
use App\Http\Controllers\MapLocationController;
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

Route::get('/food', [FoodController::class, 'index']);
Route::get('/food/{id}', [FoodController::class, 'edit']);
Route::post('/food', [FoodController::class, 'store']);
Route::patch('/food/{id}', [FoodController::class, 'update']);
Route::delete('/food/{id}', [FoodController::class, 'destroy']);

Route::get('/category', [CategoryController::class, 'index']);
Route::get('/category/{id}', [CategoryController::class, 'edit']);
Route::post('/category', [CategoryController::class, 'store']);
Route::patch('/category/{id}', [CategoryController::class, 'update']);
Route::delete('/category/{id}', [CategoryController::class, 'destroy']);

Route::get('/restaurant', [RestaurantController::class, 'index']);
Route::get('/restaurant/{id}', [RestaurantController::class, 'edit']);
Route::post('/restaurant', [RestaurantController::class, 'store']);
Route::patch('/restaurant/{id}', [RestaurantController::class, 'update']);
Route::delete('/restaurant/{id}', [RestaurantController::class, 'destroy']);

Route::get('/userFood', [FoodController::class, 'showFoodCategory']);
Route::get('/userFood/{id}', [FoodController::class, 'showFoodByCategory']);

Route::get('/getCategory', [CategoryController::class, 'displayCategories']);

Route::get('/map', [MapLocationController::class, 'location_details']);
Route::get('/map/{id}', [MapLocationController::class, 'location_detailsById']);

Route::view('/{path?}', 'app');
