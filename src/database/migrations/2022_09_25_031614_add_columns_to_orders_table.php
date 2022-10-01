<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsToOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->boolean('cancel_flag')->default(0)->comment('[1]:キャンセル済');
            $table->boolean('paid_flag')->default(0)->comment('[0]:未支払, [1]:支払済');
            $table->timestamp('paid_date')->nullable();
            $table->integer('account_id')->unsigned();
            $table->foreign('account_id')->references('id')->on('accounts')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->dropColumn('cancel_flag');
            $table->dropColumn('paid_flag');
            $table->dropColumn('paid_date');
            $table->dropColumn('account_id');
        });
    }
}
