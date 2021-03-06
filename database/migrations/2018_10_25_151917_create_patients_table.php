<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePatientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->increments('id');
            $table->string('code');
            $table->string('name_kh');
            $table->string('name_en');
            $table->char('gender', 1);
            $table->date('dob')->nullable();
            $table->char('nationality_code', 2);
            $table->string('phone');
            $table->string('email')->nullable();
            $table->string('address')->nullable();
            $table->tinyInteger('identity_type');
            $table->string('identity_no');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('patients');
    }
}
