<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function users() {
        return $this->belongsTo(User::class,'id','user_id');
    }

    public function orders() {
        return $this->hasMany(Order::class,'account_id','id');
    }
}
