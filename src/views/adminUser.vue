<template>
  <div>
    <navbarPage />
    <main class="container-admin-user">
      <navbarAdmin />
      <div class="content-admin-user">
        <table class="table">
          <thead>
            <tr>
              <th class="text-center" scope="col">No</th>
              <th scope="col">User</th>
              <th scope="col">Fakultas</th>
              <th scope="col">Prodi</th>
              <th class="text-center" scope="col">WCU (QS/THE)</th>
              <th class="text-center" scope="col">NU Greenmetric</th>
              <th class="text-center" scope="col">SNI Award</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th class="text-center" scope="row">1</th>
              <td>Richal Akbar</td>
              <td>Teknik</td>
              <td>Teknik Informatika</td>
              <th><iconPlus /></th>
              <th><iconPlus /></th>
              <th><iconPlus /></th>
            </tr>
            <tr>
              <th class="text-center" scope="row">2</th>
              <td>Andi Muhammad Sabar</td>
              <td>Teknik</td>
              <td>Teknik Informatika</td>
              <th><iconPlus /></th>
              <th><iconPlus /></th>
              <th><iconPlus /></th>
            </tr>
            <tr>
              <th class="text-center" scope="row">3</th>
              <td>Reza Kurniawan</td>
              <td>Teknik</td>
              <td>Teknik Informatika</td>
              <th><iconPlus /></th>
              <th><iconPlus /></th>
              <th><iconPlus /></th>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>

<script>
import navbarPage from "@/components/navbarComponent.vue";
import navbarAdmin from "@/components/navbarAdmin.vue";
import iconPlus from "@/components/iconPlus.vue";

export default {
  components: {
    navbarPage,
    navbarAdmin,
    iconPlus,
  },
};
</script>
