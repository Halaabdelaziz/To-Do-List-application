<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Todo extends Model
{
    use HasFactory;
    protected $fillable =['name','description','start_date','status','user_id'];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
