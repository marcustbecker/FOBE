<?php

namespace App\Http\Controllers;

use App\Models\Food;
use Illuminate\Http\Request;

class foodController2 extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $foods = Food::get();
        return response()->json(['status' => 200, 'foods' => $foods]);
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
        $newFood = Food::create([
            'foodName' => $request->foodName,
            'categoryID' => $request->categoryID,
            'foodPrice' => $request->foodPrice,
            'foodDescription' => $request->foodDescription
        ]);
        if ($newFood) {
            return response()->json(["status" => 200]);
        }
        // $request->validate([
        //     'foodName' => 'required',
        //     'categoryID' => 'required',
        //     'foodPrice' => 'required',
        //     'foodDescription' => 'required'
        // ]);
        // $food = Food::create($request->all());
        // return response()->json([
        //     'message' => 'Food Created Successfully!',
        //     'food' => $food
        // ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $foods = Food::find($id);
        return response()->json(['status' => 200, 'foods' => $foods]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $foods = Food::find($id);
        $foods->foodName = $request->foodName;
        $foods->categoryID = $request->categoryID;
        $foods->foodPrice = $request->foodPrice;
        $foods->foodDescription = $request->foodDescription;
        if ($foods->save()) {
            return response()->json(["status" => 200]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $foods = Food::find($id);
        if ($foods->delete()) {
            return response()->json(["status" => 200]);
        }
    }
}
