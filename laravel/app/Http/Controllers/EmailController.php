<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Mail\SendMail;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class EmailController extends Controller
{
  public function sendMail(Request $request): InertiaResponse
  {
    $request->validate([
        'subject' => 'required|string|max:255',
        'email' => 'required|string|lowercase|email|max:255|unique:',
        'message' => 'required|string|max:255',
    ]);

      Mail::to('klerindtervoli@klerindtervoli.online')->send(new SendMail($request));
      //return response('Hello World', 200);
      return Inertia::render('Contact/Index', [
          //'canResetPassword' => Route::has('password.request'),
          'status' => session('status'),
      ]);
  }
}
