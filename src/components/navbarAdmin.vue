<template>
  <div style="margin-right: 23ch;">
    <nav class="nav fixed-button flex-column custom-nav-admin">
      <router-link
        class="nav-link-admin text-decoration-none"
        :class="{ active: isActiveRoute('/adminuser') }"
        to="/adminuser"
      >User</router-link>
      <router-link
        class="nav-link-admin text-decoration-none"
        :class="{ active: isActiveRoute('/wcu') }"
        to="/wcu"
      >WCU (QS/THE)</router-link>
      <router-link
        class="nav-link-admin text-decoration-none"
        :class="{ active: isActiveRoute('/nu') }"
        to="/nu"
      >NU Greenmetric</router-link>
      <router-link
        class="nav-link-admin text-decoration-none"
        :class="{ active: isActiveRoute('/sni') }"
        to="/sni"
      >SNI Award</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbarAdmin",
  methods: {
    isActiveRoute(route) {
      return this.$route.path === route;
    }
  }
};
</script>

<style>
.custom-nav-admin {
  background-color: #f6f9f8;
  padding-top: 20px;
  padding-bottom: 28em;
}

.fixed-button {
  position: fixed;
  margin-bottom: 100ch;
  right: 0px;
  left: 0px;
  z-index: 1000;
}

.custom-nav-admin .nav-link-admin {
  color: #2AAA94;
  margin-right: 25px;
  padding: 10px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  transition: background-color 0.3s, color 0.3s;
}

.custom-nav-admin .nav-link-admin:hover {
  background-color: #e2e6ea;
  color: #1f7e6e;
}

.custom-nav-admin .nav-link-admin.active {
  background-color: #2AAA94;
  color: #ffffff;
}
</style>
