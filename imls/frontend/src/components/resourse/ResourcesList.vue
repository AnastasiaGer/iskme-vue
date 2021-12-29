<template>
  <div class="box-border overflow-hidden p-0 list-none max-w-screen mt-0 my-auto mb-25px">
    <ul>
      <ResourcesItemCard
        v-for="(course, index) in database"
        :key="index"
        v-bind:course="course"
      />
    </ul>
  </div>
</template>

<script>
import ResourcesItemCard from "./ResourcesItemCard.vue";

export default {
  name: "ResourcesList",
  props: ["database"],
  components: {
    ResourcesItemCard,
  },
  methods: {

  },
};
</script>

<style>

</style>
