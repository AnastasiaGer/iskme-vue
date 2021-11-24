<template>
  <div v-bind="mockData" class="main-wrapper">
    <Header ></Header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import Header from './Header.vue'
  export default {
    name: 'main-wrapper',
    components: {
      Header
    },
    props: ["mockData"],
    data() {
      return {
        title: 'Main wrapper'
      }
    },
    computed: {},
    methods: {},
    watch: {}
  }
</script>

<style>
  .main-wrapper {
    margin: 0 auto;
  }
</style>