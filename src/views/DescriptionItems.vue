<template>
    <div class="description container-lg flex justify-content-top ms-4">
        <div>
            <button class="btn btn-danger" @click="redirectTo('/')">
                <i class="bi bi-arrow-counterclockwise"></i><span class="ms-1">Kembali</span>
            </button>
        </div>
        <h1>{{setTodo[setIndex].items}}</h1>
        <div>
            <p>{{setTodo[setIndex].description}}</p>
        </div>
        <div v-if="isEditDesc == false">
            <button class="btn btn-info" @click="doEditDesc">
                <i class="bi bi-pencil-square"></i><span class="ms-1">Edit deskripsi</span>
                </button>
        </div>
        <div v-else class="col-11 col-sm-5">
            <textarea class="form-control" v-model="newDescription"/>
            <button class="btn btn-success btn-simpan" @click="saveEditedDesc">
                <i class="bi bi-check2-square"></i><span class="ms-1">Selesai</span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ItemDesc',
    data() {
        return {
            isEditDesc: false,
            newDescription: '',
        };
    },
    methods: {
        doEditDesc() {
            this.isEditDesc = true;
            this.newDescription = this.setTodo[this.id].description;
        },
        saveEditedDesc() {
            if (this.newDescription === '') {
                alert('Data masih kosong')
            }
            else {
                const newValueTodos = {
                    newCurrentIndex: this.id,
                    newTodoSet: {
                        items: this.setTodo[this.id].items,
                        description: this.newDescription,
                    }
                }
                this.$store.dispatch("editTodosDesc", newValueTodos);
                console.log(this.id);
                this.isEditDesc = false;
            }  
        },
        redirectTo(path){
            this.$router.push(path)
        } 
    },
    computed: {
        id(){
            return this.$route.params.currentIndex;
        },
        setTodo () {
            return this.$store.state.todosItems;
        },
        setIndex(){
            return this.$store.state.itemIndex;
        },   
    },
}
</script>

<style scoped>
* {
    text-align: start;
    margin: 10px 0;
}

.btn-simpan {
    margin-top: 2px;
}
</style>