<template>
  <b-container class="paragraphBox" id="skillBox">
    <b-row>
      <b-col>
        <h3>tinkerings</h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="mb" v-for="item in tinkerings" :key="item.index">
        <img fluid-grow :src="item.img" :alt="item.alt" />
        <h4>
          <a :href="item.url">{{ item.title }}</a>
        </h4>
        <p>{{ item.desc }}</p>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: "graphics",
  data() {
    return {
      tinkerings: [
        {
          title: "Cat Poetry",
          desc: "Friend requested help for a poetry piece. He wanted a repeatable scrolling text masked by an Image.",
          url: "https://thunder-surf-note.glitch.me/",
          img: "images/catboxsm.png",
          alt: "Moon Render from Blender",
        },
       
      ],
    };
  },
};
</script>
<style scoped>
#skill3d {
  margin: auto;
}
span {
  font-size: 1.2em;
}
</style>
