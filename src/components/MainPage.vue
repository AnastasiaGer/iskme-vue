<template>
  <div v-bind="mockData" class='main-page'>
    <h1>It is a Home Page for Browse collections</h1>
    <p>
      <router-link :to="{name: 'NewCollections'}">
        Go to New Collections
      </router-link>
    </p>
  </div>
</template>

<script>
  export default {
    name: "main-page",
    props: ["mockData"],
    data() {
      return {}
    },
    computed: {}
  }
</script>

<style scoped>
</style>