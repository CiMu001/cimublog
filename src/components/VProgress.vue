<template>
    <div class="progress-box">
        <div class="progress" :style="{width: `${this.value}%`}"></div>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style lang="scss" scoped>
.progress-box {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    margin-left: 20px;
    margin-top: 10px;
}
.progress-box::before, .progress {
    position: absolute;
    top:50%;
    left: 0px;
    height: 8px;
    border-radius: 4px;
    transform: translateY(-50%);
    z-index: -1;
}
.progress-box::before {
    content: '';
    width: 100%;
    background-color: #e0e0e0;
}
.progress {
    width: 0%;
    background-color: #3498db;
    transition: 400ms ease;
}

</style>