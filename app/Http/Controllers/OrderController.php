<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
class OrderController extends Controller
{
    public function index(Request $request)
    {
        // Logic to handle the order index view
        return Inertia::render('orders/Index');
    }
    public function getProject(Request $request, $id)
    {
        // Logic to handle the order index view
        return Inertia::render('Tenant/Create', [
            'id' => $id,
        ]);
    }
   public function getDetials(Request $request, $id)
    {
        // Logic to handle the order index view
        return Inertia::render('Details/index', [
            'id' => $id,
        ]);
    }
}
