<script>
import navbarPage from '@/components/navbarComponent.vue'

export default {
    components: {
        navbarPage,
    }
}
</script>

<template>
  <!-- Menambahkan navbarPage sebagai komponen -->
  <navbarPage/>
  
  <!-- Bagian utama halaman -->
  <main class="title-page" style="padding-left: 100px; padding-right: 100px">
    <!-- Kartu 1 -->
    <div class="card mb-3 custom-card">
      <div class="container-outputmenu">
        <div class="col">
          <h5 class="card-title">Pertanyaan....</h5>
          <p class="margin-top-outputmenu card-text text-body-secondary"><small class="text-body-secondary">Isi pertanyaan....</small></p>
        </div>
        <div>
          <p class="card-text text-end">2024</p>
        </div>
      </div>
    </div>
    
    <!-- Kartu 2 -->
    <div class="card mb-3 custom-card">
      <div class="container-outputmenu">
        <div class="col">
          <h5 class="card-title">Pertanyaan....</h5>
          <p class="margin-top-outputmenu card-text text-body-secondary"><small class="text-body-secondary">Isi pertanyaan....</small></p>
        </div>
        <div>
          <p class="card-text text-end">2024</p>
        </div>
      </div>
    </div>

    <!-- Kartu 3 -->
    <div class="card mb-3 custom-card">
      <div class="container-outputmenu">
        <div class="col">
          <h5 class="card-title">Pertanyaan....</h5>
          <p class="margin-top-outputmenu card-text text-body-secondary"><small class="text-body-secondary">Isi pertanyaan....</small></p>
        </div>
        <div>
          <p class="card-text text-end">2024</p>
        </div>
      </div>
    </div>

    <!-- Kartu 4 -->
    <div class="card mb-3 custom-card">
      <div class="container-outputmenu">
        <div class="col">
          <h5 class="card-title">Pertanyaan....</h5>
          <p class="margin-top-outputmenu card-text text-body-secondary"><small class="text-body-secondary">Isi pertanyaan....</small></p>
        </div>
        <div>
          <p class="card-text text-end">2024</p>
        </div>
      </div>
    </div>

    <!-- Kartu 5 -->
    <div class="card mb-3 custom-card">
      <div class="container-outputmenu">
        <div class="col">
          <h5 class="card-title">Pertanyaan....</h5>
          <p class="margin-top-outputmenu card-text text-body-secondary"><small class="text-body-secondary">Isi pertanyaan....</small></p>
        </div>
        <div>
          <p class="card-text text-end">2024</p>
        </div>
      </div>
    </div>
  </main>

  <!-- Tombol Kembali -->
  <router-link to="/">
    <div class="button-wrapper-outputmenu">
      <button class="btn-dashboard btn-primary" type="submit">Kembali</button>
    </div>
  </router-link>
</template>