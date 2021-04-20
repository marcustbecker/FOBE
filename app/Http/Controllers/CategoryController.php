<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    public function index(Request $request, Category $category)
    {
        $allCategories = Category::all();
        $categories = $allCategories->sortBy('categoryName');
        return response()->json([
            'categories' => $categories,
        ]);
    }
    public function store(Request $request)
    {
        $request->validate([
            'categoryName' => 'required'
        ]);
        $category = Category::create($request->all());
        return response()->json([
            'message' => 'category created',
            'category' => $category
        ]);
    }
    public function displayCategories()
    {
        $category = Category::All();
        $sortedCategory = $category->sortBy('categoryName');

        return response()->json(["message" => "Receiving Categories Data", "categoryData" => $sortedCategory]);
    }
}
