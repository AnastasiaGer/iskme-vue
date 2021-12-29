<template>
  <div id="home" class="">
    <h1 class="font-bold">Update Resource Preferences</h1>
  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';
  import VueAxios from 'vue-axios';

  //import uniqueId from 'lodash.uniqueid';

  Vue.use(VueAxios, axios);

  export default {
      name: 'Settings',
      components: {

      },
      methods: {

      },
      mounted() {

      },
      computed: {
      },
      data: function() {
          return {
          }
      }
  };
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 10px;
}
</style>
<style src='../assets/styles/index.css'></style>
<style lang="postcss">
  .btn {
    @apply inline-block font-bold rounded-lg shadow-sm px-6 py-2;
  }

</style>
