<template>
  <nav class="navbar navbar-expand-lg custom-bg-color-navbar">
    <div class="container-fluid custom-bg-color">
      <a class="navbar-brand d-flex align-items-center" href="#">
        <img
          src="https://www.unhas.ac.id/wp-content/uploads/2022/09/Logo-Resmi-Unhas-1.png"
          alt="Logo"
          style="margin-right: 10px"
          width="35"
          height="40"
          class="d-inline-block align-text-top"
        />
        <span>New Entry</span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleMenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/dashboard">Dashboard</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/outputmenu">View</a>
          </li>
        </ul>
        <div class="d-flex align-items-center" v-if="isDesktop">
          <img
            src="D:\Proyek_NewEntry-master\src\assets\User Male.png"
            alt="User Avatar"
            width="35"
            height="35"
            style="margin-right: 10px"
          />
          <p class="mb-lg-0" style="margin-right: 15px">Akun Saya</p>
        </div>
        <div v-else>
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                href="/login"
                class="border-btn btn-navbar btn-primary button-wrapper-outputmenu"
              >
                Log Out
              </a>
            </li>
          </ul>
        </div>
        <div class="border-btn" v-if="isDesktop">
          <a
            href="/login"
            class="button-wrapper-outputmenu"
            style="display: flex; align-items: center"
          >
            <button type="button" class="border-btn btn-navbar btn-primary">
              Log Out
            </button>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbarPage",
  data() {
    return {
      isDesktop: true
    };
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  },
  methods: {
    toggleMenu() {
      const navbarCollapse = document.getElementById("navbarSupportedContent");
      if (navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show");
      } else {
        navbarCollapse.classList.add("show");
      }
    },
    checkScreenSize() {
      this.isDesktop = window.innerWidth >= 992; // Atur batas lebar sesuai dengan breakpoint untuk desktop
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenSize);
  }
};
</script>

<style scoped>
.custom-bg-color-navbar {
  background-color: #edfdfa;
}

.navbar-brand {
  margin-right: 20px;
}
</style>
