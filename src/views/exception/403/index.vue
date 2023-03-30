<template>
  <div> 403 {{ description }} </div>
</template>

<script>
  export default {
    name: 'Exception403',
    data() {
      return {
        description: "抱歉, 你无权访问该页面",
      }
    }
  };
</script>
