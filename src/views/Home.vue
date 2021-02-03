<template>
  <div>
    <headerText
      header="Check out the asteroids that almost killed us"
      message="Pick a date and see what flew by our planet"
    >
    </headerText>
    <router-link to="/about">About</router-link>
    <fetchNeos />
  </div>
</template>

<script>
import fetchNeos from "@/components/fetchNeos.vue";
import headerText from "@/components/headerText.vue";
export default {
  name: "home",
  components: {
    fetchNeos,
    headerText,
  },
};
</script>
