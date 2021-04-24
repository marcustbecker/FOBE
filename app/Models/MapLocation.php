<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MapLocation extends Model
{
    protected $table = 'restaurant';
    use HasFactory;
    protected $fillable = ['id', 'name', 'address', 'lat', 'lng'];
}
