<template>
  <div class="box-border overflow-hidden p-0 list-none mx-0 my-auto mb-25px">
    <ul
      class="flex space-between mb-25px ease duration-300"
      :style="{ 'margin-left': '-' + 100 * currentSlideIndex + '%' }"
    >
      <CollectionItemCard
        v-for="(collection, index) in this.collections"
        :key="index"
        v-bind:collection="collection"
      />
    </ul>
    <div class="mx-0 my-auto flex">
      <Button @click="prevSlide" label="Previous"/>
      <Button @click="nextSlide" label="Next"/>
    </div>
  </div>
</template>

<script>
import CollectionItemCard from "./CollectionItemCard.vue";
import Button from '../elements/Button.vue'

export default {
  name: "CollectionList",
  props: ["collections"],
  components: {
    CollectionItemCard,
      Button
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
      if (this.currentSlideIndex >= this.collections.length - 10) {
        this.currentSlideIndex = 0;

      } else {
        this.currentSlideIndex++;
      }
    },
  },
};
</script>

<style>
</style>
