<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use App\Models\Account;

class ApiAccountController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    //[Account]accountのpaid_flag更新(会計支払い)
    public function payAccount(Request $request){

        $user = Auth::user();
        $user_id = $user->id;

        \DB::beginTransaction();
        try {
        //accountのpaid_flagを更新
        $account_currnet=Account::updateOrCreate(
            ['user_id' => $user_id,'paid_flag'=>0],
            ['paid_flag' => 1,'paid_date'=>date('Y-m-d H:i:s')]
        );

        //accountに紐づくorderのpaid_flag,paid_dateを更新
        $orders=Account::find($account_currnet['id'])->orders;
        foreach ($orders as $order){
            $order['paid_flag']=$account_currnet['paid_flag'];
            $order['paid_date']=$account_currnet['paid_date'];
            $order->save();
        }

        \DB::commit();

        //withでaccountとそれに紐づくorderの情報取得
        $account_order=Account::with('orders')->find($account_currnet['id']);
        return response()->json($account_order,200);

        } catch (\Exception $e) {
            \DB::rollback();
            Log::debug(print_r($e->getMessage(), true));
        }
    }
}