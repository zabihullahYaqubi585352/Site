        <?php
        use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
        use Illuminate\Support\Facades\Route;
        use Illuminate\Support\Facades\Auth;
        use Illuminate\Http\Request;
        use Inertia\Inertia;
        use App\Http\Controllers\ProjectController;

        use App\Http\Controllers\TenantController;
        use App\Http\Controllers\OrderController;
        use App\Http\Controllers\Admin\AuthController;

        // Public routes
        Route::get('/', fn () => Inertia::render('welcome'))->name('home');

        // Tenant registration

        Route::post('/tenants', [TenantController::class, 'store'])->name('tenants.store');


        // Admin login page
        Route::get('/admin', function () {
            return Auth::check()
                ? redirect()->route('admin.dashboard')
                : Inertia::render('Admin/AdminLogin');
        })->name('admin.login');
        Route::get('/login', function () {
            return redirect('/admin');
        });

        // Admin login submission
        Route::post('/admin/login', [AuthController::class, 'login'])->name('admin.login.submit');

        // Admin logout
        Route::post('/admin/logout', function (Request $request) {
            Auth::logout();
            $request->session()->invalidate();
            $request->session()->regenerateToken();
            return redirect('/admin');
        })->name('admin.logout');

        // Protected admin routes
        Route::middleware(['auth'])->group(function () {
            Route::get('/admin/dashboard', [TenantController::class, 'create'])->name('admin.dashboard');
            Route::get('/project', fn () => Inertia::render('Admin/Project'))->name('admin.project');
            Route::get('/members', fn () => Inertia::render('Admin/Members'))->name('admin.members');
            Route::get('/tenants', [TenantController::class, 'index'])->name('tenants.index');
            Route::delete('/tenants/{id}', [TenantController::class, 'destroy']);
            Route::put('/tenants/{id}', [TenantController::class, 'update']);
            Route::post('/projects', [ProjectController::class, 'store']);
        });

         Route::get('/projects', [ProjectController::class, 'index']);

        // Authenticated user dashboard
        Route::middleware(['auth', 'verified'])->group(function () {
            Route::get('/dashboard', fn () => Inertia::render('dashboard'))->name('dashboard');
        });

        // Order routes
        Route::controller(OrderController::class)->group(function () {
            Route::get('/order', 'index')->name('order.index');
            Route::get('/product/{id}', 'getProject')->name('order.getProject');
       Route::get('/product/detials/{id}', [ProjectController::class, 'getDetials'])->name('getDetials');
            
        });

        // Include additional route files
        require __DIR__ . '/settings.php';
        require __DIR__ . '/auth.php';
