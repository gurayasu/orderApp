<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Menu;

class ApiMenuController extends Controller
{
    //[Menu]一覧を表示
    public function indexMenu(){
        $menuIndex = Menu::get();
        return response()->json($menuIndex,200);
    }

    //[Menu]アルコールメニュー一覧を表示
    public function alcoholMenu(){
        $menuIndex = Menu::where("alcohol",1)->get();
        return response()->json($menuIndex,200);
    }

    //[Menu]ノンアルコールメニュー一覧を表示
    public function nonAlcoholMenu(){
        $menuIndex = Menu::where("alcohol",0)->get();
        return response()->json($menuIndex,200);
    }

    //[Menu]特定idのメニューを表示
    public function selectMenu($menu_id){
        $select_menu = Menu::find($menu_id);
        return response()->json($select_menu,200);
    }
    
}
