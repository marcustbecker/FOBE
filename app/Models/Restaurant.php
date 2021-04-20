<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Restaurant extends Model
{
    protected $table = 'restaurant';
    use HasFactory;
    protected $fillable = ['name', 'address', 'lat', 'lng'];
}
