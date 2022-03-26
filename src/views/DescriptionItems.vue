<template>
    <div class="description container-lg flex justify-content-top ms-4">
        <div>
            <router-link to="/">
                <button class="btn btn-danger">
                    <i class="bi bi-arrow-counterclockwise"></i><span class="ms-1">Kembali</span>
                </button>
            </router-link>
        </div>
        <h1>Menjadi Frontend Dev</h1>
        <div>
            <p>{{itemDescription}}</p>
        </div>
        <div v-if="isEditDesc == false">
            <button class="btn btn-info" @click="doEditDesc">
                <i class="bi bi-pencil-square"></i><span class="ms-1">Ubah description</span>
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
            itemDescription: 'Belum ada deskripsi',
            newDescription: '',
        };
    },
    methods: {
        doEditDesc() {
            this.isEditDesc = true;
            this.newDescription = this.itemDescription;
        },
        saveEditedDesc() {
            this.itemDescription = this.newDescription;
            this.isEditDesc = false;
        }
    }


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