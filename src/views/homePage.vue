<script>
import navbarPage from '@/components/navbarComponent.vue'

export default {
    components: {
        navbarPage,
    }
}
</script>

<template>
<<<<<<< HEAD
  <!-- Menambahkan navbarPage sebagai komponen di atas -->
  <div>
    <navbarPage/>

    <!-- Isi halaman utama -->
    <body>  
      <!-- Judul halaman -->
      <h1 class="title-page fw-bold text-center">Sistem <span>Pemeringkatan</span></h1>
      <!-- Paragraf deskripsi -->
      <p class="paragrah-page text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore veniam...</p>
      <!-- Mengatur tata letak kartu -->
      <div class="d-flex justify-content-center">
        <!-- Kartu pertama -->
        <div class="card" style="width: 18rem;">
          <img src="../assets/WCN (QS/WCN.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">WCU (QS/THE)</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">WCU (QS/THE)</a>
          </div>
        </div>

        <!-- Kartu kedua -->
        <div class="card" style="width: 18rem;">
          <img src="../assets/NI Greenmetrit/ni.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">NU Greenmetric</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <RouterLink to="/input">
            <a href="#" class="btn btn-primary">NU Greenmetric</a>
            </RouterLink>
          </div>
        </div> 

        <!-- Kartu ketiga -->
        <div class="card" style="width: 18rem;">
          <img src="../assets/SNI Award/sni.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">SNI Award</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">SNI Award</a>
          </div>
        </div> 
      </div>
    </body>
  </div>
=======
     <body class="text-center">  
    <h1 class="title-page fw-bold">Sistem <span>Pemeringkatan</span></h1>
    <p class="paragrah-page">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporidunt ut labore veniam...</p>
    <div class="d-flex justify-content-center">
          <div class="card" style="width: 18rem;">
            <img src="../assets/WCN (QS/3d-map-pins-gps-navigator-pin-checking-poins-3d-render-illustration 1.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">WCN (QS/THE)</a>
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <img src="../assets/WCN (QS/3d-map-pins-gps-navigator-pin-checking-poins-3d-render-illustration 1.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">NI Greenmetrit</a>
            </div>
          </div> 
          <div class="card" style="width: 18rem;">
            <img src="../assets/WCN (QS/3d-map-pins-gps-navigator-pin-checking-poins-3d-render-illustration 1.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">SNI Award</a>
            </div>
          </div> 
    </div>
  </body>
>>>>>>> c5c7178444d3a4a4aad409868239a233e8c1bbe4
</template>
