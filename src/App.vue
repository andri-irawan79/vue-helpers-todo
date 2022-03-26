<template>
  <div>
    <h1 class="text-black display-4 mb-5 ">Todo List</h1>
    <InputField :todos="todos" :newTodo="newTodo"/>
    <ListTodo :todos="todos" />
  </div>
</template>

<script>
import InputField from '@/components/InputField.vue'
import ListTodo from '@/components/ListTodo.vue'

export default {
  name: 'App',
  data() {
    return {
      todos: [],
      newTodo: '',
      serialNumber: 0
    };
  },
  components: {
    InputField,
    ListTodo,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
