<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FieldsType;
use Inertia\Response;
use Inertia\Inertia;

class FieldsTypeController extends Controller
{
  public static function show()
  {
    //$all = FieldsType::all();
     // Inertia::render('Profile/Edit',['event' => $all]);
    //dd(FieldsType::all());
   return FieldsType::all();
  }
}
