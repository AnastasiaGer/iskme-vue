<template>
  <div class="collection-wrapper container-fluid">
    <div class="title-wrapper">
      <h3 class="title">New Collection</h3>
      <a class="sub-title" href="#">View All collections</a>
    </div>

    <ul class="collection">
      <ItemCollection 
      v-for="(collection, index) in mockData" :key="index"
      v-bind:collection="collection"/>
    </ul>
  </div>
  <Pagination />
</template>

<script>
import Pagination from './Pagination.vue'
import ItemCollection from './ItemCollection.vue'

export default {
  name: 'NewCollections',
  props: ['mockData'],
  components: {
    Pagination,
    ItemCollection
  }
}
</script>

<style>
.container-fluid {
  max-width: 1920px;
  margin: 0 auto;
}

.collection-wrapper {
  margin-bottom: 25px;
}

.title-wrapper {
  display: flex;
  justify-content: start;
  align-items: flex-start;
}
.title {
  font-style: bold;
  margin-right: 20px;
  margin-bottom: 10px;
}
.sub-title {
  color: darkblue;
}

.collection {
  display: flex;
  justify-content: space-between;
  list-style: none;
}
</style>