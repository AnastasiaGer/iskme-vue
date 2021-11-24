<template>
  <div class="collection-wrapper container-fluid">
    <div class="title-wrapper">
      <h3 class="title">New Collection</h3>
      <a class="sub-title" href="/all-collections">View All collections</a>
    </div>

    <ul class="collection" :style="{ 'margin-left': '-' + 100 * currentSlideIndex + '%' }">
      <ItemCollection
        v-for="(collection, index) in mockData"
        :key="index"
        v-bind:collection="collection"
      />
    </ul>
  </div>
  <button @click="prevSlide">Prev</button>
  <button @click="nextSlide">Next</button>
  <Pagination />
</template>

<script>
import Pagination from "./Pagination.vue";
import ItemCollection from "./ItemCollection.vue";

export default {
  name: "NewCollections",
  props: ["mockData"],
  components: {
    Pagination,
    ItemCollection,
  },
  data() {
    return {
      currentSlideIndex: 0,
    };
  },
  methods: {
    prevSlide() {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--;
      }
    },
    nextSlide() {
      if (this.currentSlideIndex >= this.mockData.length - 10) {
        this.currentSlideIndex = 0;
        console.log(this.currentSlideIndex);
        
      } else {
        this.currentSlideIndex++;
      }

    },
    viewAllHandler() {
      console.log('cgcgcgcg')
    }
  },
};
</script>

<style>
.container-fluid {
  max-width: 1920px;
  margin: 0 auto;
}

.collection-wrapper {
  margin-bottom: 25px;
  box-sizing: border-box;
  list-style: none;
  overflow: hidden;
  margin: 0;
  padding: 0;
  width: 1574px;
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
  transition: all ease 0.5s;
}
</style>
