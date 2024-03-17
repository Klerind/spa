<?php

use Illuminate\Support\Facades\Route;
use \App\Models\Listing;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/ 

Route::get('/', function () {
    return view('pages/welcome',[]);
});


Route::get('/welcome', function () {
    return view('welcome');
});

Route::get('/about', function () {
    return view('pages/about');
}); 

Route::get('/contact', function () {
    return view('pages/contact');
});

Route::get('/api', function () {
   // return view('pages/api'); 
    echo 'form api route';
}); 

Route::get('/post/{id}', function ($id) {
    return view('pages/post', [
           'listing' => Listing::find($id)
   ]);
});