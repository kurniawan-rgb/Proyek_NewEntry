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
  <a href="/outputmenu" class="title-page text-decoration-none" style="padding-left: 100px; padding-right: 100px; margin-top: 66px;">
    <div class="card mb-3 custom-card">
      <div class="container-dashboard">
        <div class="col-md-1">
          <img
            width="80"
            height="80"
            src="D:\Proyek_NewEntry-master\src\assets\User Male.png"
            alt="..."
          />
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
  
  </a>
  <a href="/" class="button-wrapper-outputmenu" style="margin-bottom: 5ch;">
    <button class="btn-dashboard btn-primary border-btn" type="submit">
      Kembali
    </button>
  </a>
</template>
