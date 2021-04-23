<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\MapLocation;
use DB;


class MapLocationController extends Controller
{
    public function location_details() {

        // $data=DB::select('SELECT * FROM locations');
        $data = MapLocation::all();
        return response()->json([
            'data'=>$data,
            ]);
    

        // $category = Category::All();
        // $sortedCategory = $category->sortBy('categoryName');
        // return response()->json(["message" => "Receiving Categories Data", "categoryData" => $sortedCategory]);
    
    }
}
