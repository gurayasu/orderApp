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
            'description'=>'一番搾りとは、ビール製造時に、原料のもろみの自重だけで自然に流れでる麦汁のことを指す。',
            'alcohol'=>1,
            'pictureId'=>'1tx-81QUDhqygBbMEgLt8Qbq_TpYbR6IC&'
            ],
            [
            'menu_name' => 'ハイネケン',
            'menu_price' => 500,
            'description'=>'オランダのビール会社。世界第2位のシェアを占める。',
            'alcohol'=>1,
            'pictureId'=>'1UWg-u-g1hNctuQFfrNUDW4AmoxoYUWAH'
            ],
            [
            'menu_name' => '角ハイボール',
            'menu_price' => 600,
            'description'=>'ハイボールの語源は諸説ある。',
            'alcohol'=>1,
            'pictureId'=>'1xymYSy1UOG96gpOIqRCG_OQfLRKYVvam'
            ],
            [
            'menu_name' => '角ロック',
            'menu_price' => 600,
            'description'=>'1937年発売。角瓶は太平洋戦争時、日本海軍に大量納入され海軍指定品になった。',
            'alcohol'=>1,
            'pictureId'=>'1LD9s4qLD0K9nY9sfsb81b1iHX5h09MZM'
            ],
            [
            'menu_name' => 'React',
            'menu_price' => 600,
            'description'=>'Metaによって開発されたJavaScriptライブラリ。ドリンクはボルスブルー使用。',
            'alcohol'=>1,
            'pictureId'=>'1fJb4xNP5pxgxReBwUaHifBEBBlvWeJRs'
            ],
            [
            'menu_name' => 'PHP',
            'menu_price' => 600,
            'description'=>'語源は "Personal Home Page Tools"。ドリンクはルフェタムール使用。',
            'alcohol'=>1,
            'pictureId'=>'1sNcXC13xPHGUf88HojrTEIJFJUpZz9_4'
            ],
            [
            'menu_name' => 'Laravel',
            'menu_price' => 600,
            'description'=>'2022年、GitHubでのスター数がバックエンド系フレームワーク中で最も多い。カシスソーダ',
            'alcohol'=>1,
            'pictureId'=>'1GMrN6IlrycyMuJrqH4HbmqPThI1jq4iW'
            ],
            [
            'menu_name' => 'JavaScript',
            'menu_price' => 600,
            'description'=>'開発当初はLiveScript、Javaが注目を集めていた時期に改名。オレンジ・ブロッサム。',
            'alcohol'=>1,
            'pictureId'=>'15SQ6qLNpV6SDfjqB5ryPgxbkYv0rGCWF'
            ],
            [
            'menu_name' => 'Ruby',
            'menu_price' => 600,
            'description'=>'語源はパールの次の誕生石、Perlに続く。レッドアイ。',
            'alcohol'=>1,
            'pictureId'=>'1e0MpZsml8ezmf_JEvuDwmg5Io1owWsth'
            ],
            [
            'menu_name' => 'コーラ',
            'menu_price' => 600,
            'description'=>'コカ・コーラは当初、シロップを水で希釈した商品で炭酸飲料ではなかった。',
            'alcohol'=>0,
            'pictureId'=>'1f9Gp6AzLDXBkHm1oNnGQNZofktUj-vBh'
            ],
            [
            'menu_name' => 'ジンジャーエール',
            'menu_price' => 600,
            'description'=>'商標は、カナダドライが「ジンジャーエール」で、ウィルキンソンが「ジンジャエール」。',
            'alcohol'=>0,
            'pictureId'=>'1axW7c_ZbrR9V9258oUQOn46HGEDB4zlA'
            ],
            [
            'menu_name' => 'HTML',
            'menu_price' => 600,
            'description'=>'1993年に仕様が公開され、現在も改良が続けられている。ノンアルカシスオレンジ。',
            'alcohol'=>0,
            'pictureId'=>'1QG59_O64ReNxGV9YHKeK8sGoH1kd2dgn'
            ],
        ]);
    }
}
