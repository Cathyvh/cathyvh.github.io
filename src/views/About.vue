<template>
  <div class="about">
    <headerText header="About this project" message="bla bla bla bla">
    </headerText>
    <router-link to="/#">Home</router-link>
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
