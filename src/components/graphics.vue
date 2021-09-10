<template>
    <b-container  class="paragraphBox">
    <b-row>
      <b-col>
      <h3>graphic design</h3>
      </b-col>
    </b-row>
    <b-row>
        <b-col  class="mb" v-for="item in images" :key="item.index">
            <img fluid-grow :src="item.img" :alt="item.alt"/>
        </b-col>
    </b-row>
  </b-container>
</template>
<script>
  export default {
  name: "graphics",
  data() {
    return{
      images: [
        {img:"images/moon-render.png", alt:"Moon Render from Blender"},
        {img:"images/excalibursm.png" , alt:"Excalibur"},
        {img:"images/gears.jpg", alt:"Gear Illustration"},
        {img:"images/hrhelpdesk.jpg", alt:"HR Help Desk Concept"},
        {img:"images/seraphim.jpg", alt:"Seraphim Stuidos Logo"},
        {img:"images/troubador.jpg", alt:"Troubador Piano"},
      ]
    }
    
  }
  }
</script>
<style scoped>
.mb{
  margin-bottom:1em;
}
</style>
