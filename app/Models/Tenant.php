<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tenant extends Model
{
    use HasFactory;

    protected $fillable = [
        'userName',
        'companyName',
        'phoneNumber',
        'email',
        'password',
        'domainName',
        'project_id',  

    ];


      public function project()
    {
        return $this->belongsTo(Project::class);
    }
}
