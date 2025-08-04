<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;

class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     */
    protected function redirectTo($request)
    {
        // If request expects JSON, don't redirect
        if (!$request->expectsJson()) {
            return route('admin.login'); // Your custom admin login route name
        }
    }
}

    


