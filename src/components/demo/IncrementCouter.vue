<template>
  <div class="incrementCouter">
    <div class="container" v-for="item in followers" :key="item.id">
        <b-icon :icon="item.icon" style="color: #7952b3; width: 40px; height: 40px;"></b-icon>
        <div class="counter">{{ item.current }}</div>
        <span>{{ item.icon }} Followers</span>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            followers: [
                { id: 1, icon: 'Twitter', current: 0, follower: 1091100 },
                { id: 2, icon: 'Youtube', current: 0, follower: 1045670 },
                { id: 3, icon: 'Github', current: 0, follower: 12439560 },
            ],
        }
    },
    mounted() {
        this.followers.forEach(item => {
            const base = item.follower / 200;

            const count = () => {
                if(item.current < item.follower) {
                    item.current = Math.ceil(item.current + base);
                    setTimeout(count, 10);
                } else {
                    item.current = item.follower
                }
            }

            count()
        });
    },
    methods: {
        count() {

        }
    }
}
</script>

<style scoped>
.incrementCouter {
    margin: 0;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    overflow: hidden;
    font-family: 'Roboto Mono', sans-serif;
    background-color: transparent;
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    text-align: center;
    color: #7952b3;
}

.counter {
    margin-top: 10px;
    font-size: 20px;
}
</style>