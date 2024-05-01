<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Mail\SendMail;
use Illuminate\Support\Facades\Mail;

class EmailController extends Controller
{
  public function sendMail(Request $request): Response
  { //dd($request);

      Mail::to('test@test.com')->send(new SendMail($request));
      return response('Hello World', 200)
                  ->header('Content-Type', 'text/plain');;
  }
}
