<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    //
    public function displayCategories() {
        $category = Category::All();
        $sortedCategory = $category->sortBy('categoryName');

        return response()->json(["message" => "Receiving Categories Data", "categoryData" => $sortedCategory]);
    }
}
