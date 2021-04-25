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
            'password' => Hash::make($request->password),
            'isAdmin' => 0
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
            return response() ->json([
                "status" => $this->status_code,
                'token' => $token->accessToken,
                'user' => $user,
                'success' => true,
                "message" => "Registration completed successfully"
            ]);
            } else {
            return response()->json(["status" => "failed", "success" => false, "message" => "failed to register"]);
        }
    }

    // ---------------------- [ Login ] ----------------------
    public function login(Request $request) {

        $validator = Validator::make($request->all(), [
            'username' => 'required|exists:users,username',
            'password' => 'required|min:6'
        ]);

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