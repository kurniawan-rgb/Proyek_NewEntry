<script>
import navbarPage from '@/components/navbarComponent.vue'
import { RouterLink } from 'vue-router';

export default {
    components: {
        navbarPage,
    }
}
</script>

<template>
 <div class="container">
  <div class="d-flex justify-content-center">
    <div class="form-login">
      <h1 class="title-page-login fw-bold">Sistem <span>Pemeringkatan</span></h1>
      <img src="../assets/LOGO.png" class="mb-3" alt="Logo Unhas">
      <form action="process_login.php" method="post">
        <div class="mb-3">
          <label for="username" class="form-label">USERNAME</label>
          <input type="text" id="username" name="username" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">PASSWORD</label>
          <input type="password" id="password" name="password" class="form-control" required>
        </div>
        <RouterLink to="/">
            <button type="submit" class="btn-primary btn-login">LOGIN</button>
        </RouterLink>
      </form>
    </div>
    <div class="">
      <img src="../assets/image.png" alt="Login" class="img-size">
    </div>
  </div>
</div>
</template>