<template>
    <td>{{index + 1}}.</td>
    <td v-if="isEdit == false" class="text-start">
        <router-link to="/description" class=" text-decoration-none text-black">{{todo}}</router-link>
    </td>
    <td v-else>
        <input type="text" ref="search" class="form-control" v-model="editedTodo">
    </td>
    <td>
        <div>
            <button class="btn btn-danger bg-danger m-1" @click="deletTodo(index)">
                    <i class="bi bi-trash-fill me-1"></i><span>Delet</span>
            </button>
            <button v-if="this.isEdit == false" @click="doEdit(index)" class="btn btn-info bg-info m-1" >
                <i class="bi bi-pencil-square me-1"></i><span>Edit</span>
            </button>
            <button v-else @click="addEdit(index)" class="btn btn-info bg-info m-1">
                <i class="bi bi-pencil-square me-1"></i><span>Done</span>
            </button>
        </div>
    </td>
</template>

<script>
export default {
    name: 'TodoItems',
    data(){
        return {
            isEdit: false,
            editedTodo: '',
        };
    },
    props: {
        todos: Array,
        todo: String,
        index: Number,
    },
    methods: {
        deletTodo(index) {
            this.$store.dispatch("deleteTodosItem", index);
        },
        doEdit(index){ 
            this.isEdit = true;
            this.editedTodo = this.todos[index].items;
        },
        addEdit(index){
            if (this.editedTodo === '') {
                alert('Data masih kosong')
            }
            else {
                const newValueTodos = {
                    currentIndex: this.index,
                    newTodoSet: {
                        items: this.editedTodo,
                        description: this.todos[index].description,
                    }
                }
                this.$store.dispatch("editTodosItem", newValueTodos);
                console.log(index);
                this.isEdit = false;
            }   
        }
    }
}
</script>

<style scoped>
td {
    border: 1px solid rgb(168, 168, 168);
    padding: 10px;
}
</style>