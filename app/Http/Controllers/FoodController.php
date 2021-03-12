<?php

namespace App\Http\Controllers;

use App\Models\Food;
use Illuminate\Http\Request;

class FoodController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $foods = Food::all();
        return response()->json($foods);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //print("hello");
        //exit();
        //validate
        $request->validate([
            'foodName' => 'required',
            'categoryID' => 'required',
            'foodPrice' => 'required',
            'foodDescription' => 'required'
        ]);
        //print("req=");
        //print_r($request->all());
        //print("reqFood");
        //print($request['foodName']);
        //exit();
        //create new food
        $food = Food::create($request->all());
        //return food with message
        return response()->json([
            'message' => 'food created',
            'food' => $food
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Food  $food
     * @return \Illuminate\Http\Response
     */
    public function show(Food $food)
    {
        return $food;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Food  $food
     * @return \Illuminate\Http\Response
     */
    public function edit(Food $food)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Food  $food
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Food $food)
    {
        $request->validate([
            'foodName' => 'required',
            'foodDescription' => 'required',
            'foodPrice' => 'required'
        ]);
        $food->foodName = $request->foodName();
        $food->foodDescription = $request->foodDescription();
        $food->foodPrice = $request->foodPrice();
        $food->save();

        return response()->json([
            'message' => 'food updated!',
            'food' => $food
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Food  $food
     * @return \Illuminate\Http\Response
     */
    public function destroy(Food $food)
    {
        $food->delete();
        return response()->json([
            'message' => 'food deleted'
        ]);
    }
}
