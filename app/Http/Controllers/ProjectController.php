<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Project;
use Inertia\Inertia;
class ProjectController extends Controller
{
 public function store(Request $request)
{
    $request->validate([
        'projectName' => 'required|string|max:255',
        'description' => 'required|string',
        'image' => 'nullable|image|max:2048', // optional, max 2MB
    ]);

    if ($request->hasFile('image')) {
        // Save to storage/app/public/projects
        $filename = $request->file('image')->hashName();
        $request->file('image')->storeAs('public/projects', $filename);
    } else {
        $filename = null;
    }

    $project = new Project();
    $project->projectName = $request->projectName;
    $project->description = $request->description;
    $project->image = $filename; // just "abc.jpg"
    $project->save();

    return response()->json(['success' => true, 'project' => $project]);
}



    public function index()
{
    $projects = Project::all(); // or paginate if many projects
    return response()->json($projects);
}

  public function getDetials($id)
{
    $project = Project::findOrFail($id);

    return Inertia::render('Details/index', [
        'project' => $project,
    ]);
}

}
