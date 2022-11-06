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
            'menu_name' => 'ビール',
            'menu_price' => 400,
            'description'=>'ビール（麦酒、オランダ語: Bier) は、酒の一種。様々な作り方があるが、主に大麦を発芽させた麦芽（デンプンがアミラーゼという酵素で糖化している）を、ビール酵母によりアルコール発酵させて作る製法が一般的である。',
            'alcohol'=>1,
            'pictureId'=>'1BvfWSnisEqvFReT6SHiGKdkvF6YSGOVM'
            ],
            [
            'menu_name' => 'ハイボール',
            'menu_price' => 500,
            'description'=>'ハイボール (Highball) とはカクテルの名称。ウイスキーをソーダ水で割ったもの（ウイスキー・ソーダ）が元祖であるが、広義ではスピリッツ、リキュールをソーダやトニックウォーターなどの炭酸飲料や、フレッシュジュースなどアルコールの含まれていない飲料で割ったもの全般を指す',
            'alcohol'=>1,
            'pictureId'=>'1hR2DIJrLbSWkdPxBqJNIzEbIgk36lh5_'
            ],
            [
            'menu_name' => 'カクテル',
            'menu_price' => 600,
            'description'=>'ハイボール (Highball) とはカクテルの名称。ウイスキーをソーダ水で割ったもの（ウイスキー・ソーダ）が元祖であるが、広義ではスピリッツ、リキュールをソーダやトニックウォーターなどの炭酸飲料や、フレッシュジュースなどアルコールの含まれていない飲料で割ったもの全般を指す',
            'alcohol'=>1,
            'pictureId'=>'1hR2DIJrLbSWkdPxBqJNIzEbIgk36lh5_'
            ],
            [
            'menu_name' => 'ノンアルビール',
            'menu_price' => 400,
            'description'=>'ビール（麦酒、オランダ語: Bier) は、酒の一種。様々な作り方があるが、主に大麦を発芽させた麦芽（デンプンがアミラーゼという酵素で糖化している）を、ビール酵母によりアルコール発酵させて作る製法が一般的である。',
            'alcohol'=>0,
            'pictureId'=>'1BvfWSnisEqvFReT6SHiGKdkvF6YSGOVM'
            ],
            [
            'menu_name' => 'ノンアルハイボール',
            'menu_price' => 500,
            'description'=>'ハイボール (Highball) とはカクテルの名称。ウイスキーをソーダ水で割ったもの（ウイスキー・ソーダ）が元祖であるが、広義ではスピリッツ、リキュールをソーダやトニックウォーターなどの炭酸飲料や、フレッシュジュースなどアルコールの含まれていない飲料で割ったもの全般を指す',
            'alcohol'=>1,
            'pictureId'=>'1hR2DIJrLbSWkdPxBqJNIzEbIgk36lh5_'
            ],
            [
            'menu_name' => 'ビール',
            'menu_price' => 400,
            'description'=>'ビール（麦酒、オランダ語: Bier) は、酒の一種。様々な作り方があるが、主に大麦を発芽させた麦芽（デンプンがアミラーゼという酵素で糖化している）を、ビール酵母によりアルコール発酵させて作る製法が一般的である。',
            'alcohol'=>1,
            'pictureId'=>'1BvfWSnisEqvFReT6SHiGKdkvF6YSGOVM'
            ],
            [
            'menu_name' => 'スーパーハイボール',
            'menu_price' => 500,
            'description'=>'ハイボール (Highball) とはカクテルの名称。ウイスキーをソーダ水で割ったもの（ウイスキー・ソーダ）が元祖であるが、広義ではスピリッツ、リキュールをソーダやトニックウォーターなどの炭酸飲料や、フレッシュジュースなどアルコールの含まれていない飲料で割ったもの全般を指す',
            'alcohol'=>1,
            'pictureId'=>'1hR2DIJrLbSWkdPxBqJNIzEbIgk36lh5_'
            ],
            [
            'menu_name' => 'ビール',
            'menu_price' => 400,
            'description'=>'ビール（麦酒、オランダ語: Bier) は、酒の一種。様々な作り方があるが、主に大麦を発芽させた麦芽（デンプンがアミラーゼという酵素で糖化している）を、ビール酵母によりアルコール発酵させて作る製法が一般的である。',
            'alcohol'=>1,
            'pictureId'=>'1BvfWSnisEqvFReT6SHiGKdkvF6YSGOVM'
            ],
            [
            'menu_name' => 'スーパーハイボール',
            'menu_price' => 500,
            'description'=>'ハイボール (Highball) とはカクテルの名称。ウイスキーをソーダ水で割ったもの（ウイスキー・ソーダ）が元祖であるが、広義ではスピリッツ、リキュールをソーダやトニックウォーターなどの炭酸飲料や、フレッシュジュースなどアルコールの含まれていない飲料で割ったもの全般を指す',
            'alcohol'=>1,
            'pictureId'=>'1hR2DIJrLbSWkdPxBqJNIzEbIgk36lh5_'
            ],
            [
            'menu_name' => 'ノンアルビール',
            'menu_price' => 400,
            'description'=>'ビール（麦酒、オランダ語: Bier) は、酒の一種。様々な作り方があるが、主に大麦を発芽させた麦芽（デンプンがアミラーゼという酵素で糖化している）を、ビール酵母によりアルコール発酵させて作る製法が一般的である。',
            'alcohol'=>0,
            'pictureId'=>'1BvfWSnisEqvFReT6SHiGKdkvF6YSGOVM'
            ],
            [
            'menu_name' => 'ノンアルハイボール',
            'menu_price' => 500,
            'description'=>'ハイボール (Highball) とはカクテルの名称。ウイスキーをソーダ水で割ったもの（ウイスキー・ソーダ）が元祖であるが、広義ではスピリッツ、リキュールをソーダやトニックウォーターなどの炭酸飲料や、フレッシュジュースなどアルコールの含まれていない飲料で割ったもの全般を指す',
            'alcohol'=>1,
            'pictureId'=>'1hR2DIJrLbSWkdPxBqJNIzEbIgk36lh5_'
            ],
        ]);
    }
}
