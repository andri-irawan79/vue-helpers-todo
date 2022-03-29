import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const persistedstate = createPersistedState({
  paths: ['todosItems', 'itemIndex'],
});

export default createStore({
  plugins: [persistedstate],
  state: {
    todosItems: [],
    itemIndex: 0,
  },
  getters: {
  },
  mutations: {
    setTodoItem(state, payload) {
      state.todosItems = payload; 
    }, 
    setItemIndex(state, payload){
      state.itemIndex = payload;
    }
  },
  actions: {
    addTodosValue(store, payload) {
      const todosItems = store.state.todosItems;
      todosItems.push(payload);
      store.commit('setTodoItem', todosItems);
    },
    deleteTodosItem(store, index) {
      const deleteItems = store.state.todosItems;
      deleteItems.splice(index, 1);
      store.commit('setTodoItem', deleteItems);
    },
    editTodosItem(store, payload) {
      const editItems = store.state.todosItems;
      editItems.splice(payload.currentIndex, 1, payload.newTodoSet);
      store.commit('setTodoItem', editItems);
    },
    editTodosDesc(store, payload) {
      const editItems = store.state.todosItems;
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

