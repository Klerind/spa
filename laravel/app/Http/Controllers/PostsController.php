<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Posts;
use App\Models\Products;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;
use Illuminate\Support\Facades\Storage;

class PostsController extends Controller
{
  public function create(Request $request): InertiaResponse
  {//dd($request);
    $request->validate([
      'title' => 'required|string|max:255',
      'description' => 'required|string|max:255',
      'image' => 'required|image',
    ]);

    //  dd($request);
      if ($request->hasFile('image'))
      {
        $file = $request->file('image');
        $fileName = $file->getClientOriginalName();
        $file->storeAs('uploads', $fileName);
      }
      //Storage::setVisibility('98807575_1136924723335015_3301025062416547840_o.jpg', 'public');
      //Storage::disk('local')->put($file, 'Contents');

      Posts::create([
        'post_name' => $request->title,
        'post_description' => $request->description,
        'post_image' => $fileName
      ]);

 //dd(Posts::all());

    return Inertia::render('Profile/Edit', [
        //'canResetPassword' => Route::has('password.request'),
        'status' => session('status'),
    ]);

   }

   public function show(): InertiaResponse
   {
     $posts = Posts::orderBy('created_at', 'desc')->get();
     $products = Products::orderBy('created_at', 'desc')->get();

     foreach ($posts as $post)
     {
       $post->post_image = asset('uploads/'.$post->post_image);
     }

     foreach ($products as $product)
     {
       $product->product_image = asset('uploads/'.$product->product_image);
     }

      //dd($url);
     return Inertia::render('Home/Index', [
         'posts' => $posts,
         'products' => $products,
         'status' => session('status'),
     ]);

   }

}
