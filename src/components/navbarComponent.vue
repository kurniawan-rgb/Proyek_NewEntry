<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <img
      src="https://www.unhas.ac.id/wp-content/uploads/2022/09/Logo-Resmi-Unhas-1.png"
      alt="Logo"
      style="margin-right: -5px; margin-left: 20px"
      width="35"
      height="40"
      class="d-inline-block align-text-top"
    />
    <div class="container-fluid custom-bg-color">
      <h class="navbar-brand" href="#">New Entry</h>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/dashboard"
              >Dashboard</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/outputmenu">View</a>
          </li>
        </ul>
        <img
          style="margin-right: 10px"
          width="35"
          height="35"
          src="D:\Proyek_NewEntry-master\src\assets\User Male.png"
          alt="..."
        />
        <p
          style="margin-right: 15px"
          class="mb-lg-0"
          aria-current="page"
          href="#"
        >
          Akun Saya
        </p>
        <div class="border-btn">
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
};
</script>
