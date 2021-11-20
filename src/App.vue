<template>
  <div>
    <Header/>
    <div id="App" class="container d-flex flex-column justify-content-center align-items-center">
      <AddTodo/>
      <TodoList/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import Header from "@/components/peripherals/Header";
import Footer from "@/components/peripherals/Footer";

export default {
  name: 'App',
  components: {
    Header,
    AddTodo,
    TodoList,
    Footer
  }
}
</script>
