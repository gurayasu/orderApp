<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\SocialLoginController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// apiプレフィックスは除外
Route::get('/{any?}', fn() => view('index'))->where('any', '(?!api).+');

// Route::get('/', function () {
//   return view('index');
// });

// Route::get('/home', function () {
//   return view('index');
// });

// Route::get('/{any}', function () {
//     return view('index');
// })->where('any', '.*');

// Route::get('/linelogin', 'LineLoginController@lineLogin')->name('linelogin');
// Route::get('/callback', 'LineLoginController@callback')->name('callback');

// // 以下、LINEログイン系のルーティング
// Route::get('/login/line/redirect', [LoginController::class, 'redirectToProvider'])->name('line.redirect');
// Route::get('/login/line/callback', [LoginController::class, 'handleProviderCallback'])->name('line.callback');

// //LINE以外のSocialログイン
// Route::get('/login/{providers}', [SocialLoginController::class, 'redirectToProvider']);
// Route::get('/login/{providers}/callback', [SocialLoginController::class, 'handleProviderCallback']);