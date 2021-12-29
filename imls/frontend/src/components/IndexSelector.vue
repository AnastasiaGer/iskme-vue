<template>
  <ul class="flex">
    <li class="mr-2" @click="onClick(idx)" v-for="(index, idx) in indexes" :key="index.id">
      <a v-if="idx == current_idx"
         class="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white"
         href="#">
        {{index.name}}
      </a>
      <a v-else
         class="inline-block border border-white rounded
                hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3"
         href="#">
        {{index.name}}
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
      props: {
          indexes: {required: true, type: Array},
          current_idx: {required: true, type: Number},
      },
      methods: {
          onClick(idx) {
              this.$emit("index-selected", idx);
          }
      }
  };
</script>

<style>

</style>
