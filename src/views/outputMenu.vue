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
    <a
      href="/output"
      class="card mb-3 custom-card text-decoration-none"
      target="_blank"
    >
      <div class="container-outputmenu">
        <div class="col">
          <h5 class="card-title">Pertanyaan....</h5>
          <p class="margin-top-outputmenu card-text text-body-secondary">
            <small class="text-body-secondary">Isi pertanyaan....</small>
          </p>
        </div>
        <div>
          <p class="card-text text-end">2024</p>
        </div>
      </div>
    </a>
  </main>

  <<a href="/" class="button-wrapper-outputmenu">
    <button class="btn-dashboard btn-primary border-btn" type="submit">Kembali</button>
  </a>
</template>
