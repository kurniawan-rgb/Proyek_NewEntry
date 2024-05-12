<script>
import navbarPage from '@/components/navbarComponent.vue'

export default {
    components: {
        navbarPage,
    }
}
</script>

<template>
    <!-- Menambahkan navbarPage sebagai komponen -->
    <navbarPage/>

    <!-- Form pengisian sistem peringkat -->
    <main class="title-page" style="padding-left: 100px; padding-right: 100px;">
        <!-- Judul form -->
        <h4 style="text-align: center;">Form pengisian sistem peringkat</h4>
        <!-- Field tahun -->
        <div class="mb-3">
            <label for="tahun" class="form-label">Tahun</label>
            <input type="email" class="form-control" id="tahun" placeholder="2024">
        </div>
        <!-- Field nomor pertanyaan -->
        <div class="mb-3">
            <label for="nomor_pertanyaan" class="form-label">Nomor Pertanyaan</label>
            <input type="email" class="form-control" id="nomor_pertanyaan" placeholder="Nomor 1">
        </div>
        <!-- Field pertanyaan -->
        <div class="mb-3">
            <label for="pertanyaan" class="form-label">Pertanyaan</label>
            <input type="email" class="form-control" id="pertanyaan" placeholder="Berapa uas fakultas teknik">
        </div>
        <!-- Field jawaban -->
        <div class="mb-3">
            <label for="jawaban" class="form-label">Jawaban</label>
            <textarea class="form-control" id="jawaban" rows="3" placeholder="Ibo ganteng sekali tidak ada dua nya"></textarea>
        </div>
        <!-- Field lampirkan URL -->
        <div class="mb-3">
            <label for="lampirkan_url" class="form-label">Lampirkan URL</label>
            <input type="email" class="form-control" id="lampirkan_url" placeholder="https://ibo_org_gantengnya_infor_21_FTUH.com">
        </div>
        <!-- Field lampiran file -->
        <div class="mb-3">
            <label for="lampiran_file" class="form-label">Lampiran file (Jpg,Jpeg,Png,Docx,Pdf)</label>
            <input class="form-control" type="file" id="lampiran_file">
        </div>
        <!-- Pagination -->
        <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
                <li class="page-item disabled">
                    <a class="page-link">Previous</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>
    </main>
</template>