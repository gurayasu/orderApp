<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Validator;
use Illuminate\Support\Facades\Auth;
class AuthController extends Controller
{
    public function register(Request $request){
        $validator = Validator::make($request->all(), [
            'name'=>'required|max:191',
            'email'=>'required|email|max:191|unique:users,email',
            'password'=>'required|min:8',
        ]);

        if($validator->fails()){
            return response()->json([
                'validation_errors'=>$validator->messages(),
            ]);
        } else {
            $user = User::create([
                'name'=>$request->name,
                'email'=>$request->email,
                'password'=>Hash::make($request->password),
            ]);

            $token = $user->createToken($user->email.'_Token')->plainTextToken;

            return response()->json([
                'status'=>200,
                'username'=>$user->name,
                'token'=>$token,
                'message'=>'Registerd Successfully'
            ]);
        }
    }

    public function login(Request $request) {
        $validator = Validator::make($request->all(), [
            'email'=>'required',
            'password'=>'required',
        ]);

        if ($validator->fails()){
            return response()->json([
                'validation_errors'=>$validator->messages(),
            ]);
        } else {
            $user = User::where('email', $request->email)->first();
            if (! $user || ! Hash::check($request->password, $user->password)) {
                return response()->json([
                    'status'=>401,
                    'message'=>'入力情報が不正です',
                ]);
            } else {
                $token = $user->createToken($user->email.'_Token')->plainTextToken;

                return response()->json([
                    'status'=>200,
                    'username'=>$user->name,
                    'token'=>$token,
                    'message'=>'ログインに成功しました。'
                ]);
            }
        }
    }

    public function logout(){
        auth()->user()->tokens()->delete();
        return response()->json([
            'status'=>200,
            'message'=>'ログアウト成功',
        ]);
    }

    public function fetchUserInfo(){
        $user = auth()->user()->tokens()->get();
        $userInfo = User::where('id',$user[0]->tokenable_id
    )->get();
        return response()->json($userInfo,200);
    }

    public function fetchUserSimple(){
        $user_id=Auth::id();
        $userInfo = User::where('id',$user_id)->get();
        return response()->json($userInfo,200);
    }
}
