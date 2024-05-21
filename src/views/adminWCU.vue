<template>
  <div>
    <navbarPage />
    <main class="container-admin-user">
      <navbarAdmin />
      <div class="content-admin-user">
        <table class="table">
          <thead>
            <tr>
              <th class="text-center col-no" scope="col">No</th>
              <th class="text-center" scope="col">List Soal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center" scope="row">1</td>
              <td>
                <div class="question-container">
                  Pertanyaan 1 <iconPertanyaan />
                </div>
              </td>
            </tr>
            <tr>
              <td class="text-center" scope="row">2</td>
              <td>
                <div class="question-container">
                  Pertanyaan 2 <iconPertanyaan />
                </div>
              </td>
            </tr>
            <tr>
              <td class="text-center" scope="row">3</td>
              <td>
                <div class="question-container">
                  Pertanyaan 3 dst.... <iconPertanyaan />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>

<script>
import NavbarPage from "@/components/navbarComponent.vue";
import NavbarAdmin from "@/components/navbarAdmin.vue";
import iconPertanyaan from "@/components/iconPertanyaan.vue";

export default {
  components: {
    NavbarPage,
    NavbarAdmin,
    iconPertanyaan,
  },
};
</script>
