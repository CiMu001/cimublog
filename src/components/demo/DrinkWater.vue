<template>
  <div class="drinkWater">
    <div class="main">
        <h1>Drink Water</h1>
        <h3>总量: 2 Liters</h3>
        <div class="cup big">
            <div class="remained" ref="remainedEl">
                <h3>2L</h3>
                <span>剩余</span>
            </div>
            <div class="percentage" ref="percentageEl">{{ percentage }}</div>
        </div>
        <p style="letter-spacing: 2px">请选择下方瓶子数量来记录你喝了多少水</p>
        <div class="select-box">
            <div class="cup small" 
                v-for="i in 8" :key="i"
                ref="cups" @click="selectCup(i-1)"
            >250 ml</div>
            <!-- <div class="cup small">250 ml</div>
            <div class="cup small">250 ml</div>
            <div class="cup small">250 ml</div>
            <div class="cup small">250 ml</div>
            <div class="cup small">250 ml</div>
            <div class="cup small">250 ml</div>
            <div class="cup small">250 ml</div> -->
        </div> 
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            percentage: undefined,
        }
    },
    methods: {
        selectCup(idx) {
            const { cups } = this.$refs;

            let cupSum = 0;
            cups.forEach((cup, index) => {
                if(idx === index) {
                    if(!(cups[index+1] && cups[index+1].classList.contains('full'))){
                        cup.classList.toggle('full');
                    }
                }else if(index < idx) {
                    cup.classList.add('full');
                }else {
                    cup.classList.remove('full');
                }
                if(cup.classList.contains('full')) {
                    cupSum++;
                }
            })

            this.countWater(cupSum);
        },
        countWater(cupSum) {
            const { remainedEl, percentageEl } = this.$refs;
            let percentage = cupSum / 8 * 100;
            let remained = 100 - percentage;
            if(cupSum === 8) {
                remainedEl.style.visibility = 'hidden';
            }else if(cupSum === 0) {
                percentageEl.style.visibility = 'hidden';
            }else {
                remainedEl.style.visibility = 'visible';
                percentageEl.style.visibility = 'visible';
            }
            
            remainedEl.style.height = `${remained}%`;
            percentageEl.style.height = `${percentage}%`;
            this.percentage = `${percentage}%`;
        },
    }
}
</script>

<style scoped>
* {
    box-sizing: border-box;
}

h3 {
    margin: 0;
    padding: 0 0 5px 0;
}

.drinkWater {
    margin: 0;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(14, 145, 197);
}

.main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
}

.cup {
    border: 4px solid blue;
    background-color: #fff;
    color: blue;
    overflow: hidden;
}

.big {
    width: 150px;
    height: 300px;
    border-radius: 0 0 50px 50px;
}

.small {
    width: 50px;
    height: 100px;
    border-radius: 0 0 15px 15px;
    margin: 10px;
    font-size: 13px;
    display: flex;
    align-items: center;
    cursor: pointer;
}

.small.full {
    color: #fff;
    background-color: skyblue;
}

.select-box {
    width: calc(560px / 2);
    display: flex;
    flex-wrap: wrap;
}

.remained {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex: 1;
    transition: 0.3s ease;
    height: 100%;
}

.percentage {
    background-color: skyblue;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 30px;
    height: 0%;
    transition: 0.3s ease;
    visibility: hidden;
  }
</style>>