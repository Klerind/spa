<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FieldsTypeController;
use App\Http\Controllers\PostsController;
use App\Http\Controllers\ProductsController;

Route::get('api/types',[FieldsTypeController::class, 'show'])->name('api.types');

Route::post('api/post/create',[PostsController::class, 'create'])->name('api.post.create');

Route::post('api/product/create',[ProductsController::class, 'create'])->name('api.product.create');
