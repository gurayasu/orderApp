<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\API\ApiAccountController;
use App\Http\Controllers\API\ApiMenuController;
use App\Http\Controllers\API\ApiOrderController;
use App\Models\Menu;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function() {
    Route::group(['middleware' => 'api'], function () {

    //[Menu]一覧を表示
    Route::get('/menu/index',[ApiMenuController::class,'indexMenu']);
    //[Menu]特定idのメニューを表示
    Route::get('/menu/{menu_id}',[ApiMenuController::class,'selectMenu']);

    //[Order]order作成
    Route::post('/order/{menu_id}',[ApiOrderController::class,'createOrder']);
    //[Order]userごとのorders表示
    Route::get('/order/user_order',[ApiOrderController::class,'userOrder']);

    //[Account]accountのpaid_flag更新(会計支払い)
    Route::post('/account/pay',[ApiAccountController::class,'payAccount']);

    //[User]ログアウト
    Route::post('/logout', [AuthController::class, 'logout']);
});
});


