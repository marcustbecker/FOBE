<?php

namespace App\Http\Controllers;
use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class UserController extends Controller
{
    function index(){
        //DB::table('food')->delete();
        $data =  Http::get("https://api.documenu.com/v2/restaurants/distance?lat=41.7529&lon=-88.3482&minutes=20&mode=driving&fullmenu&cuisine=BBQ&key=38bf17f15c267b087b6b778f57d81e24")
        ->json();
        //var_dump()
        $response = json_decode(json_encode($data),true);
          foreach ($response['data'] as $movie ) {
            
            echo '<dl style="margin-bottom: 1em;">';
            $name =  $movie['restaurant_name'];
            echo ($name);
  
            if(strpos($name, '\'') == true){
              $name = str_replace('\'', '',$name);
            }
            $users = DB::select("select * from restaurant where name = '$name'",);
            $result = json_decode(json_encode($users),true);
            foreach($result as $key => $value){
              if($key == 'id'){
                $id = $value['id'];
              }
            }
            if(empty($users)){
                $this->addRes($movie,$name);
            }
            else{
                echo($id);
                $this->displayMenu($movie,$id);
          }
    }
  }
  function addRes($movie, $name){
    foreach ( $movie['geo'] as $key => $value ) {
      if($key == 'lat'){
        $lat = $value;
        //echo($lat);
      } else{
        $lon = $value;
      }
    }
    foreach ( $movie['address'] as $key => $value) {
      if($key == 'formatted'){
       $address = $value;
      }
    }
  $data=array('name'=>$name,"address"=>$address,"lat"=>doubleval($lat),"lng"=>doubleval($lon));
  DB::table('restaurant')->insert($data);
  echo "Record inserted successfully.<br/>";
  }
  function displayMenu($movie,$id){
   # echo($id);
    foreach($movie['menus'] as $menus){
      //echo($id);
      foreach($menus['menu_sections'] as $menuSections){
        foreach($menuSections['menu_items'] as $key => $value){
          if($key == 'name'){
            $name = $value['name'];
            echo($value['name']);
            echo '</dl>';
          }
          if($key == 'description'){
            $description = $value['description'];
            //echo($value['description']);
            echo '</dl>';
          }
          if($key == 'price'){
            $price = $value['price'];
            //echo($value['price']);
            echo '</dl>';
          }
        }
        $data=array('categoryID'=>7,"foodName"=>$name,"foodDescription"=>$description,"foodPrice"=>$price,"img_src" => "src", "res_id"=>$id);
          DB::table('food')->insert($data); 
      }
    
   }
   //$data=array('categoryID'=>4,"foodName"=>$name,"foodDescription"=>$description,"foodPrice"=>$price,"img_src" => "src", "res_id"=>$id);
      //DB::table('food')->insert($data); 
  }
}
          
        
      

