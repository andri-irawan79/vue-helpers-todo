<template>
    <div class="container xxl mt-3">
        <input type="text" name="toDoing" ref="searchbar" class="form-control text-center w-100 mb-2" v-model="newTodos">
        <div>
            <button class="btn btn-success my-4" @click="addTodoList">
                <i class="bi bi-clipboard2-plus me-1"></i><span>Add Todo</span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InputField',
    props: {
        todos: Array,
        newTodo: String,
        serialNumber: Number

    },
    data() {
        return {
            newTodos: this.newTodo,
            todoList: this.todos,
            listNumber: this.serialNumber,
        };
        
    },
    methods: {
        addTodoList() {
            if (this.newTodos === '') {
                alert('Data masih kosong')
            }
            else {
                this.todoList.push(this.newTodos);
                this.newTodos = '';
            }
            
        },
    },
    mounted() {
        this.$refs.searchbar.focus();
    }
}
</script>

<style>

</style>


