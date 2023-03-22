<!-- 全程双向数据绑定了， 根本不需要取值在判断，省去了好多代码 -->
<template>
  <div class="note-app">
    <div class="note-container">
        <div class="note-item" v-for="note in notes" :key="note.id">
            <div class="note-head">
                <b-icon class="icon" icon="trash" @click="del(note.id)"></b-icon>
            </div>
            <div class="note-body">
                <textarea class="noedit" name="noteTxt" id="noteTxt" v-model="note.txt" @blur="updata"></textarea>
            </div>
        </div>
    </div>
    <button class="addBtn base-btn" @click="add">
        <b-icon class="icon" icon="plus"></b-icon>
        <span>添加便签</span>
    </button>
  </div>
</template>

<script>
export default {
    data() {
        return {
          notes: [],
        }
    },
    mounted() {
      const notes = JSON.parse(localStorage.getItem('notes'));
      this.notes = notes || [];
    },
    methods: {
      del(id) {
        this.notes = this.notes.filter(item => item.id !== id);
        localStorage.setItem('notes', JSON.stringify(this.notes));
      },
      add() {
        const newNote = {
          id: Date.now(),
          txt: ''
        }

        this.notes.push(newNote);
        localStorage.setItem('notes', JSON.stringify(this.notes));
      },
      updata() {
        localStorage.setItem('notes', JSON.stringify(this.notes));
      }
    }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.note-app {
    position: absolute;
    top: 0;
    width: 100%;
}

.addBtn {
  position: absolute;
  display: flex;
  align-items: center;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: antiquewhite;
  border: none;
  outline: none;
  cursor: pointer;
}

.addBtn i {
  font-size: 14px;
  font-weight: bold;
  padding-right: 5px;
}

.note-container {
  width: 100%;
  padding: 80px 40px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
}

.note-item {
  flex-basis: 400px;
  flex-basis: 1;
  flex-shrink: 1;
  height: 500px;
  background-color: #fff;
  box-shadow: 0 0 10px #0f0;
}

.note-head {
  height: 40px;
  line-height: 50px;
  background-color: #409d15;
  text-align: right;
}

.note-head i {
  font-size: 30px;
  margin-right: 20px;
  cursor: pointer;
}

.note-body textarea {
  width: 100%;
  height: 460px;
  padding: 2px;
  resize: none;
  font-size: 22px;
  outline-color: #409d15;
  background-color: beige;
}

.note-body textarea:focus {
  background-color: #fff;
}

.base-btn:active {
  transform: scale(1.1);
}

.icon {
    width: 24px;
    height: 24px;
    cursor: pointer;
}
</style>