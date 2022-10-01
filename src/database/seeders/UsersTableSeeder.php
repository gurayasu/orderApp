<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('users')->insert([
            [
            'email' => 'test1@hoge.com',
            'password' => bcrypt('password'),
            'name' => 'ユーザー1',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
            'email' => 'test2@hoge.com',
            'password' => bcrypt('password'),
            'name' => 'ユーザー2',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
            'email' => 'test3@hoge.com',
            'password' => bcrypt('password'),
            'name' => 'ユーザー3',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
            ],
        ]);
    }
}
