<script setup>
import { ref, onMounted } from 'vue'
import { Head, Link, router, useForm } from '@inertiajs/vue3'

const props = defineProps({
  mahasiswas: {
    type: Object,
    required: true
  },
  errors: Object
})

// Form untuk tambah data
const form = useForm({
  nim: '',
  nama: '',
  email: '',
  jurusan: '',
  angkatan: null
})

// Form untuk edit data
const editForm = useForm({
  nim: '',
  nama: '',
  email: '',
  jurusan: '',
  angkatan: null
})

// State untuk modal edit
const isEditModalOpen = ref(false)

// Tambahkan fungsi untuk memuat ulang data
function reloadData() {
  router.reload({ only: ['mahasiswas'] })
}

function submitMahasiswa() {
  form.post('/mahasiswas', {
    preserveScroll: true,
    onSuccess: () => {
      form.reset()
      reloadData() // Panggil fungsi reload
    },
    onError: (errors) => {
      console.log(errors)
    }
  })
}

function editMahasiswa(mahasiswa) {
  // Isi form edit dengan data mahasiswa yang dipilih
  editForm.nim = mahasiswa.nim
  editForm.nama = mahasiswa.nama
  editForm.email = mahasiswa.email
  editForm.jurusan = mahasiswa.jurusan
  editForm.angkatan = mahasiswa.angkatan
  
  // Simpan ID mahasiswa yang sedang diedit
  editForm.id = mahasiswa.id
  
  // Buka modal
  isEditModalOpen.value = true
}

function updateMahasiswa() {
  editForm.put(`/mahasiswas/${editForm.id}`, {
    preserveScroll: true,
    onSuccess: () => {
      isEditModalOpen.value = false
      reloadData() // Panggil fungsi reload
    },
    onError: (errors) => {
      console.log(errors)
    }
  })
}

const deleteMahasiswa = (id) => {
  if(confirm('Apakah Anda yakin ingin menghapus mahasiswa ini?')) {
    router.delete(`/mahasiswas/${id}`, {
      preserveScroll: true,
      onSuccess: () => {
        reloadData() // Panggil fungsi reload
      }
    })
  }
}
</script>

<template>
  <Head title="Manajemen Mahasiswa" />
  <div class="container mx-auto p-6">
    <h1 class="text-2xl font-bold mb-6">Manajemen Mahasiswa</h1>

    <!-- Form Tambah Mahasiswa -->
    <form @submit.prevent="submitMahasiswa" class="mb-6">
      <div class="grid grid-cols-2 gap-4">
        <input 
          v-model="form.nim" 
          placeholder="NIM" 
          required 
          class="border p-2"
        />
        <input 
          v-model="form.nama" 
          placeholder="Nama Lengkap" 
          required 
          class="border p-2"
        />
        <input 
          v-model="form.email" 
          type="email" 
          placeholder="Email" 
          required 
          class="border p-2"
        />
        <input 
          v-model="form.jurusan" 
          placeholder="Jurusan" 
          required 
          class="border p-2"
        />
        <input 
          v-model="form.angkatan" 
          type="number" 
          placeholder="Angkatan" 
          required 
          class="border p-2"
        />
        <button 
          type="submit" 
          class="bg-blue-500 text-white p-2"
          :disabled="form.processing"
        >
          {{ form.processing ? 'Mengirim...' : 'Tambah Mahasiswa' }}
        </button>
      </div>
    </form>

    <!-- Modal Edit -->
    <div v-if="isEditModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white p-6 rounded-lg w-full max-w-lg">
        <h2 class="text-xl font-bold mb-4">Edit Mahasiswa</h2>
        
        <form @submit.prevent="updateMahasiswa">
          <div class="space-y-4">
            <div>
              <label class="block mb-1">NIM</label>
              <input 
                v-model="editForm.nim" 
                type="text"
                required 
                class="w-full border p-2"
              />
            </div>
            
            <div>
              <label class="block mb-1">Nama</label>
              <input 
                v-model="editForm.nama" 
                type="text"
                required 
                class="w-full border p-2"
              />
            </div>

            <div>
              <label class="block mb-1">Email</label>
              <input 
                v-model="editForm.email" 
                type="email"
                required 
                class="w-full border p-2"
              />
            </div>

            <div>
              <label class="block mb-1">Jurusan</label>
              <input 
                v-model="editForm.jurusan" 
                type="text"
                required 
                class="w-full border p-2"
              />
            </div>

            <div>
              <label class="block mb-1">Angkatan</label>
              <input 
                v-model="editForm.angkatan" 
                type="number"
                required 
                class="w-full border p-2"
              />
            </div>

            <div class="flex gap-4">
              <button 
                type="submit" 
                class="bg-blue-500 text-white px-4 py-2"
                :disabled="editForm.processing"
              >
                {{ editForm.processing ? 'Menyimpan...' : 'Simpan Perubahan' }}
              </button>
              
              <button 
                type="button"
                @click="isEditModalOpen = false"
                class="bg-gray-500 text-white px-4 py-2"
              >
                Batal
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <!-- Tabel Mahasiswa -->
    <table class="w-full border">
      <thead>
        <tr class="bg-gray-200">
          <th class="border p-2">NIM</th>
          <th class="border p-2">Nama</th>
          <th class="border p-2">Email</th>
          <th class="border p-2">Jurusan</th>
          <th class="border p-2">Angkatan</th>
          <th class="border p-2">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="mahasiswa in mahasiswas" 
          :key="mahasiswa.id"
          class="hover:bg-gray-100"
        >
          <td class="border p-2">{{ mahasiswa.nim }}</td>
          <td class="border p-2">{{ mahasiswa.nama }}</td>
          <td class="border p-2">{{ mahasiswa.email }}</td>
          <td class="border p-2">{{ mahasiswa.jurusan }}</td>
          <td class="border p-2">{{ mahasiswa.angkatan }}</td>
          <td class="border p-2">
            <button 
              @click="deleteMahasiswa(mahasiswa.id)"
              class="bg-red-500 text-white px-2 py-1"
            >
              Hapus
            </button>
            <button 
              @click="editMahasiswa(mahasiswa)"
              class="bg-blue-500 text-white px-2 py-1 ml-2"
            >
              Edit
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
```
