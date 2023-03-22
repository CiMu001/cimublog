<template>
  <div class="hello">
    <h1>Hello.</h1>
    <p class="name">My name is CiMu.</p>
    <!-- currently proficient in front-end basic three technologies, can use a variety of component libraries. -->
    <p class="text">
      I'm a front-end rookie trying to get strong, I had a special internship experience, which made me decide the direction of my current focus on front-end, and also made me realize the importance of mastering basic front-end technology, by self-study deepened my understanding of HTML, CSS, JavaScript and Vue.JS.
    </p>
    <p class="text">
      To verify the results of learning, I wrote the <a href="https://github.com/didiaohu/50projects50days" target="_blank">50projects50days</a> project, which had many functions implemented by original JS, and exercised DOM operation and programming ability. You can check it out on <a href="https://github.com/CiMu001/50PracticeDemo" target="_blank">GitHub</a>, as well as a <a href="https://github.com/CiMu001/SimpleSearchEngine" target="_blank">simple search engine</a> and <a href="https://github.com/CiMu001/shopping-website-vue" target="_blank">Vipshop imitation projects</a>.
    </p>
    <p class="text">Finally, welcome to <a href="/">my blog <b-icon icon="egg-fried" style="color: #7952b3; width: 16px; height: 16px;"></b-icon></a></p>
  </div>
</template>

<script>
export default {
  name: 'aboutView',
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
  color: #000;
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
