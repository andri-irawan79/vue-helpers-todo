<template>
    <div class="container-xl w-100 my-5">
        <!-- <div v-if="todos.length > 3" class="alert alert-success p-2 fw-bold">Hebat!</div> -->
        <table class="w-100 table-striped">
            <tr class="text-black">
                <th class="col-1">No.</th>
                <th class="col-7">Todo</th>
                <th class="col-4">Action</th> 
            </tr>
            <tr v-for="(todo, index) in setTodo" :key="todo.items">
                <TodoItems :todos="setTodo" :todo="todo.items" :index="index"/>   
            </tr> 
        </table>
    </div>
</template>

<script>
import TodoItems from '@/components/TodoItems.vue';

export default {
    name: 'ListTodo',
    components: {
        TodoItems,
    },
    computed: {
        setTodo() {
            return this.$store.state.todosItems;
        }
    }
}
</script>

<style scoped>
th,
tr,
td {
    border: 1px solid rgb(168, 168, 168);
    padding: 10px;
}

table tr th {
    background-color: royalblue;
}

table tr:nth-child(odd) {
    background-color: rgb(231, 233, 238);
}
</style>

