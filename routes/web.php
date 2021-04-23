<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\FoodController;
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
Route::post('/food', [FoodController::class, 'store']);
Route::put('/food', [FoodController::class, 'update']);
Route::get('/userFood', [FoodController::class, 'showFoodCategory']);
Route::get('/userFood/{id}', [FoodController::class, 'showFoodByCategory']);

Route::get('/getCategory', [CategoryController::class, 'displayCategories']);

Route::view('/{path?}', 'app');