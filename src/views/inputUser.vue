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
    <h4 style="text-align: center; margin-bottom: 50px">
      Form pengisian sistem peringkat
    </h4>
    <div class="margin-form">
      <div class="mb-3">
        <label for="tahun" class="form-label">Tahun</label>
        <input
          type="email"
          class="form-control"
          id="tahun"
          placeholder="2024"
        />
      </div>
      <div class="mb-3">
        <h6>1. Pertanyaan</h6>
        <label style="margin-top: -8px" for="jawaban" class="form-label"
          >Jawaban</label
        >
        <textarea
          class="form-control"
          id="jawaban"
          rows="3"
          placeholder="Masukkan jawaban anda"
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="lampirkan_url" class="form-label">Lampirkan URL</label>
        <input
          type="email"
          class="form-control"
          id="lampirkan_url"
          placeholder="Lampirkan URL jika ada"
        />
      </div>
      <div class="mb-3">
        <label for="lampiran_file" class="form-label"
          >Lampiran file (Jpg,Jpeg,Png,Docx,Pdf)</label
        >
        <input class="form-control" type="file" id="lampiran_file" />
      </div>
    </div>
    <nav class="mb-3 next" aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item disabled">
          <a class="page-link">Previous</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </main>
</template>
