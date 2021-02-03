<template>
  <div class="about">
    <headerText header="About this project"> </headerText>
    <router-link to="/#">Go back to the cool stuff</router-link>
    <div class="about-content">
      <p>
        This project is made by me, Cathy, for a school project using Vue.js. I
        used an API with data from the NASA JPL Asteroid team. Please, keep in
        mind that I have 0 knowledge about space, so some of the information
        might be presented in a incorrect way. <br />
        How size was determined on illustrations:
      </p>
      <div class="about-box">
        <img src="../assets/happy-small.png" alt="" />
        <p>
          <span>Small asteroids:</span> Minimun diameter had to be under 25
          meters
        </p>
      </div>
      <div class="about-box">
        <img src="../assets/happy-medium.png" alt="" />
        <p>
          <span>Medium asteroids:</span> Minimum diameter had to be between
          25-100 meters
        </p>
      </div>
      <div class="about-box">
        <img src="../assets/happy-big.png" alt="" />
        <p>
          <span>Large asteroids:</span> Minimum diameter had to be atleast 100
          meters
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import headerText from "@/components/headerText.vue";
export default {
  name: "about",
  components: {
    headerText,
  },
};
</script>
<style scoped>
</style>