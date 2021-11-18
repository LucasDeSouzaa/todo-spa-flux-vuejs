<template>
  <div class="p-4">
    <div class="d-flex flex-wrap justify-content-sm-center w-100 mb-5 p-0">
      <TodoItem
        v-for="task in allTasks"
        :key="task.id"
        :task="task"
    />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex/dist/vuex.mjs";
import { mapGetters } from "vuex/dist/vuex.mjs";
import TodoItem from "@/components/TodoItem";

export default {
  name: "TodoList",
  components: {
    TodoItem
  },
  methods: {
    ...mapActions(["fetchTasks"]),
  },
  computed: mapGetters(["allTasks"]),
  created() {
    this.fetchTasks();
  }
}
</script>