<template>
  <div class="exception-cimu">
    <img src="../../../assets/ic-404.svg" alt="404图片">
    <div class="text">
      <h1>404</h1>
      <p>{{description}}</p>
      <router-link to="/">
        <button>返回首页</button>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Exception404',
    data() {
      return {
        description: "抱歉, 你访问的页面不存在",
      }
    }
  };
</script>

<style scoped>
.exception-cimu {
  display: flex;
  justify-content: center;
  height: 100vh;
  min-height: 500px;
  padding-top: 10%;
}

.exception-cimu img {
  width: 325px;
  height: 265px;
}

.exception-cimu .text {
  display: flex;
  flex-direction: column;
  margin-left: 48px;
}

.exception-cimu .text h1 {
  font-size: 60px;
  margin: 16px 0;
}

.exception-cimu .text p {
  font-size: 20px;
  margin: 16px 0;
}

.exception-cimu .text button {
  font-size: 18px;
  margin: 16px 0;
  padding: 6px 12px;
  background-color: #1890ff;
  color: #fff;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
}

.exception-cimu .text button:hover {
  transform: scale(0.96);
}
</style>
