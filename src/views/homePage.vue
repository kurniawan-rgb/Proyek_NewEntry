<script>
import navbarPage from "@/components/navbarComponent.vue";

export default {
  components: {
    navbarPage,
  },
};
</script>

<template>
  <div>
    <navbarPage />
    <body>
      <h1 class="title-page fw-bold text-center">
        Sistem <span>Pemeringkatan</span>
      </h1>
      <p class="paragrah-page text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore veniam...
      </p>

      <div class="card-container d-flex justify-content-center flex-wrap">
        <div class="card" style="width: 18rem">
          <img src="../assets/WCN (QS/WCN.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">WCU (QS/THE)</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn-home border-btn btn-primary button-wrapper-outputmenu">WCU (QS/THE)</a>
          </div>
        </div>

        <div class="card" style="width: 18rem">
          <img src="../assets/NI Greenmetrit/ni.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">NU Greenmetric</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="/input" class="btn-home border-btn btn-primary button-wrapper-outputmenu">NU Greenmetric</a>
          </div>
        </div>

        <div class="card" style="width: 18rem">
          <img src="../assets/SNI Award/sni.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">SNI Award</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn-home border-btn btn-primary button-wrapper-outputmenu">SNI Award</a>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<style>
.card-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.card {
  margin: 10px;
}
</style>
