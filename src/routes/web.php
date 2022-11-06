<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;

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

// Route::get('/{any}', function () {
//     return view('index');
// })->where('any', '.*');

Route::get('/', function () {
    return view('index');
});

// Auth::routes();

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

// 以下、LINEログイン系のルーティング
Route::get('/login/line/redirect', [LoginController::class, 'redirectToProvider'])->name('line.redirect');
Route::get('/login/line/callback', [LoginController::class, 'handleProviderCallback'])->name('line.callback');

