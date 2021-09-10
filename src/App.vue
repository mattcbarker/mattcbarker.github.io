<template>
  <div id="app">
    <billboard id="c" />
    <experience class="box" />
    <skills class="box" />
    <tinkerings class="box" />
    <graphics class="box" />
    <education class="box" />
  </div>
</template>

<script>
import billboard from "./components/billboard.vue";
import experience from "./components/experience.vue";
import skills from "./components/skills.vue";
import graphics from "./components/graphics.vue";
import education from "./components/education.vue";
import tinkerings from "./components/tinkerings.vue";
//import contact from "./components/contact.vue";


export default {
  name: "App",
  components: {
    billboard,
    experience,
    skills,
    graphics,
    education,
    tinkerings
    
  },
}
</script>

<style>
#app {
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 1em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #a6c5ea;
  background-color: #4c5a6b;
}
.box {
  padding: 1em;
}
.m {
  margin-bottom: 5px;
}
html {
  background-color: #4c5a6b;
}
.paragraphBox:nth-child(odd) {
  background-color:#345680;
}
.paragraphBox:nth-child(even) {
 background-color: #2C486B;
}
p{
  font-size: 1.2em;
}
</style>
