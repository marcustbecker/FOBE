<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Models\User;

class UserController extends Controller
{
    private $status_code = 200;
 /*   //User functionality controller
    private $status_code = 200;

     // ------------------ [ User Registration ] ---------------------
    public function userSignUp(Request $request) {
        $validator = Validator::make($request->all(), [
            "username" => "required",
            "name" => "required",
            "email" => "required|email",
            "password" => "required"
        ]);

        if($validator->fails()) {
            return response()->json(["status" => "failed", "message" => "validation_error", "errors" => $validator->errors()]);
        }

        //Name split into first and last name.
        $name = $request->name;
        $name = explode(" ", $name);
        $first_name = $name[0];
        $last_name = "";

        if(isset($name[1])) {
            $last_name = $name[1];
        }

        $userDataArray = array(
            "username" => $request->username,
            "first_name" => $first_name,
            "last_name" => $last_name,
            "full_name" =>  $request->name,
            "email" => $request->email,
            "password" => md5($request->password),
        );

        $user_status = User::where("username", $request->username)->first();

        if(!is_null($user_status)) {
           return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! Username already registered"]);
        }

        $user = User::create($userDataArray);

        if(!is_null($user)) {
            return response()->json(["status" => $this->status_code, "success" => true, "message" => "Registration completed successfully", "data" => $user]);
        }

        else {
            return response()->json(["status" => "failed", "success" => false, "message" => "failed to register"]);
        }
    }
    // ------------------ [ User Login ] ---------------------
    public function userLogin(Request $request) {

        $validator = Validator::make($request->all(),
            [
                "username" => "required",
                "password" => "required"
            ]
        );

        if($validator->fails()) {
            return response()->json(["status" => "failed", "validation_error" => $validator->errors()]);
        }


        // check if entered username exists in db
        $username_status = User::where("username", $request->username)->first();


        // if username exists then we will check password for the same username

        if(!is_null($username_status)) {
            $password_status = User::where("username", $request->username)->where("password", md5($request->password))->first();

            // if password is correct
            if(!is_null($password_status)) {
                $user = $this->userDetail($request->username);

                return response()->json(["status" => $this->status_code, "success" => true, "message" => "You have logged in successfully", "data" => $user]);
            }

            else {
                return response()->json(["status" => "failed", "success" => false, "message" => "Unable to login. Incorrect password."]);
            }
        }

        else {
            return response()->json(["status" => "failed", "success" => false, "message" => "Unable to login. Username doesn't exist."]);
        }
    }

    // ------------------ [ User Details ] ---------------------
    public function userDetail($username) {
        $user = array();
        if ($username != "") {
            $user = User::where("username", $username)->first();
            return $user;
        }
    } */

    // ---------------------- [ Register User ] ----------------------
    public function register(Request $request) {

        $validator = Validator::make($request->all(), [
            'fname' => 'required',
            'lname' => 'required',
            'username' => 'required',
            'email' => 'required|email',
            'password' => 'required|confirmed|min:6'
        ]);
        
        $user_array = array(
            'fname' => $request->fname,
            'lname' => $request->lname,
            'username' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        );
        

        if($validator->fails()) {
            return response()->json(["status" => "failed", "success" => false, "message" => "validation_error", "errors" => $validator->errors()]);
            JavaScript::put([ 'errors' => $validator->errors() ]);
        }

        $user_status = User::where("username", $request->username)->first();

        if(!is_null($user_status)) {
           return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! Username already registered", "errors" => $validator->errors()]);
        }

        $user = User::create($user_array);

        if(!is_null($user)) {
            $user->save();
            $token =$user->createToken($user->email.'-'.now());
            return response()->json(["status" => $this->status_code, "success" => true, "message" => "Registration completed successfully", 'token' =>$token->accessToken, "user" => $user]);
        }

        else {
            return response()->json(["status" => "failed", "success" => false, "message" => "failed to register"]);
        }
    }

    // ---------------------- [ Login ] ----------------------
    public function login(Request $request) {

        $validator = Validator::make($request->all(), [
            'username' => 'required|exists:users,username',
            'password' => 'required|min:6'
        ]);
        //$request->validate([
        //]);

        if($validator->fails()) {
            return response()->json(["status" => "failed", "success" => false, "message" => "validation_error", "errors" => $validator->errors()]);
            JavaScript::put([ 'errors' => $validator->errors() ]);
        }

        if (Auth::attempt(['username' => $request->username, 'password' => $request->password])){

            $user = Auth::user();
            $token = $user->createToken($user->username.'-'.now());
            return response() ->json([
                'token' => $token->accessToken,
                'user' => $user,
                'success' => true
            ]);
        } else {
            return response()->json(['success' => false, 'message' => "Wrong Password", 'errors' => $validator->errors()]);
        }
    }
}