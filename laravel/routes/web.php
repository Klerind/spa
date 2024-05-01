<?php
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\EmailController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home/Index');
})->middleware('guest')->name('home');

Route::get('/profile', function () {
    return Inertia::render('profile.edit');
})->middleware(['auth', 'verified'])->name('profile.edit');

Route::get('/auth/home', function () {
    return Inertia::render('Home/Index');
})->middleware(['auth', 'verified'])->name('auth.home');

Route::get('/auth/contact', function () {
    return Inertia::render('Home/Index');
})->middleware(['auth', 'verified'])->name('auth.contact');

Route::get('/about', function () {
    return Inertia::render('About/Index');
})->name('about');

Route::get('/home', function () {
    return Inertia::render('Home/Index');
})->name('home');

Route::get('/contact', function () {
    return Inertia::render('Contact/Index');
})->name('contact');

Route::put('email', [EmailController::class, 'sendMail'])->name('email.sendEmailData');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
