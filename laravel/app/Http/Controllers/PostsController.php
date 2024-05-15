<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Posts;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;
use Illuminate\Support\Facades\Storage;

class PostsController extends Controller
{
  public function create(Request $request): InertiaResponse
  {
  /*  $request->validate([
      'title' => 'required|string|max:255',
      'description' => 'required|string|max:255',
      'image' => 'required|string|max:255',
    ]); */

      //dd($request);
      if ($request->hasFile('image'))
      {
        $file = $request->file('image');
        $fileName = $file->getClientOriginalName();
        $file->storeAs('uploads', $fileName);
      }
      //Storage::setVisibility('98807575_1136924723335015_3301025062416547840_o.jpg', 'public');
      Storage::disk('local')->put($file, 'Contents');

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
    //  echo '<img src="'.asset('/storage/index.jpeg').'" />';
    //  dd(9);
     return Inertia::render('Home/Index', [
         'posts' => Posts::all(),
         'status' => session('status'),
     ]);

   }

}