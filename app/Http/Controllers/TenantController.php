<?php

namespace App\Http\Controllers;

use App\Models\Tenant;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;
class TenantController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    
public function create()
{
    return Inertia::render('Tenant/Create');
}

public function store(Request $request)
{
    $validated = $request->validate([
        'userName' => 'required|string|max:255',
        'companyName' => 'required|string|max:255',
        'phoneNumber' => 'required|string|max:20',
        'email' => 'required|email|unique:tenants',
        'password' => 'required|string|min:6',
        'domainName' => 'required|string|max:255|unique:tenants',
    ]);

    $validated['password'] = Hash::make($validated['password']);

    Tenant::create($validated);

    return redirect()->route('home')->with('success', 'successfuly added!');


    
}

public function adminDashboard(Request $request)
{
    $search = $request->input('search', '');

    $tenants = Tenant::query()
        ->when($search, function ($query, $search) {
            $query->where('userName', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%");
        })
        ->paginate(5)
        ->withQueryString();

    return Inertia::render('Admin/Dashboard', [
        'tenants' => $tenants,
        'filters' => ['search' => $search],
    ]);
}


   public function index(Request $request)
{
    $tenants = \App\Models\Tenant::query()
        ->when($request->search, function ($query, $search) {
            $query->where('userName', 'like', "%$search%")
                  ->orWhere('email', 'like', "%$search%");
        })
        ->latest()
        ->paginate(5) // backend pagination
        ->withQueryString(); // keeps search query during pagination

    return Inertia::render('Admin/Dashboard', [
        'tenants' => $tenants,
        'filters' => $request->only('search'),
    ]);
}

    


    /**
     * Display the specified resource.
     */
    public function show(Tenant $tenant)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Tenant $tenant)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Tenant $tenant)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tenant $tenant)
    {
        //
    }
}
