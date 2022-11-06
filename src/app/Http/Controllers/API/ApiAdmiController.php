<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;
use Illuminate\Support\Facades\Log;


class ApiAdmiController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    //[Order]order一覧を表示
    public function orderIndex(){
        $orderIndex=Order::where('served_flag',"=",0)
        ->join('menus', 'orders.menu_id', '=', 'menus.id')
        ->select('orders.id as order_id', 'cancel_flag','created_at','menu_id','menu_num','table_num','served_flag','menu_name')
        ->get();
        return response()->json($orderIndex,200);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    //[Order]orderを作成
    public function serveOrder(Request $request,$order_id){

        Log::debug((int)$order_id);
        Log::debug($request);

        \DB::beginTransaction();
        try{
        Order::where('id','=',(int)$order_id)->update(["served_flag"=>1]);
        \DB::commit();
        $servedOrder = Order::where('id','=',(int)$order_id)->first();
        return response()->json($servedOrder,200);
        }catch (\Exception $e) {
        \DB::rollback();
        Log::debug(print_r($e->getMessage(), true));
    }
}
}
