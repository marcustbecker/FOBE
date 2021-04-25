<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\MapLocation;
use DB;


class MapLocationController extends Controller
{
    public function location_details() {
        $data = MapLocation::all();
        return response()->json([
            'data'=>$data,
            ]);
    }

    public function location_detailsById($id) {
        $data = MapLocation::where('id', $id)->get();
        return response()->json([
            'data'=>$data,
        ]);
    }
}
