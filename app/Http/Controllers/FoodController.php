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
        $allFoods = Food::all();
        //return response()->json($foods);
        //$allFoods = $food->whereIn('id', $request->user())->with('user');
        $foods = $allFoods->sortBy('foodName');
        // return json response
        return response()->json([
            'foods' => $foods,
        ]);
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
        $request->validate([
            'foodName' => 'required',
            'categoryID' => 'required',
            'foodPrice' => 'required',
            'foodDescription' => 'required'
        ]);
        $food = Food::create($request->all());
        //return food with message
        return response()->json([
            'message' => 'Food Created Successfully!',
            'food' => $food
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Food  $food
     * @return \Illuminate\Http\Response
     */
    public function show(Food $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Food  $food
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $food = Food::find($id);
        return response()->json($food);
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
        $food = Food::find($id);
        $food->foodName = $request->foodName;
        $food->categoryID = $request->categoryID;
        $food->foodDescription = $request->foodDescription;
        $food->foodPrice = $request->foodPrice;
        $food->save();
        return response()->json([
            'message' => 'Food Updated Successfully!',
            'food' => $food
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Food  $food
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $food = Food::find($id);
        if ($food->delete()) {
            return response()->json([
                'message' => 'Food Deleted Successfully'
            ]);
        }
    }

    public function showFoodByCategory($id) {
        $food = Food::where('categoryID', $id)->get();
        // return json response
        return response()->json([
            'id' => $id,
            'food' => $food,
        ]);
    }
}
