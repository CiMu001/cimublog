<template>
  <div class="theme-clock" :class="{dark: mode==='白天模式'}">
    <button @click="mode = mode === '白天模式' ? '黑夜模式' : '白天模式'">{{ mode }}</button>
    <div class="container">
        <div class="clock">
            <div class="pointer hour" ref="hour"></div>
            <div class="pointer minute" ref="minute"></div>
            <div class="pointer second" ref="second"></div>
            <div class="center-point"></div>
        </div>
        <div class="time">{{ time }}</div>
        <div class="date">{{ date }}</div>
    </div>
  </div>
</template>

<script>
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default {
    data() {
        return {
            time: undefined,
            date: undefined,
            mode: '黑夜模式',
        }
    },
    mounted() {
        this.mysetInterval = setInterval(this.runTime, 1000);
    },
    methods: {
        runTime() {
            const time = new Date();
            const month = time.getMonth()
            const day = time.getDay()
            const date = time.getDate()
            const hours = time.getHours()
            const hoursForClock = hours >= 13 ? hours % 12 : hours;
            const minutes = time.getMinutes()
            const seconds = time.getSeconds()
            const ampm = hours >= 12 ? 'PM' : 'AM';
            const { hour, minute, second } = this.$refs;

            hour.style.transform = `translate(0%, -50%) rotate(${~~hoursForClock * 30 - 90}deg)`
            minute.style.transform = `translate(0%, -50%) rotate(${~~minutes * 6 - 90}deg)`
            second.style.transform = `translate(0%, -50%) rotate(${~~seconds * 6 - 90}deg)`

            this.time = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
            this.date = `${days[day]}, ${months[month]} ${date}`
        }
    },
    beforeDestroy() {
        clearInterval(this.mysetInterval);
    }
}
</script>

<style scoped>
* {
    box-sizing: border-box;
}
.theme-clock {
    margin: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: #fff;
    transition: background-color 0.5s;
}

.theme-clock.dark {
    background-color: #111;
    color: #fff;
}

button{
    top: 10px;
    right: 10px;
    position: absolute;
    padding: 8px 16px;
    border-radius: 5px;
    border: 0;
    color: #fff;
    background-color: black;
    cursor: pointer;
}

button:focus-visible {
    outline: 0;
}

.container {
    position: relative;
    width: 450px;
    height: 300px;
    font-size: 26px;
}

.pointer {
    position: absolute;
    height: 3px;
    top: 30%;
    left: 50%;
    transform-origin: center left;
    background-color: #111;
    transition: transform 0.5s ease-in;
}

.center-point {
    width: 10px;
    height: 10px;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #111;
    border-radius: 50%;
    border: 2px solid #e74c3c;
}

.hour {
    width: calc(30%);
}

.minute {
    width: calc(40%);
}

.second {
    width: calc(50%);
    background-color: #e74c3c;
}

.theme-clock.dark button, .theme-clock.dark .hour, .theme-clock.dark .minute, .theme-clock.dark .center-point {
    background-color: #fff;
    color: #111;
}
</style>