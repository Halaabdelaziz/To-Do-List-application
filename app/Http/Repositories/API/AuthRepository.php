<?php
namespace App\Http\Repositories\API;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Interfaces\API\AuthInterface;

class AuthRepository implements AuthInterface{
    public function register($request){

        $user = User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>Hash::make($request->password),
            
    
        ]);
        $token = $user->createToken('myToken')->plainTextToken;
        return response()->json([
            'user'=>$user,
            'token'=>$token,
            'token_type' => 'Bearer',
        ]);
    
    }
    public function login($request){
        if(! Auth::attempt($request->only('email','password'))){
            return response()->json([
                'message' => 'Login information is invalid.'
            ], 401);
        }
        $user = User::where('email',$request->email)->firstOrFail();
        $token = $user->createToken('myToken')->plainTextToken;
        return response()->json([
            'user'=>$user,
            'token'=>$token
        ]);
    
    }
    public function logout($request){
     
        $request->user()->currentAccessToken()->delete();
        return [
            'message' => 'user logged out'
        ];
    }
}