<template>
<td>{{index + 1}}.</td>
<td v-if="isEdit == false" class="text-start">{{todo}}</td>
<td v-else>
    <input type="text" ref="search" class="form-control"  v-model="editedTodo">
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
    props: {
        todoList: Array,
        todo: String,
        index: Number,
    },
    data(){
        return {
            isEdit: false,
            editedTodo: '',
            editStatusButton: 'Edit',
            toDoing: this.todoList,
        };
    },
    methods: {
        deletTodo(index) {
            this.toDoing.splice(index, 1);
        },
        doEdit(index){ 
            this.isEdit = true;
            this.editedTodo = this.toDoing[index];
            this.$refs.search.focus();
        },
        addEdit(index){
            if (this.editedTodo === '') {
                alert('Data masih kosong')
            }
            else {
                this.toDoing.splice(index, 1, this.editedTodo);
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