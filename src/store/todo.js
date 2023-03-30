// todo 仓库
// PS: 突然想起来Vuex是用来全局统一状态管理
//     我为什么要把todo写到vuex中捏   (●'◡'●)

const state = {
  todos: [],
  curPage: 1,
  pageSize: 8,
}

const getters = {
  todos: state => {
    return state.todos;
  },
  showTodos: state => {
    const { curPage,  todos, pageSize } = state;
    const showData = todos.filter((item, index) => {
      let satrt = (curPage - 1) * pageSize;
      let end = curPage * pageSize;
      if(index >= satrt && index < end) {
          return item;
      }
    });

    return showData;
  },
  total: state => {
    return state.todos.length;
  },
  undo: state => {
    return state.todos.filter(item => !item.state).length;
  },
  done: state => {
    return state.todos.filter(item => item.state).length;
  },
  pages: state => {
    const { pageSize, todos } = state;
    return Math.ceil(todos.length / pageSize);
  },
  curPage: state => {
    return state.curPage;
  },
}

const actions = {
  getTodos({commit}, payload='todos') {
    const data = JSON.parse(localStorage.getItem(payload)) || [];
    
    commit('setTodos', { data });
  },
  addTodo({state, commit}, payload) {
    const newTodos = state.todos;
    newTodos.push(payload.newTodo);
    
    commit('setTodos', { data: newTodos, todoType: payload.todoType });
  },
  updateTodos({state, commit}, payload) {
    const newTodos = state.todos.map(item => {
        if (item.id == payload.id) {
            item.state = payload.state;
        }
        
        return item;
    })

    commit('setTodos', { data: newTodos, todoType: payload.todoType });
  },
  deteleTodo({state, commit}, payload) {
    const newTodos = state.todos.filter(item => item.id !==  payload.id);

    commit('setTodos', { data: newTodos, todoType: payload.todoType });
  }
}

const mutations = {
  setTodos(state, { data, todoType }) {
      state.todos = data;
      localStorage.setItem(todoType, JSON.stringify(data));
  },
  setPage(state, { page }) {
    state.curPage = page;
  }
}

export default {
  state, actions, mutations, getters
}