<script>
import navbarPage from "@/components/navbarComponent.vue";

export default {
  components: {
    navbarPage,
  },
};
</script>

<template>
  <navbarPage />
  <main class="title-page" style="padding-left: 100px; padding-right: 100px">
    <div class="card mb-3 custom-card">
      <div class="container-dashboard">
        <div class="col-md-1">
          <img
            width="80"
            height="80"
            src="D:\Proyek_NewEntry-master\src\assets\User Male.png"
            alt="...">
        </div>
        <div class="col">
          <h5 class="card-title">Richal Akbar</h5>
          <p class="margin-top-dashboard card-text">Teknik</p>
          <p class="card-text">
            <small class="text-body-secondary">Teknik Informatika</small>
          </p>
        </div>
        <div>
          <p class="card-text text-end">2024</p>
        </div>
      </div>
    </div>
    <div class="card mb-3 custom-card">
      <div class="container-dashboard">
        <div class="col-md-1">
          <img
            width="80"
            height="80"
            src="D:\Proyek_NewEntry-master\src\assets\User Male.png"
            alt="...">
        </div>
        <div class="col">
          <h5 class="card-title">Andi Muhammad Sabar</h5>
          <p class="margin-top-dashboard card-text">Teknik</p>
          <p class="card-text">
            <small class="text-body-secondary">Teknik Informatika</small>
          </p>
        </div>
        <div>
          <p class="card-text text-end">2024</p>
        </div>
      </div>
    </div>

    <div class="card mb-3 custom-card">
      <div class="container-dashboard">
        <div class="col-md-1">
          <img
            width="80"
            height="80"
            src="D:\Proyek_NewEntry-master\src\assets\User Male.png"
            alt="...">
        </div>
        <div class="col">
          <h5 class="card-title">Reza Kurniawan</h5>
          <p class="margin-top-dashboard card-text">Teknik</p>
          <p class="card-text">
            <small class="text-body-secondary">Teknik Informatika</small>
          </p>
        </div>
        <div>
          <p class="card-text text-end">2024</p>
        </div>
      </div>
    </div>
    <div class="card mb-3 custom-card">
      <div class="container-dashboard">
        <div class="col-md-1">
          <img
            width="80"
            height="80"
            src="D:\Proyek_NewEntry-master\src\assets\User Male.png"
            alt="...">
        </div>
        <div class="col">
          <h5 class="card-title">Daeng Rukka</h5>
          <p class="margin-top-dashboard card-text">Teknik</p>
          <p class="card-text">
            <small class="text-body-secondary">Teknik Informatika</small>
          </p>
        </div>
        <div>
          <p class="card-text text-end">2024</p>
        </div>
      </div>
    </div>

    <div class="card mb-3 custom-card">
      <div class="container-dashboard">
        <div class="col-md-1">
          <img
            width="80"
            height="80"
            src="D:\Proyek_NewEntry-master\src\assets\User Male.png"
            alt="...">
        </div>
        <div class="col">
          <h5 class="card-title">Ronaldo</h5>
          <p class="margin-top-dashboard card-text">Teknik</p>
          <p class="card-text">
            <small class="text-body-secondary">Teknik Informatika</small>
          </p>
        </div>
        <div>
          <p class="card-text text-end">2024</p>
        </div>
      </div>
    </div>
  </main>
  <router-link to="/">
    <div class="button-wrapper-dashboard">
      <button class="btn-dashboard btn-primary" type="submit">Kembali</button>
    </div>
  </router-link>
</template>
