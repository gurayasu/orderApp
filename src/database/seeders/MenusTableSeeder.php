<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class MenusTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('menus')->insert([
            [
            'menu_name' => 'キリン一番搾り',
            'menu_price' => 400,
            'description'=>'一番搾りは、ビール製造時に原料のもろみの自重だけで自然に流れでる麦汁を指す。',
            'alcohol'=>1,
            'pictureId'=>'1duqAFRcXKKnpYYnZIkvFfddRqFf66bOZ'
            ],
            [
            'menu_name' => 'ハイネケン',
            'menu_price' => 500,
            'description'=>'オランダのビール会社。世界第2位のシェアを占める。',
            'alcohol'=>1,
            'pictureId'=>'1tqG-s2gz_7b6OzOkJG63MTqALeq1PEUb'
            ],
            [
            'menu_name' => '角ハイボール',
            'menu_price' => 600,
            'description'=>'1937年発売。角瓶は太平洋戦争時、日本海軍に大量納入され海軍指定品になった。',
            'alcohol'=>1,
            'pictureId'=>'18D1ETBQpkgKhGYVKcDOaNwVva0HDw00p'
            ],
            [
            'menu_name' => 'React',
            'menu_price' => 600,
            'description'=>'Metaによって開発されたJavaScriptライブラリ。ドリンクはボルスブルー使用。',
            'alcohol'=>1,
            'pictureId'=>'1Qm7z_Q-AjHV_wo5mXfXnOtgP9QN0l98Y'
            ],
            [
            'menu_name' => 'PHP',
            'menu_price' => 600,
            'description'=>'語源は "Personal Home Page Tools"。ドリンクはルフェタムール使用。',
            'alcohol'=>1,
            'pictureId'=>'1fRN1uSQ1ZAuO0_foaHjAUsK6rhy8QXOI'
            ],
            [
            'menu_name' => 'Laravel',
            'menu_price' => 600,
            'description'=>'2022年、GitHubでのスター数がバックエンド系フレームワーク中で最も多い。カシスソーダ',
            'alcohol'=>1,
            'pictureId'=>'1SkMzcVy6fPmgCDxW-HS2DKgudrqQEjB8'
            ],
            [
            'menu_name' => 'JavaScript',
            'menu_price' => 600,
            'description'=>'開発当初はLiveScript、Javaが注目を集めていた時期に改名。オレンジ・ブロッサム。',
            'alcohol'=>1,
            'pictureId'=>'17FGhc_xw_Mxy689hk3xxI2CH6csmPI3K'
            ],
            [
            'menu_name' => 'Ruby',
            'menu_price' => 600,
            'description'=>'語源はパールの次の誕生石、Perlに続くという意味。レッドアイ。',
            'alcohol'=>1,
            'pictureId'=>'1lSCvmv-2OtoJ_cajcAxf-Z2ySlRfKScJ'
            ],
            [
            'menu_name' => 'コーラ',
            'menu_price' => 600,
            'description'=>'コカ・コーラは当初、シロップを水で希釈した商品で炭酸飲料ではなかった。',
            'alcohol'=>0,
            'pictureId'=>'1N-FIe9g8l4YfUIfpS-jVD-gn0D4CVQRA'
            ],
            [
            'menu_name' => 'ジンジャーエール',
            'menu_price' => 600,
            'description'=>'商標は、カナダドライが「ジンジャーエール」で、ウィルキンソンが「ジンジャエール」。',
            'alcohol'=>0,
            'pictureId'=>'1XmmlCiLBcyOb3yRlcb9UniZJOGhe_VVV'
            ],
            [
            'menu_name' => 'HTML',
            'menu_price' => 600,
            'description'=>'1993年に仕様が公開され、現在も改良が続けられている。ノンアルカシスオレンジ。',
            'alcohol'=>0,
            'pictureId'=>'1MhSwSvJZit4m6J98Hw3jHUoX-VmnlTfv'
            ],
            [
            'menu_name' => 'ホットサンド',
            'menu_price' => 400,
            'description'=>'ハム×チーズ×からしマヨのホットサンド。画像はイメージです。',
            'alcohol'=>3,
            'pictureId'=>'1-Je6qo7iWsm9KT9YAwryfSI_eKmvyRUU'
            ],
            [
            'menu_name' => 'おつまみセット',
            'menu_price' => 500,
            'description'=>'からあげなどおつまみ3品。カウンターで中身見れます。',
            'alcohol'=>3,
            'pictureId'=>'1x_ufJg1ClaGmJmajnNCbntbl2NwGQdFz'
            ],
        ]);
    }
}
