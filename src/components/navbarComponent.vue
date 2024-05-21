<template>
  <div style="margin-bottom: 45px" :class="{ open: isDropdownOpen }">
    <nav class="fixed-button-admin navbar navbar-expand-lg custom-bg-color-navbar">
      <div class="container-fluid custom-bg-color">
        <router-link class="navbar-brand d-flex align-items-center" to="/">
          <img
            src="https://www.unhas.ac.id/wp-content/uploads/2022/09/Logo-Resmi-Unhas-1.png"
            alt="Logo"
            style="margin-right: 10px"
            width="35"
            height="40"
            class="d-inline-block align-text-top"
          />
          <span>New Entry</span>
        </router-link>
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
              <router-link
                class="nav-link"
                :class="{ active: isActive('/') }"
                to="/"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                :class="{ active: isActive('/adminuser') }"
                to="/adminuser"
                >Dashboard</router-link
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                @click="toggleDropdown"
              >
                View
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <router-link
                    class="dropdown-item"
                    :class="{ active: isActive('/outpuwcumenuadmin') }"
                    to="/outpuwcumenuadmin"
                    >WCU (QS/THE)</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="dropdown-item"
                    :class="{ active: isActive('/outputnumenuadmin') }"
                    to="/outputnumenuadmin"
                    >NU Greenmetric</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="dropdown-item"
                    :class="{ active: isActive('/outputsnimenuadmin') }"
                    to="/outputsnimenuadmin"
                    >SNI Award</router-link
                  >
                </li>
              </ul>
            </li>
          </ul>
          <div class="d-flex align-items-center" v-if="isDesktop">
            <img
              src="D:/Proyek_NewEntry-master/src/assets/User Male.png"
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
                <router-link
                  to="/login"
                  class="border-btn btn-navbar btn-primary button-wrapper-outputmenu"
                >
                  Log Out
                </router-link>
              </li>
            </ul>
          </div>
          <div class="border-btn" v-if="isDesktop">
            <router-link
              to="/login"
              class="button-wrapper-outputmenu"
              style="display: flex; align-items: center"
            >
              <button type="button" class="border-btn btn-navbar btn-primary">
                Log Out
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbarPage",
  data() {
    return {
      isDesktop: true,
      isDropdownOpen: false
    };
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);
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
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    checkScreenSize() {
      this.isDesktop = window.innerWidth >= 992;
    },
    isActive(route) {
      return this.$route.path === route;
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkScreenSize);
  }
};
</script>

<style scoped>
.custom-bg-color-navbar {
  background-color: hsl(169, 80%, 96%);
}

.navbar-brand {
  margin-right: 20px;
}

.nav-link.active {
  color: rgb(0, 0, 0);
}

.nav-link:hover {
  color: rgb(0, 0, 0);
}

.dropdown-menu .dropdown-item:hover {
  background-color: hsl(169, 80%, 96%);
  color: rgb(0, 0, 0);
}

.dropdown-menu .dropdown-item.active {
  background-color: rgba(42, 170, 148, 0.2);
  color: rgb(0, 0, 0); 
}

.navbar-nav > li > .dropdown-menu {
  background-color: hsl(165, 100%, 99%);
  display: none;
}
.navbar-nav > li:hover > .dropdown-menu {
  display: block;
}
</style>
