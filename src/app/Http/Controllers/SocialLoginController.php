<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class SocialLoginController extends Controller
{
    use AuthenticatesUsers;

    public function redirectToProvider($providers)
    {
        // $validated = $this->validateProvider($providers);
        // if (!is_null($validated)){
        //     return $validated;
        // }
        // return Socialite::driver($providers)->stateless()->redirect();

        $redirectUrl = Socialite::driver($providers)->redirect()->getTargetUrl();
        return response()->json([
            'redirect_url' => $redirectUrl,
        ]);
    }

    public function handleProviderCallback(Request $request, $providers)
    {
        
        $validated = $this->validateProvider($providers);
        if (!is_null($validated)) {
            return $validated;
        }        
        try {
            $user = Socialite::driver($providers)->stateless()->user();
        } catch (ClientException $exception) {
            return response()->json(['error'=>'Invalid credentials provided.'],422);
        }
            $userCreated = User::firstOrCreate(
            [
                'email' => $user->getEmail()
            ],
            [
                'email_verified_at' => now(),
                'name' => $user->getName(),
                'status' => true,
            ],
        );
        $userCreated->providers()->updateOrCreate(
            [
            'providers' => $providers,
            'providers_id' => $user->getId(),
            'avatar' => $user->getAvatar()
            ]
    );
    $token = $userCreated->createToken('token-name')->plainTextToken;
    Auth::login($userCreated, true);
    return $userCreated;
    // return redirect('/');
    // return response()->json($userCreated, 200, ['Access-Token' => $token]);
    // return $this->sendLoginResponse($request);

    
    }

protected function validateProvider($providers)
{
    if (!in_array($providers,['facebook', 'github', 'google'])) {
        return response()->json(["error" => 'Please login using facebook, github or google'],422);
    }
}
}