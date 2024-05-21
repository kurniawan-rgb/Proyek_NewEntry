<template>
  <div>
    <navbarPage />
    <main class="container-admin-user">
      <navbarAdmin />
      <div class="content-admin-user">
        <table class="table">
          <thead>
            <tr class="th-middle">
              <th class="text-center" scope="col">No</th>
              <th scope="col">User</th>
              <th scope="col">Fakultas</th>
              <th scope="col">Prodi</th>
              <th scope="col">Username</th>
              <th scope="col">Password</th>
              <th class="text-center" scope="col">WCU (QS/THE)</th>
              <th class="text-center" scope="col">NU Greenmetric</th>
              <th class="text-center" scope="col">SNI Award</th>
              <th class="text-center action-column" scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in users" :key="index">
              <th class="text-center th-middle" scope="row">{{ index + 1 }}</th>
              <td
                v-if="!user.isNew && !user.isEditing"
                class="text-left td-middle"
              >
                {{ user.name }}
              </td>
              <td v-else><input v-model="user.name" class="table-input" /></td>
              <td
                v-if="!user.isNew && !user.isEditing"
                class="text-left td-middle"
              >
                {{ user.fakultas }}
              </td>
              <td v-else>
                <input v-model="user.fakultas" class="table-input" />
              </td>
              <td
                v-if="!user.isNew && !user.isEditing"
                class="text-left td-middle"
              >
                {{ user.prodi }}
              </td>
              <td v-else><input v-model="user.prodi" class="table-input" /></td>
              <td
                v-if="!user.isNew && !user.isEditing"
                class="text-left td-middle"
              >
                {{ user.username }}
              </td>
              <td v-else>
                <input v-model="user.username" class="table-input" />
              </td>
              <td
                v-if="!user.isNew && !user.isEditing"
                class="text-left td-middle"
              >
                {{ user.password }}
              </td>
              <td v-else>
                <input v-model="user.password" class="table-input" />
              </td>
              <td class="text-center td-middle">
                <iconPlus v-if="!user.isNew && !user.isEditing" />
              </td>
              <td class="text-center td-middle">
                <iconPlus v-if="!user.isNew && !user.isEditing" />
              </td>
              <td class="text-center td-middle">
                <iconPlus v-if="!user.isNew && !user.isEditing" />
              </td>
              <td v-if="user.isNew" class="text-center action-column">
                <button @click="addUser(index)" class="action-btn add-btn">
                  Tambah
                </button>
              </td>
              <td
                v-else
                class="text-center action-column edit-remove-container"
              >
                <button
                  @click="editUser(index)"
                  v-if="!user.isEditing"
                  class="action-btn edit-btn"
                >
                  Edit
                </button>
                <button
                  @click="saveUser(index)"
                  v-else
                  class="action-btn save-btn"
                >
                  Simpan
                </button>
                <button
                  @click="removeUser(index)"
                  style="margin-left: 5px"
                  class="action-btn remove-btn"
                >
                  Hapus
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <button @click="addNewRow" class="action-btn add-new-btn">
            Tambah User
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import navbarPage from "@/components/navbarComponent.vue";
import navbarAdmin from "@/components/navbarAdmin.vue";
import iconPlus from "@/components/iconPlus.vue";

export default {
  components: {
    navbarPage,
    navbarAdmin,
    iconPlus,
  },
  data() {
    return {
      users: [
        {
          name: "Richal Akbar",
          fakultas: "Teknik",
          prodi: "Teknik Informatika",
          username: "d121211084",
          password: "d1212110841967",
        },
        {
          name: "Andi Muhammad Sabar",
          fakultas: "Teknik",
          prodi: "Teknik Informatika",
          username: "d121211084",
          password: "d1212110841967",
        },
        {
          name: "Reza Kurniawan",
          fakultas: "Teknik",
          prodi: "Teknik Informatika",
          username: "d121211084",
          password: "d1212110841967",
        },
      ],
    };
  },
  methods: {
    addNewRow() {
      this.users.push({
        name: "",
        fakultas: "",
        prodi: "",
        username: "",
        password: "",
        isNew: true,
        isEditing: false,
      });
    },
    addUser(index) {
      this.users[index].isNew = false;
    },
    editUser(index) {
      this.users[index].isEditing = true;
    },
    saveUser(index) {
      this.users[index].isEditing = false;
    },
    removeUser(index) {
      this.users.splice(index, 1);
    },
  },
};
</script>

<style>
.container-admin-user {
  padding: 20px;
}

.table {
  width: 100%;
  margin-bottom: 20px;
  border-collapse: collapse;
}

.table th,
.table td {
  border: 1px solid #dee2e6;
  padding: 8px;
  vertical-align: middle;
}

.table-input {
  width: 100%;
  box-sizing: border-box;
  padding: 6px 12px;
  border: 1px solid #ced4da;
  border-radius: 4px;
}

.action-btn {
  line-height: 1;
  background-color: #2aaa94;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  width: auto;
}

.action-btn:hover {
  background-color: #249e88;
}

.action-btn:active {
  background-color: #208a76;
}

.action-btn:focus {
  outline: none;
}

.remove-btn {
  background-color: #e74c3c;
  line-height: 1;
}

.remove-btn:hover {
  background-color: #c0392b;
}

.remove-btn:active {
  background-color: #922b21;
}

.text-left {
  text-align: left;
}

.text-center {
  text-align: center;
}

.button-container {
  text-align: center;
}

.edit-btn {
  background-color: blue;
  padding: 8px 16px;
  line-height: 1;
}

.edit-btn:hover {
  background-color: darkblue;
}

.edit-btn:active {
  background-color: navy;
}

.td-middle,
.th-middle {
  vertical-align: middle;
}

.action-column {
  width: 15ch;
}
</style>
