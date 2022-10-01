<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use App\Models\Order;
use App\Models\Menu;
use App\Models\Account;

class ApiOrderController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    //[Order]orderを作成
    public function createOrder(Request $request,$menu_id,$menu_num){

        $user = Auth::user();
        $user_id = $user->id;
        $menu = Menu::find($menu_id);
        $order_price=$menu->menu_price * $menu_num;

        \DB::beginTransaction();
        try {
        //生きているaccountがなければaccountを作る
        $account_currnet=Account::firstOrCreate(
            ['user_id' => $user_id,'paid_flag'=>0]
        );

        //orderを作る
        $order = new Order();
        $order->create([
            'user_id'=>$user_id,
            'menu_id'=>$menu_id,
            'menu_num'=>$menu_num,
            'order_price'=>$order_price,
            'account_id'=>$account_currnet['id'],
        ]);

        //accountの合計金額を更新
        Account::where('id',$account_currnet['id'])->increment('total_price',$order_price);

        \DB::commit();
        //withでaccountとそれに紐づくorderの情報取得
        $account_order=Account::with('orders')->find($account_currnet['id']);
        return response()->json($account_order,200);

        } catch (\Exception $e) {
            \DB::rollback();
            Log::debug(print_r($e->getMessage(), true));
        }
}

    /**
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    //[Order]userごとのaccount,orderを表示
    public function userOrder(Request $request){

        $user = Auth::user();
        $user_id = $user->id;
        $account_currnet = Account::where(['user_id' => $user_id],['paid_flag'=>0])->first();

        //withでaccountとそれに紐づくorderの情報取得
        $account_order=Account::with('orders')->find($account_currnet['id']);
        return response()->json($account_order,200);
    }
}
