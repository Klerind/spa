<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Widget;
use Inertia\Response as InertiaResponse;
use Inertia\Inertia;

class WidgetController extends Controller
{
  public function create(Request $request): InertiaResponse
  {
    //$requests = $request->input();
    $request->validate([
      'widget' => 'required|string|max:255',]);

    $check_if_widget_exists = Widget::where([
      'name' => $request->widget
    ])->get()->first();
    
    if (!is_null($check_if_widget_exists))
    {
      Widget::create([
        'user_id' => auth()->id(),
        'field_group_id' => $check_if_widget_exists->field_group_id,
        'name' => $check_if_widget_exists->name
      ]);
    }else
    {
      $check_if_widget_field_group_id_exists = Widget::where([
        'field_group_id' => $random_number = mt_rand(1, 1000)
      ])->get()->first();

      if (is_null($check_if_widget_field_group_id_exists))
      {
       Widget::create([
        'user_id' => auth()->id(),
        'field_group_id' => $random_number,
        'name' => $request->widget
      ]);
      }
    }

    return Inertia::render('Profile/Edit', [
        //'canResetPassword' => Route::has('password.request'),
        'status' => session('status'),
    ]);
}

public static function show()
{
  return Widget::where([
    'user_id' => auth()->id()
    ])->get();
}

public function delete(Request $request)
{
  $requests = $request->input();

  Widget::where([
    'widget_id' => $requests['widget_id']
    ])->delete();

  return redirect('/profile');
}

}
