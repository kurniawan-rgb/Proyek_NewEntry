<!-- Import komponen navbarPage -->
<script>
import navbarPage from '@/components/navbarComponent.vue'

export default {
    components: {
        navbarPage,
    }
}
</script>

<template>
    <!-- Komponen navbarPage -->
    <navbarPage/>

    <!-- Konten utama -->
    <main class="title-page">
        <!-- Judul -->
        <h4 style="text-align: center;">Pertanyaan</h4>

        <!-- Gambar dengan margin atas -->
        <div style="margin-top: 20px;" class="text-center">
            <img src="../assets/r.png" class="rounded" alt="...">
        </div>

        <!-- Paragraf teks dengan margin atas -->
        <p style="text-align: center; margin-top: 20px;">Your text paragraph goes here...</p>

        <!-- Tautan dengan margin atas, berada di tengah -->
        <a href="https://www.contoh.com" style="display: block; text-align: center; margin-top: 20px;">link ibo gantneg</a>
    </main>
</template>
