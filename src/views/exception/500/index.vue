<template>
  <div> 500 {{ description }}</div>
</template>

<script>
  export default {
    name: 'Exception500',
    data() {
      return {
        description: "抱歉, 服务器出错了",
      }
    },
  };
</script>
