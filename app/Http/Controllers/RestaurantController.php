<?php

namespace App\Http\Controllers;

use App\Models\Restaurant;
use Illuminate\Http\Request;

class RestaurantController extends Controller
{
    public function index(Request $request, Restaurant $restaurant)
    {
        $allRestaurants = Restaurant::all();
        //return response()->json($foods);
        //$allFoods = $food->whereIn('id', $request->user())->with('user');
        $restaurants = $allRestaurants->sortBy('name');
        // return json response
        return response()->json([
            'restaurants' => $restaurants,
        ]);
    }
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'address' => 'required',
            'lat' => 'required',
            'lng' => 'required'
        ]);
        $restaurant = Restaurant::create($request->all());
        return response()->json([
            'message' => 'restaurant created',
            'restaurant' => $restaurant
        ]);
    }
}
