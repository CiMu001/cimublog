<template>
    <div class="titlebox" :style="{borderBottom: noBorder ? '0px' : '1px solid #d0d7de'}">
        <span>{{ title }}</span>
        <KineticLoader class="loader"></KineticLoader>
    </div>
</template>

<script>
import KineticLoader from '@/components/demo/KineticLoader.vue';

export default {
    props: {
        title:{
            type: String,
            default: '标题'
        },
        noBorder: {
            type: Boolean,
        }
    },
    components: { KineticLoader }
}
</script>
<style scoped>
.titlebox {
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  font-weight: 500;
  border-bottom: 1px solid #d0d7de;
  line-height: 36px;
  margin-bottom: 16px;
  color: #7952b3;
}
.titlebox .loader {
  margin-right: 48px;
  margin-top: -8px;
}
</style>