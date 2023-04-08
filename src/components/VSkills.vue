<template>
  <div class="skillsPage">
    <div class="skills" v-for="skill of skills" :key="skill.type">
      <div class="skill-type" @click="handelClick(skill.type)">
        <b-icon class="icon" icon="braces"></b-icon>
        <div class="skill-info">
          <span class="name">{{ skill.type }}</span>
          <span class="info">More than {{ skill.years }} years</span>
        </div>
        <span class="drop-btn"
          ><b-icon
            class="icon"
            :class="{ cloes: showTypeNames.find((item) => item === skill.type) }"
            icon="caret-down-fill"
          ></b-icon
        ></span>
      </div>
      <div class="details" :style="{ height: showHeight(skill.type) }">
        <div class="skill-item" v-for="item in skill.items" :key="item.name">
          <b-icon class="icon" icon=""></b-icon>
          <div class="info-box">
            <div class="info">
              <span class="name">{{ item.name }}</span>
              <span class="pro">{{ item.score }}%</span>
            </div>
            <VProgress :value="item.score"></VProgress>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VProgress from "./VProgress.vue";

export default {
  components: { VProgress },
  data() {
    return {
      showTypeNames: ['Frontend developer'],
      skills: [
        {
          type: "Frontend developer",
          years: "1",
          items: [
            { name: "HTML", score: 60 },
            { name: "CSS", score: 60 },
            { name: "JavaScript", score: 80 },
            { name: "VUE", score: 60 },
            { name: "React", score: 20 },
          ],
        },
        {
          type: "后端开发工程师",
          years: "*",
          items: [
            { name: "Java", score: 20 },
            { name: "MySQL", score: 20 },
          ],
        },
        {
          type: "other",
          years: "1",
          items: [
            { name: "Python", score: 20 },
            { name: "Apex", score: 90 },
          ],
        },
      ],
    };
  },
  methods: {
    handelClick(type) {
      const index = this.showTypeNames.findIndex((item) => item === type);
      if (index === -1) {
        this.showTypeNames.push(type);
      } else {
        const newArr = this.showTypeNames.filter((item) => item !== type);
        this.showTypeNames = newArr;
      }
    },
    showHeight(type) {
      if (!this.showTypeNames.find((item) => item === type)) return "0";
    },
  },
};
</script>


<style scoped>
.skills {
  padding: 12px 0;
}
.skill-type {
  display: flex;
  padding: 6px 20px;
  align-items: center;
}
.skills .icon {
  font-size: 40px;
  color: blueviolet;
}
.skill-type .drop-btn {
  flex: 1;
  text-align: right;
}
.skill-type .drop-btn .icon {
  font-size: 24px;
  transition: all 0.3s ease-in-out;
}
.skill-type .drop-btn .icon.cloes {
  transform: rotate(-90deg);
}

.skill-type .skill-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  margin: 0 20px;
}
.skill-type .skill-info .name {
  font-size: 20px;
  font-weight: 600;
}
.skill-type .skill-info .info {
  font-size: 13px;
  font-weight: 600;
  color: #a19fad;
}
.details {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  /* height: 0; */
  padding: 0 20px;
  transition: all 0.3s ease-out;
  /* background-color: aquamarine; */
  overflow: hidden;
}
.details .skill-item {
  flex: 1;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  margin-top: 12px;
}
.details .skill-item .info-box {
  width: 100%;
}
.details .skill-item .info {
  margin-left: 20px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  line-height: 24px;
}
.details .skill-item .info .name {
  font-size: 15px;
  font-weight: 500;
}
</style>