<template>
  <div>
    <NavbarPage />
    <main class="container-admin-user">
      <NavbarAdmin />
      <div class="content-admin-user">
        <table class="table">
          <thead>
            <tr>
              <th class="text-center col-no" scope="col">No</th>
              <th class="text-center" scope="col">List Soal & Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(question, index) in questions" :key="index">
              <td class="text-center align-middle" scope="row">{{ index + 1 }}</td>
              <td class="align-middle">
                <div class="question-container">
                  <input
                    v-if="question.editable"
                    v-model="question.text"
                    @blur="saveQuestion(index)"
                    @keyup.enter="saveQuestion(index)"
                    class="form-control"
                  />
                  <span v-else>{{ question.text }}</span>
                  <div class="icon-container">
                    <AddButton @click="addQuestion(index)" v-if="!question.editable" />
                    <EditButton @click="editQuestion(index)" v-if="!question.editable" />
                    <DeleteButton @click="deleteQuestion(index)" v-if="!question.editable" />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>

<script>
import NavbarPage from "@/components/navbarComponent.vue";
import NavbarAdmin from "@/components/navbarAdmin.vue";
import AddButton from "@/components/addButton.vue";
import EditButton from "@/components/editButton.vue";
import DeleteButton from "@/components/deleteButton.vue";

export default {
  components: {
    NavbarPage,
    NavbarAdmin,
    AddButton,
    EditButton,
    DeleteButton,
  },
  data() {
    return {
      questions: [
        { text: "Pertanyaan 1", editable: false },
        { text: "Pertanyaan 2", editable: false },
        { text: "Pertanyaan 3 dst....", editable: false },
      ],
    };
  },
  methods: {
    addQuestion(index) {
      const nextQuestionNumber = this.questions.length + 1;
      this.questions.splice(index + 1, 0, { text: "", editable: true });
    },
    editQuestion(index) {
      this.questions[index].editable = true;
    },
    saveQuestion(index) {
      this.questions[index].editable = false;
    },
    deleteQuestion(index) {
      this.questions.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.icon-container {
  display: flex;
  justify-content: flex-end;
}

td {
  vertical-align: middle;
}
</style>
