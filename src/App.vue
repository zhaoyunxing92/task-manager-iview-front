<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'task-app'
  }
</script>

<style>
  html, body {
    background: #eee;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*color: #2c3e50;*/
  }
  .menu-item-right{
    float: right !important;
  }
</style>
