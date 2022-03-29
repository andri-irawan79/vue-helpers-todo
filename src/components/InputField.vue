<template>
    <div class="container xxl mt-3">
        <input type="text" name="toDoing" class="form-control text-center w-100 mb-2" v-model="newTodos">
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
    data(){
        return {
            newTodos: '',
        };
    },
    computed: {
        setTodo () {
        return this.$store.state.newTodosItem;
        }
    },
    methods: {
        addTodoList() {
            if (this.newTodos === '') {
                alert('Data masih kosong')
            }
            else {
                const newTodosValue = {
                    items: this.newTodos,
                    description: 'Belum ada deskripsi!',
                };
                this.$store.dispatch("addTodosValue", newTodosValue);
                console.log(this.setTodo);
            }
        this.newTodos = '';  
        },
    },
    // mounted() {
    //     this.$refs.searchbar.focus();
    // }
}
</script>

<style>
/* Style here.. */
</style>


