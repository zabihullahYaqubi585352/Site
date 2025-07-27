<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OrderController;
use Inertia\Inertia;

use App\Http\Controllers\TenantController;

use App\Http\Controllers\Admin\AuthController;

Route::get('/tenants/create', [TenantController::class, 'create'])->name('tenants.create');
Route::post('/tenants', [TenantController::class, 'store'])->name('tenants.store');
Route::get('/tenants', [TenantController::class, 'index'])->name('tenants.index');


Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');


Route::get('/admin', function () {
    return Inertia::render('Admin/AdminLogin'); // Matches resources/js/Pages/Admin/AdminLogin.tsx
})->name('admin.login');

Route::post('/admin/login', [AuthController::class, 'login'])->name('admin.login.submit');


Route::middleware(['auth'])->get('/admin/dashboard', function () {
    return Inertia::render('Admin/Dashboard');
})->name('admin.dashboard');



Route::controller(OrderController::class)->group(function () {
    Route::get('/order', 'index')->name('ordre.index');
    Route::get('/product/{id}', 'getProject')->name('ordre.getProject');
});
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
