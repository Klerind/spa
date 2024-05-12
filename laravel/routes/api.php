 <?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FieldsTypeController;
use App\Http\Controllers\PostsController;

Route::get('api/types',[FieldsTypeController::class, 'show'])->name('api.types');

Route::put('api/post/create',[PostsController::class, 'create'])->name('api.post.create');
