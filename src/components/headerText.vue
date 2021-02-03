<template>
  <div class="header-text">
    <h1>{{ header }}</h1>
    <h3>{{ message }}</h3>
  </div>
</template>

<script>
export default {
  name: "headerText",
  props: {
    header: String,
    message: String,
  },
};
</script>

<style scoped>
div {
  margin-top: 6em;
}
h3 {
  margin-top: 2em;
}
</style>
