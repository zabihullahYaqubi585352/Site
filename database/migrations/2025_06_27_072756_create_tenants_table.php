<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {

        
        Schema::create('tenants', function (Blueprint $table) {
           
        $table->id();
        $table->string('userName')->required();
        $table->string('companyName');
        $table->string('phoneNumber');
        $table->string('email')->unique();
        $table->string('password');
        $table->string('domainName')->unique();
        $table->foreignId('project_id')->constrained('projects')->onDelete('cascade');
        $table->timestamps();
        $table->softDeletes();
    });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tenants');
    }
};
