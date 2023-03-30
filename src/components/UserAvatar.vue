<template>
  <div class="avatar">
    <img src="../assets/avatar.jpg" alt="头像" 
    class="avatar" :style="{width: width, height: height}">
  </div>
</template>

<script>
export default {
    props: {
        url: {
            type: String,
            default: '../assets/avatar.jpg',
        },
        width: {
            type: String,
            default: '100%'
        },
        height: {
            type: String,
            default: '100%'
        }
    },
    data() {
        return {
        }
    }
}
</script>


<style scoped>
.avatar {
    border-radius: 50%;
}
</style>