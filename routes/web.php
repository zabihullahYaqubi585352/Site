<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OrderController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\TenantController;
use Illuminate\Http\Request;

use App\Http\Controllers\Admin\AuthController;

Route::get('/tenants/create', [TenantController::class, 'create'])->name('tenants.create');
Route::post('/tenants', [TenantController::class, 'store'])->name('tenants.store');
Route::get('/tenants', [TenantController::class, 'index'])->name('tenants.index');


Route::post('/admin/logout', function (Request $request) {
    Auth::logout();
    $request->session()->invalidate();
    $request->session()->regenerateToken();
    return redirect('/admin');
})->middleware('auth')->name('admin.logout');


Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');



Route::get('/admin', function () {
    if (Auth::check()) {
        return redirect()->route('admin.dashboard');
    }

    return Inertia::render('Admin/AdminLogin');
})->name('admin.login');

Route::post('/admin/login', [AuthController::class, 'login'])->name('admin.login.submit');





Route::middleware(['auth'])->get('/project', function () {
    return Inertia::render('Admin/Project');
})->name('admin.project');

Route::middleware(['auth'])->get('/members', function () {
    return Inertia::render('Admin/Members');
})->name('admin.Members');

Route::middleware(['auth'])->get('/admin/dashboard', [TenantController::class, 'adminDashboard'])->name('admin.dashboard');




Route::post('/admin/logout', function (Request $request) {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/admin');
    })->name('admin.logout');

Route::controller(OrderController::class)->group(function () {
    Route::get('/order', 'index')->name('ordre.index');
    Route::get('/product/{id}', 'getProject')->name('ordre.getProject');
});
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

 // <-- Close the 'auth', 'is_admin' middleware group

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
