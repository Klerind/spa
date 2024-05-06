 <?php

use App\Http\Controllers\FieldsTypeController;
use Illuminate\Support\Facades\Route;
use App\Models\FieldsType;

Route::get('api/types',[FieldsTypeController::class, 'show'])->name('api.types');
