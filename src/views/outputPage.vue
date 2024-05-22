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

  <main style="margin-top: 66px;" class="title-page">
    <h4 style="text-align: center;">Pertanyaan</h4>

    <div style="margin-top: 20px" class="text-center">
      <img src="../assets/r.png" class="rounded" alt="..." />
    </div>

    <p style="text-align: center; margin-top: 20px">
      Your text paragraph goes here...
    </p>

    <a
      href="https://www.contoh.com"
      style="display: block; text-align: center; margin-top: 20px"
      >https://www.contoh.com</a
    >
  </main>
</template>
