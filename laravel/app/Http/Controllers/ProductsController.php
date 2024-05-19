<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Products;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;
use Illuminate\Support\Facades\Storage;

class ProductsController extends Controller
{
  public function create(Request $request): InertiaResponse
  {
     $request->validate([
        'title' => 'required|string|max:255',
        'description' => 'required|string|max:255',
        'price' => 'required|numeric|max:255',
        'image' => 'required|image',
      ]);

        //dd($request);
        if ($request->hasFile('image'))
        {
          $file = $request->file('image');
          $fileName = $file->getClientOriginalName();
          $file->storeAs('uploads', $fileName);
        }
        //Storage::setVisibility('98807575_1136924723335015_3301025062416547840_o.jpg', 'public');
        //Storage::disk('local')->put($file, 'Contents');

        Products::create([
          'product_name' => $request->title,
          'product_description' => $request->description,
          'product_price' => $request->price,
          'product_image' => $fileName
        ]);

   //dd(Posts::all());

      return Inertia::render('Profile/Edit', [
          //'canResetPassword' => Route::has('password.request'),
          'status' => session('status', 'poroduct created'),
      ]);
   }
}
