<template>
  <div class="card p-1 m-1" style="width: 16.09rem;">
    <div class="card-body d-flex flex-column justify-content-between">
      <h5
          class="card-title"
          v-show="editable === false"
      >
        {{ task.title }}
      </h5>

      <p
          class="card-text"
          v-show="editable === false"
      >
        {{ task.description }}
      </p>

      <!-- Inputs de editar -->
      <input
          class="form-control form-control-lg border-1 add-todo-input bg-transparent rounded h-25"
          type="text"
          v-model="task.title"
          v-show="editable !== false"
      >

      <input
          class="form-control form-control-lg border-1 add-todo-input bg-transparent rounded h-25"
          type="text"
          v-model="task.description"
          v-show="editable !== false"
      >
      <!-- /Inputs de editar -->
      <h6
          class="card-subtitle mb-2 text-muted"
          v-show="task.created_at !== null && editable === false"
      >
        Criado em: {{ task.created_at }}
      </h6>

      <h6
          class="card-subtitle mb-2 text-muted"
          v-show="task.updated_at !== null && editable === false"
      >
        Atualizado em: {{ task.updated_at }}
      </h6>

      <div class="d-flex justify-content-end">
        <button
            class="btn btn-outline-primary m-1"
            v-show="editable === false"
            @click="editable = !editable"
        >
          edit
        </button>
        <button
            class="btn btn-outline-danger m-1"
            v-show="editable === false"
            @click="removeTask(task.id)"
        >
          delete
        </button>

        <!-- Botões de aditar -->
        <button
            class="btn btn-outline-primary m-1"
            v-show="editable !== false"
            @click="editable = !editable; onEdit(task);"
        >
          save
        </button>
        <button
            class="btn btn-outline-danger m-1"
            v-show="editable !== false"
            @click="editable = !editable"
        >
          back
        </button>
        <!-- /Botões de aditar -->
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex/dist/vuex.mjs";

export default {
  name: "TodoItem",
  data(){
    return {
      editable: false
    }
  },
  props: {
    task: {
      "id": Number,
      "title": String,
      "description": String,
      "created_at": TimeRanges,
      "updated_at": TimeRanges
    }
  },
  methods: {
    ...mapActions(["updateTask", "removeTask"]),
    onEdit(task) {
      this.updateTask(
          {
            "id": task.id,
            "title": task.title,
            "description": task.description
          }
      )
    }
  }
}
</script>

<style scoped>

</style>