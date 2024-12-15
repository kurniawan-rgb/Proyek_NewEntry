<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Mahasiswa;
use Illuminate\Support\Facades\DB;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
       DB::table('mahasiswas')->insert([
           'nim' => '1234567890',
           'nama' => 'Test User',
           'email' => 'test@example.com',
           'jurusan' => 'Teknik Informatika',
           'angkatan' => 2023,
       ]);
    }
}
