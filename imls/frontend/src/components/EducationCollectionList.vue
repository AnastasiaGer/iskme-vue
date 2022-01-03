<template>
  <div class="box-border overflow-y-hidden w-1250px h-530px p-0 list-none mx-0 my-auto mb-25px">
    <ul class="flex flex-wrap mb-25px">

      <li v-for="education_level in education_levels"
          v-bind:key="education_level.id"
          class="box-border flex flex-col space-y-4 w-234px h-200px
                 px-15px py-20px mr-15px mb-25px bg-white block shadow-md font-bold">
        {{education_level.name}}
        <ul class="flex flex-col space-y-4 font-normal list-disc">
          <li v-for="level in education_level.levels" v-bind:key="level.name">{{level}}</li>
        </ul>
        <span>{{education_level.num_collections}} Collections</span>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "EducationCollectionList",
  props: ["education_levels"],
  components: {

  },
  methods: {
  },
};
</script>

<style>
</style>
