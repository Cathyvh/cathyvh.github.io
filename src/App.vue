<template>
  <div id="app">
    <router-view />
    <footer>
      Made by Cathy, all the data is from the
      <a href="http://neo.jpl.nasa.gov/">NASA JPL Asteroid team </a>
    </footer>
  </div>
</template>

<style>
html,
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  min-height: 100%;
  margin-bottom: -20px;
}
a.router-link-exact-active {
  color: blue;
}
footer {
  margin-top: 20px;
}
</style>
