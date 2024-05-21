<script>
import navbarPage from "@/components/navbarComponent.vue";

export default {
  components: {
    navbarPage,
  },
  methods: {
    submitForm() {
      alert("Formulir dikirim!");
    },
    viewForm() {
      alert("Melihat formulir!");
    },
    editForm() {
      alert("Mengedit formulir!");
    },
  },
};
</script>

<template>
  <navbarPage />

  <main
    class="title-page"
    style="padding-left: 100px; padding-right: 100px; margin-top: 66px"
  >
    <h4 style="text-align: center; margin-bottom: 50px">
      Form Pengisian Sistem Peringkat
    </h4>
    <div style="padding-bottom: 50px" class="mb-3">
      <label for="tahun" class="form-label">Tahun</label>
      <input
        type="email"
        class="form-control"
        id="tahun"
        placeholder="Masukkan tahun saat ini"
      />
    </div>

    <div class="margin-form">
      <div class="mb-3">
        <h6>1. Pertanyaan</h6>
        <label style="margin-top: -8px" for="jawaban1" class="form-label"
          >Jawaban</label
        >
        <textarea
          class="form-control"
          id="jawaban1"
          rows="3"
          placeholder="Masukkan jawaban anda"
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="lampirkan_url1" class="form-label">Lampirkan URL</label>
        <input
          type="email"
          class="form-control"
          id="lampirkan_url1"
          placeholder="Lampirkan URL jika ada"
        />
      </div>
      <div class="mb-3">
        <label for="lampiran_file1" class="form-label"
          >Lampiran file (Jpg,Jpeg,Png,Docx,Pdf)</label
        >
        <input class="form-control" type="file" id="lampiran_file1" />
      </div>
    </div>

    <div class="margin-form">
      <div class="mb-3">
        <h6>2. Pertanyaan</h6>
        <label style="margin-top: -8px" for="jawaban2" class="form-label"
          >Jawaban</label
        >
        <textarea
          class="form-control"
          id="jawaban2"
          rows="3"
          placeholder="Masukkan jawaban anda"
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="lampirkan_url2" class="form-label">Lampirkan URL</label>
        <input
          type="email"
          class="form-control"
          id="lampirkan_url2"
          placeholder="Lampirkan URL jika ada"
        />
      </div>
      <div class="mb-3">
        <label for="lampiran_file2" class="form-label"
          >Lampiran file (Jpg,Jpeg,Png,Docx,Pdf)</label
        >
        <input class="form-control" type="file" id="lampiran_file2" />
      </div>
    </div>

    <div class="margin-form">
      <div class="mb-3">
        <h6>3. Pertanyaan</h6>
        <label style="margin-top: -8px" for="jawaban3" class="form-label"
          >Jawaban</label
        >
        <textarea
          class="form-control"
          id="jawaban3"
          rows="3"
          placeholder="Masukkan jawaban anda"
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="lampirkan_url3" class="form-label">Lampirkan URL</label>
        <input
          type="email"
          class="form-control"
          id="lampirkan_url3"
          placeholder="Lampirkan URL jika ada"
        />
      </div>
      <div class="mb-3">
        <label for="lampiran_file3" class="form-label"
          >Lampiran file (Jpg,Jpeg,Png,Docx,Pdf)</label
        >
        <input class="form-control" type="file" id="lampiran_file3" />
      </div>
    </div>

    <div style="margin-bottom: 50px; text-align: center">
      <a href="/outputmenu" style="margin-bottom: 10px; margin-right: 10px">
        <button class="btn btn-kirim" type="submit">Kirim</button>
      </a>
      <a href="/outputmenu" style="margin-bottom: 10px; margin-right: 10px">
        <button class="btn btn-success btn-lihat" type="submit">Lihat</button>
      </a>
      <a href="#" style="margin-bottom: 10px">
        <button class="btn btn-primary btn-edit" type="submit">Edit</button>
      </a>
    </div>
  </main>
</template>

<style scoped>
.margin-form {
  margin-bottom: 100px;
}

.border-btn-kirim {
  border-radius: 5px;
}

.btn-kirim {
  background-color: #2aaa94;
  color: white;
  padding: 7px;
  text-align: center;
  padding-left: 8px;
  padding-right: 8px;
  width: 10%;
  justify-content: center;
}

.btn-kirim:hover {
  background-color: #268e7d;
  border-color: #2aaa94;
}

.btn-kirim:active {
  background-color: #1f7e6e;
  border-color: #1f7e6e;
}

.btn-lihat {
  padding: 7px;
  text-align: center;
  padding-left: 8px;
  padding-right: 8px;
  width: 5%;
  justify-content: center;
}

.btn-edit {
  padding: 7px;
  text-align: center;
  padding-left: 8px;
  padding-right: 8px;
  width: 5%;
  justify-content: center;
}
</style>
