<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class Mahasiswa extends Model
{
    protected $table = 'mahasiswas';

    protected $fillable = [
        'nim', 
        'nama', 
        'email', 
        'jurusan', 
        'angkatan'
    ];

    // Metode caching dengan Redis
    public static function getCachedMahasiswa($id)
    {
        return Cache::remember("mahasiswa:{$id}", now()->addHours(1), function () use ($id) {
            return self::findOrFail($id);
        });
    }

    // Metode pembersihan cache
    public function clearCache()
    {
        Cache::forget("mahasiswa:{$this->id}");
        Cache::forget('mahasiswas');
    }
}
