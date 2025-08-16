<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Project;
class OrderController extends Controller
{
    public function index(Request $request)
    {
        // Logic to handle the order index view
        return Inertia::render('orders/Index');
    }
   public function getProject(Request $request, $id)
{
    $project = Project::findOrFail($id);

    return Inertia::render('Tenant/Create', [
        'project' => $project, // send the project with image
    ]);
}
}
