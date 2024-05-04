<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FieldsType;
use Inertia\Response as InertiaResponse;
use Inertia\Inertia;

class FieldsTypeController extends Controller
{
  public function show()
  {
    //return Inertia::render('Auth/Register');
    //dd(FieldsType::all());
   return FieldsType::all();
  }
}
