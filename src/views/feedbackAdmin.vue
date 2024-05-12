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
        <div class="container-feedbackadmin">
          <div class="col-md-1">
            <img width="80" height="80" src="D:\Proyek_NewEntry-master\src\assets\User Male.png" alt="...">
          </div>
          <div class="col">
            <h5 class="card-title">Richal Akbar</h5>
            <p class="margin-top-feedbackadmin card-text">Teknik</p>
            <p class="card-text"><small class="text-body-secondary">Teknik Informatika</small></p>
          </div>
          <div>
            <p class="card-text text-end">Sangat Baik</p>
          </div>
        </div>
      </div>

      <!-- Kartu 2 -->
      <div class="card mb-3 custom-card">
        <div class="container-feedbackadmin">
          <div class="col-md-1">
            <img width="80" height="80" src="D:\Proyek_NewEntry-master\src\assets\User Male.png" alt="...">
          </div>
          <div class="col">
            <h5 class="card-title">Andi Muhammad Sabar</h5>
            <p class="margin-top-feedbackadmin card-text">Teknik</p>
            <p class="card-text"><small class="text-body-secondary">Teknik Informatika</small></p>
          </div>
          <div>
            <p class="card-text text-end">Baik</p>
          </div>
        </div>
      </div>

      <!-- Kartu 3 -->
      <div class="card mb-3 custom-card">
        <div class="container-feedbackadmin">
          <div class="col-md-1">
            <img width="80" height="80" src="D:\Proyek_NewEntry-master\src\assets\User Male.png" alt="...">
          </div>
          <div class="col">
            <h5 class="card-title">Reza Kurniawan</h5>
            <p class="margin-top-feedbackadmin card-text">Teknik</p>
            <p class="card-text"><small class="text-body-secondary">Teknik Informatika</small></p>
          </div>
          <div>
            <p class="card-text text-end">Biasa</p>
          </div>
        </div>
      </div>

      <!-- Kartu 4 -->
      <div class="card mb-3 custom-card">
        <div class="container-feedbackadmin">
          <div class="col-md-1">
            <img width="80" height="80" src="D:\Proyek_NewEntry-master\src\assets\User Male.png" alt="...">
          </div>
          <div class="col">
            <h5 class="card-title">Daeng Rukka</h5>
            <p class="margin-top-feedbackadmin card-text">Teknik</p>
            <p class="card-text"><small class="text-body-secondary">Teknik Informatika</small></p>
          </div>
          <div>
            <p class="card-text text-end">Kurang Baik</p>
          </div>
        </div>
      </div>

      <!-- Kartu 5 -->
      <div class="card mb-3 custom-card">
        <div class="container-feedbackadmin">
          <div class="col-md-1">
            <img width="80" height="80" src="D:\Proyek_NewEntry-master\src\assets\User Male.png" alt="...">
          </div>
          <div class="col">
            <h5 class="card-title">Ronaldo</h5>
            <p class="margin-top-feedbackadmin card-text">Teknik</p>
            <p class="card-text"><small class="text-body-secondary">Teknik Informatika</small></p>
          </div>
          <div>
            <p class="card-text text-end">Tidak Baik</p>
          </div>
        </div>
      </div>
    </main>

    <!-- Tombol Kembali -->
    <router-link to="/">
      <div class="button-wrapper-feedbackadmin">
        <button class="btn-feedbackadmin btn-primary" type="submit">Kembali</button>
      </div>
    </router-link>
</template>