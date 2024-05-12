<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Posts;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class PostsController extends Controller
{
  public function create(Request $request): InertiaResponse
  {
    //$requests = $request->input();
    $request->validate([
      'title' => 'required|string|max:255',
      'description' => 'required|string|max:255',
      'image' => 'required|string|max:255',
    ]);

      Posts::create([
        'post_name' => $request->title,
        'post_description' => $request->description,
        'post_image' => $request->image
      ]);

 //dd(Posts::all());

    return Inertia::render('Profile/Edit', [
        //'canResetPassword' => Route::has('password.request'),
        'status' => session('status'),
    ]);

   }

   public function show(): InertiaResponse
   {

     return Inertia::render('Home/Index', [
         'posts' => Posts::all(),
         'status' => session('status'),
     ]);

   }

}
