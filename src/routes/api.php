<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\API\ApiAccountController;
use App\Http\Controllers\API\ApiMenuController;
use App\Http\Controllers\API\ApiOrderController;
use App\Http\Controllers\API\ApiAdmiController;
use App\Http\Controllers\SocialLoginController;
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

//LINE以外のSocialログイン
Route::get('/login/{providers}', [SocialLoginController::class, 'redirectToProvider']);
Route::get('/login/{providers}/callback', [SocialLoginController::class, 'handleProviderCallback']);

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function() {
Route::group(['middleware' => 'api'], function () {

Route::get('/test', static function () {
    $status = ['status' => 200, 'message' => 'success'];
    return compact('status');
});

//[Menu]一覧を表示
Route::get('/menu/index',[ApiMenuController::class,'indexMenu']);
//[Menu]アルコールメニュー一覧を表示
Route::get('/menu/alcohol',[ApiMenuController::class,'alcoholMenu']);
//[Menu]ノンアルコールメニュー一覧を表示
Route::get('/menu/nonalcohol',[ApiMenuController::class,'nonAlcoholMenu']);
//[Menu]フードメニュー一覧を表示
Route::get('/menu/food',[ApiMenuController::class,'foodMenu']);

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

//[User]ユーザーデータ取得
Route::get('/fetchuser', [AuthController::class, 'fetchUserInfo']);

//[User]ユーザーデータ取得
Route::get('/loginuser', [AuthController::class, 'fetchUserSimple']);

//[admin][Order]orderindexデータ取得
Route::get('/admin/orderindex',[ApiAdmiController::class,'orderIndex']);

//[admin][Order]served→served_flag更新
Route::post('/admin/serve/{order_id}',[ApiAdmiController::class,'serveOrder']);

});

});


