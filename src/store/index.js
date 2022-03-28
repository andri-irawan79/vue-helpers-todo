import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const persistedstate = createPersistedState({
  paths: ['todosItems'],
});

export default createStore({
  plugins: [persistedstate],
  state: {
    todosItems: [],
  },
  getters: {
  },
  mutations: {
    setTodoItem(state, payload) {
      state.todosItems = payload; 
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
  },
  modules: {
  }
})

