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
    public function getOneCategory($id)
    {
        $category = Category::find($id);
        return response()->json([
            'category' => $category,
        ]);
    }

    public function edit($id)
    {
        $category = Category::where('id', $id)->get();
        return response()->json($category);
    }

    public function update(Request $request, $id)
    {
        $category = Category::find($id);
        $category->categoryName = $request->categoryName;
        $category->save();
        return response()->json([
            'message' => 'Category Updated Successfully!',
            'category' => $category
        ]);
    }
}
