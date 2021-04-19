<?php

namespace App\Http\Controllers;
use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class UserController extends Controller
{
    function index(){
        $data =  Http::get("https://api.documenu.com/v2/restaurants/distance?lat=41.7529&lon=-88.3482&minutes=4&mode=driving&key=38bf17f15c267b087b6b778f57d81e24")
        ->json();

        $response = json_decode(json_encode($data),true);
       

          
          foreach ($response['data'] as $movie ) {
            
            echo '<dl style="margin-bottom: 1em;">';
            $name =  $movie['restaurant_name'];
            if(strpos($name, '\'') == true){
              $name = str_replace('\'', '',$name);
            }
            foreach ( $movie['geo'] as $key => $value ) {
              if($key == 'lat'){
                $lat = $value;
              } else{
                $lon = $value;
              }
            }
            foreach ( $movie['address'] as $key => $value) {
              if($key == 'formatted'){
               $address = $value; 
              }
            }

            $data=array('name'=>$name,"lat"=>doubleval($lat),"lon"=>doubleval($lon),"addr"=>$address);
            DB::table('locations')->insert($data);
            echo "Record inserted successfully.<br/>";
            echo '</dl>';
          }
    }
  }
