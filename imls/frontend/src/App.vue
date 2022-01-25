<template>
  <div id="app" role="main" class="box-border flex overflow-x-hidden min-h-300px mx-0 my-auto bg-slate-200 font-sans text-slate-700">
    <tool-bar class="flex-initial"/>
    <router-view class="flex-1"/>
  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';
  import VueAxios from 'vue-axios';
  import ToolBar from "./components/ToolBar.vue";

  //import uniqueId from 'lodash.uniqueid';

  Vue.use(VueAxios, axios);

  export default {
      name: 'App',
      components: {
          ToolBar,
      },
      methods: {

      },
      mounted() {
          this.$store.dispatch('getCollections');
      },
      computed: {
      }
  };
</script>

<style src='./assets/styles/index.css'></style>
<style lang="postcss">
  .btn {
    @apply inline-block font-bold rounded-lg shadow-sm px-6 py-2;
  }

</style>
