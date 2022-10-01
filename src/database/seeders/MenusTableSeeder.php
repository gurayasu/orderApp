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
            ['id' => '1',
            'menu_name' => 'ビール',
            'menu_price' => 400,
            ],
            ['id' => '2',
            'menu_name' => 'ハイボール',
            'menu_price' => 500,
            ],
            ['id' => '3',
            'menu_name' => 'カクテル',
            'menu_price' => 600,
            ],
        ]);
    }
}
