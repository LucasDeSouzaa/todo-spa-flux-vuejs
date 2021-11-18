<template>
  <div class="row m-1 p-5 w-100">
    <div class="col col-11 mx-auto">
      <form
          class="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center"
          @submit="onSubmit"
      >
        <div class="col">
          <input
              class="form-control form-control-lg border-0 add-todo-input bg-transparent rounded"
              type="text"
              placeholder="O que precisa ser feito?"
              v-model="title"
          >
        </div>
        <div class="col-auto px-0 mx-0 mr-2">
          <input
              type="submit"
              class="btn btn-primary"
              value="Add"
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex/dist/vuex.mjs";

export default {
  name: "AddTodo",
  data() {
    return {
      title: ''
    };
  },
  methods: {
    ...mapActions(["addTask"]),
    onSubmit(e) {
      e.preventDefault();
      this.addTask(
          {
            "title": this.title
          }
      );
    }
  }
}
</script>