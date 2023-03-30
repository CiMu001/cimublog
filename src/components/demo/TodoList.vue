<template>
    <div class="container">
        <h1>TODOS</h1>
        <div class="total">总计<span class="all">{{ total }}</span>条，待完成<span class="undone">{{ undo }}</span>条，已完成<span class="done">{{ done }}</span>条</div>
        <input type="text" @keyup.enter="addTodo" class="addinput" autocomplete="false" placeholder="输入你的待办项...">
        <ul class="todos">
            <div class="notodo" v-if="!todos || todos.length == 0">暂无待办</div>
            <li v-for="todo in showTodos" :key="todo.id">
                <label :for="`todo${todo.id}`">
                    <input type="checkbox" name="state" :id="`todo${todo.id}`"
                        class="checkinput" :checked="todo.state" @change="stateChange($event, todo.id)">
                    <input type="text" name="txt" :id="`todo${todo.id}`"
                        class="txtinput" autocomplete="false" v-model="todo.txt"
                        :disabled="todo.id == editTodoId">
                </label>
                <div class="tool">
                    <!-- <b-icon class="icon" icon="pencil"></b-icon> -->
                    <b-icon class="icon" icon="trash" @click="deleteTodo(todo.id)"></b-icon>
                </div>
            </li>
        </ul>
        <div class="paging">
            <ul>
                <template v-if="todos.length > 8">
                    <li v-for="i in pages" :class="{ curpage:  curPage == i }" :key="i" @click="$store.commit('setPage', {page: i})">{{ i }}</li>
                    <span>{{curPage}} / {{pages}}</span>
                </template>
            </ul>
        </div>
        <div class="tip">
            <p>输入后回车添加事项，鼠标左击文字启动编辑</p>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    props: { todoType: { default: 'todos', type: String } },
    data() {
        return {
            editTodoId: 0
        }
    },
    mounted() {
        this.$store.dispatch('getTodos', this.todoType);
    },
    computed: {
    ...mapGetters({
        showTodos: 'showTodos',
        todos: 'todos',
        total: 'total',
        undo: 'undo',
        done: 'done',
        pages: 'pages',
        curPage: 'curPage',
    }),
  },
  methods: {
    addTodo(e) {
        let { value } = e.target;
        const newTodo = {
            id: Date.now(),
            txt: value,
            state: false
        }

        this.$store.dispatch('addTodo', { newTodo, todoType: this.todoType });
        e.target.value = '';
    },
    deleteTodo(id) {
        this.$store.dispatch('deteleTodo', { id, todoType: this.todoType });
    },
    stateChange(e, id) {
        this.$store.dispatch('updateTodos', {id, state: e.target.checked, todoType: this.todoType});
    },
  },
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}

.container {
  position: relative;
  width: 400px;
  max-width: 460px;
  margin: 0 auto;
  /* margin-left: 80px; */
  text-align: center;
}

.container h1 {
  color: rgb(179, 131, 226);
  font-size: 80px;
  text-align: center;
  opacity: 0.4;
}

.container .total {
  font-size: 16px;
  margin-top: 20px;
}

.container .total span {
  padding: 0 5px;
  text-decoration: underline;
  font-size: 20px;
}

.container .total .all {
  color: cornflowerblue;
}

.container .total .undone {
  color: crimson;
}

.container .total .done {
  color:mediumseagreen;
}

.container .todos {
  width: 100%;
  height: 360px;
  overflow: hidden;
  margin-top: 20px;
  font-size: 20px;
}

.todos .notodo {
    color: rgb(179, 131, 226);
    font-size: 26px;
    text-align: center;
    opacity: 0.6;
}

.container .todos li {
  width: 100%;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.container .todos li label {
  display: flex;
  align-items: center;
  gap: 15px;
  flex: 1;
}

.container .todos .checkinput {
  width: 16px;
  height: 16px;
  margin-top: 2px;
}

.container .todos .txtinput {
  flex: 1;
  padding: 6px;
  border: none;
  font-size: inherit;
  outline: none;
  background-color: inherit;
  cursor: pointer;
}

.container .todos .txtinput:focus {
  padding: 5px;
  border: 1px solid rgb(179, 131, 226);
  box-shadow: 0 0 3px rgb(179, 131, 226);
}

.container .todos .checkinput:checked~.txtinput {
  text-decoration: line-through;
  color: #888;
}

.container .todos .tool .icon {
  margin-left: 8px;
  color: #7952b3;
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.container .todos .tool .icon-edit.active {
  color: cornflowerblue;
}

.container .addinput {
  width: 100%;
  margin-top: 20px;
  padding: 5px 10px;
  font-size: 20px;
  border: 1px solid rgb(179, 131, 226);
  border-radius: 4px;
  box-shadow: 1px 1px 3px rgb(179, 131, 226);
}

.container .tip {
  position: absolute;
  display: inline-block;
  width: 200px;
  left: calc(100% + 50px);
  top: 112px;
  padding: 10px;
  line-height: 24px;
  text-align: left;
  font-size: 14px;
  color: #999;
  border: 1px solid rgb(179, 131, 226);
  border-radius: 4px;
}
.container .tip:hover {
  box-shadow: 1px 1px 3px rgb(179, 131, 226);
}

@media (max-width: 1140px){
  .container .tip {
    display: none;
  }
}
.container .paging ul {
  display: flex;
  gap: 10px;
  margin-top: 40px;
  justify-content: center;
  align-items: center;
  font-weight: 600;
}

.container .paging ul li {
  padding: 2px 10px;
  border: 1px solid rgb(179, 131, 226);
  border-radius: 4px;
  color: rgba(179, 131, 226, 0.5);
  cursor: pointer;
  /* text-decoration: underline; */
}

.container .paging ul li.curpage,
.container .paging ul li:hover {
  color: rgb(145, 66, 224);
  transform: scale(1.1);
}

.container .paging ul span {
  margin-left: 40px;
}
</style>