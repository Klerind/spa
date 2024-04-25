<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/h', function () {
    return Inertia::render('Home/Index');
})->middleware('guest')->name('home');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/auth/home', function () {
    return Inertia::render('Home/Index');
})->middleware(['auth', 'verified'])->name('auth.home');

Route::get('/auth/contact', function () {
    return Inertia::render('Contact/Index');
})->middleware(['auth', 'verified'])->name('auth.contact');

Route::get('/home', function () {
    return Inertia::render('Home/Index');
})->middleware('guest')->name('home');

Route::get('/contact', function () {
    return Inertia::render('Contact/Index');
})->middleware('guest')->name('contact');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
