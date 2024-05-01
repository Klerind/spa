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

      Mail::to('klerindtervoli@klerindtervoli.online')->send(new SendMail($request));
      return response('Hello World', 200);
  }
}