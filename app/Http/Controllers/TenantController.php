<?php

namespace App\Http\Controllers;

use App\Models\Tenant;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\Hash;
class TenantController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    
public function create()
{
     return Inertia::render('Admin/Dashboard', [
        
    ]);
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
        'project_id' => 'required|exists:projects,id',
    ]);

    $validated['password'] = Hash::make($validated['password']);

    Tenant::create($validated);

    return redirect()->route('home')->with('success', 'successfuly added!');


    
}

public function index(Request $request)
{
    $query = Tenant::with('project'); // با eager load شروع می‌کنیم

    // فیلتر بر اساس search
    if ($request->filled('filter')) {
        $query->where(function ($q) use ($request) {
            $q->where('userName', 'like', '%' . $request->filter . '%')
              ->orWhere('email', 'like', '%' . $request->filter . '%');
        });
    }

    // فیلتر بر اساس وضعیت
    if ($request->filled('status')) {
        $query->where('status', $request->status);
    }

    // فیلتر بر اساس تاریخ
    if ($request->filled('created_at')) {
        $query->whereDate('created_at', $request->created_at);
    }

    // مرتب‌سازی
    if ($request->filled('sort_by')) {
        $direction = $request->descending === 'true' ? 'desc' : 'asc';
        $query->orderBy($request->sort_by, $direction);
    }

    // صفحه‌بندی
    $perPage = $request->get('per_page', 10);
    $tenants = $query->paginate($perPage);

    return response()->json($tenants);
}


 
public function update(Request $request, $id)
{
    
    try {
        $validated = $request->validate([
            'userName' => 'required|string',
            'email' => 'required|email|unique:tenants,email,' . $id,
            'companyName' => 'required|string',
            'domainName' => 'required|string|unique:tenants,domain_name,' . $id,
            'phoneNumber' => 'nullable|string',
             
        ]);

        $tenant = Tenant::findOrFail($id);

        
        $tenant->update([
            'userName' => $validated['userName'],
            'email' => $validated['email'],
            'companyName' => $validated['companyName'],
            'domainName' => $validated['domainName'],
            'phoneNumber' => $validated['phoneNumber'] ?? null,
        ]);
        
       
        return response()->json([
            'message' => 'Update successful',
            'tenant' => $tenant->fresh() // Get fresh data from database
        ]);
        
    } catch (\Illuminate\Validation\ValidationException $e) {
        return response()->json([
            'errors' => $e->errors(),
        ], 422);
    }
}


    public function destroy($id)
    {
        $tenant = Tenant::findOrFail($id);
    $tenant->delete();

    return response()->json(['message' => 'تننت حذف شد']);
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
   
}