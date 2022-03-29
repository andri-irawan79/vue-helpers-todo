import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

// const persisted = createPersistedState({
  
// });

export default createStore({
  plugins: [createPersistedState({
    paths: ['newTodosItem', 'itemIndex'],
  })],
  state: {
    newTodosItem: [],
    newItemIndex: 0,
  },
  getters: {
  },
  mutations: {
    setTodoItem(state, payload) {
      state.newTodosItem = payload; 
    }, 
    setItemIndex(state, payload){
      state.newItemIndex = payload;
    }
  },
  actions: {
    addTodosValue(store, payload) {
      const newTodosItem = store.state.newTodosItem;
      newTodosItem.push(payload);
      store.commit('setTodoItem', newTodosItem);
    },
    deleteTodosItem(store, index) {
      const deleteItems = store.state.newTodosItem;
      deleteItems.splice(index, 1);
      store.commit('setTodoItem', deleteItems);
    },
    editTodosItem(store, payload) {
      const editItems = store.state.newTodosItem;
      editItems.splice(payload.currentIndex, 1, payload.newTodoSet);
      store.commit('setTodoItem', editItems);
    },
    editTodosDesc(store, payload) {
      const editItems = store.state.newTodosItem;
      editItems.splice(payload.newCurrentIndex, 1, payload.newTodoSet);
      store.commit('setTodoItem', editItems);
    },
    editItemIndex(store, payload){
      store.commit('setItemIndex', payload);
    }
  },
  modules: {
  }
})

