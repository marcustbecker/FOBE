<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'food_category';
    use HasFactory;
    protected $fillable = ['id', 'categoryName'];

}
