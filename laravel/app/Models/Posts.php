<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Posts extends Model
{
    use HasFactory;

    protected $table = 'posts';

    protected $primaryKey = 'post_id';

    protected $fillable = [
      'post_name', 'post_description', 'post_image'
    ];

    public function user()
    {
      return $this->belongsTo(User::class, 'user_id');
    }

}
