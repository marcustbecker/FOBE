<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Restaurant;
use Laravel\Ui\Presets\React;

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

    public function edit($id)
    {
        $restaurant = Restaurant::find($id);
        return response()->json($restaurant);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Food  $food
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $restaurant = Restaurant::find($id);
        $restaurant->name = $request->name;
        $restaurant->address = $request->address;
        $restaurant->lat = $request->lat;
        $restaurant->lng = $request->lng;
        $restaurant->save();
        return response()->json([
            'message' => 'Restaurant Updated Successfully!',
            'restaurant' => $restaurant
        ]);
    }

    public function destroy($id)
    {
        $restaurant = Restaurant::find($id);
        if ($restaurant->delete()) {
            return response()->json([
                'message' => 'Restaurant Deleted Successfully'
            ]);
        }
    }
}
