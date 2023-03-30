<template>
  <div class="kinetic"></div>
</template>

<script>
export default {

}
</script>
<style scoped>
* {
    box-sizing: border-box;
}

.kinetic {
    position: relative;
    /* height: 100px;
    width: 100px; */
}

.kinetic::after,
.kinetic::before {
    content: '';
    position: absolute;
    border: 18px solid transparent;
    border-bottom-color: #2c3e50;
    animation: rotateA 2s linear infinite 0.5s;
}

.kinetic::before {
    transform: rotate(90deg);
    animation: rotateB 2s linear infinite;
}

@keyframes rotateA {
    0%,25%{
        transform: rotate(0deg);
    }

    50%,75%{
        transform: rotate(180deg);
    }

    100%{
        transform: rotate(360deg);
    }
}

@keyframes rotateB {
    0%,25%{
        transform: rotate(90deg);
    }

    50%,75%{
        transform: rotate(270deg);
    }

    100%{
        transform: rotate(450deg);
    }
}
</style>