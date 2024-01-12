<template>
  <div class="hello" style="color: #fffc">
    <h1>Hello.</h1>
    <p class="name">My name is CiMu.</p>
    <!-- currently proficient in front-end basic three technologies, can use a variety of component libraries. -->
    <p class="text">
      I'm a frontend engineer, I wrote this website to create a testing area, practice some ideas and take study notes.
    </p>
    <p class="text">
      To verify knowledge, I wrote <a href="https://github.com/didiaohu/50projects50days" target="_blank">50projects50days</a> project, which a collection of small examples of using native ecology to implement features. You can check it out on <a href="https://github.com/CiMu001/50PracticeDemo" target="_blank">GitHub</a>, as well as a <a href="https://github.com/CiMu001/SimpleSearchEngine" target="_blank">simple search engine</a>,  crawlers and search engine technologies are also interesting.
    </p>
    <p class="text">Welcome to <a @click="jumpHome">CIMu's Blog <b-icon icon="egg-fried" style="color: #7952b3; width: 16px; height: 16px;"></b-icon></a></p>
  </div>
</template>

<script>
export default {
  name: 'aboutView',
  methods: {
    jumpHome() {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped lang="scss">
.hello {
  max-width: 800px;
  margin: 64px 128px;
}
h1 {
  font-size: 64px;
  font-weight: 500;
  margin-bottom: 0;
}
p {
  font-size: 16px;
}
.name {
  font-size: 36px;
  font-weight: 500;
  margin: 32px 0;
}
.text {
  font-size: 25px;
  font-weight: 400;
  line-height: 1.5;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  display: inline-block;
  color: #7e70e6;
  text-decoration: none;
  position: relative;
  padding: 0 2px;
}
a::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 32%;
  display: inline-block;
  background-color: #42b98380;
  transition: all .3s;
}
a:hover::before {
  height: 90%;
}
@media (width < 960px) {
  .hello {
    width: 100%;
    margin: 0;
  }
}
</style>
