<?php

namespace App\Http\Controllers;

use App\Models\Mahasiswa;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Validator;

class MahasiswaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('mahasiswas/Index', [
            'mahasiswas' => Mahasiswa::all()
        ]);

        $mahasiswa = Mahasiswa::getCacheMahasiswa();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
     
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nim' => 'required|unique:mahasiswas|max:10',
            'nama' => 'required|string|max:255',
            'email' => 'required|email|unique:mahasiswas',
            'jurusan' => 'required|string',
            'angkatan' => 'required|integer'
        ]);

        Mahasiswa::create($validated);

        return redirect()->back()->with([
            'mahasiswas' => Mahasiswa::all()
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Mahasiswa $mahasiswa)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Mahasiswa $mahasiswa)
    {
        return Inertia::render('mahasiswas/Edit', [
            'mahasiswa' => $mahasiswa
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Mahasiswa $mahasiswa)
    {
        $validated = $request->validate([
            'nim' => 'required',
            'nama' => 'required',
            'email' => 'required|email',
            'jurusan' => 'required',
            'angkatan' => 'required|numeric'
        ]);

        $mahasiswa->update($validated);

        return redirect()->route('mahasiswas.index')
            ->with('message', 'Mahasiswa berhasil diupdate');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Mahasiswa $mahasiswa)
    {
        $mahasiswa->delete();
        
        // Bersihkan cache
        $mahasiswa->clearCache();

        return redirect()->route('mahasiswas.index')
            ->with('success', 'Mahasiswa berhasil dihapus');
    }
}
