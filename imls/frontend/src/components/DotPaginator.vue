<template>
  <ul class="flex gap-1">
    <li v-for="i in pages" :key="i">
      <div class="w-2 h-2 rounded-full"
           :class="colorFor(i)"></div>
    </li>
  </ul>
</template>

<script>
  export default {
      props: {
          page_size: {required: true, type: Number},
          num_results: {required: true, type: Number},
          current: {required: true, type: Number}
      },
      methods: {
          colorFor: function(idx) {
              return (idx == this.current) ? "bg-blue-500" : "bg-gray-500";
          }
      },
      computed: {
          pages() {
              return Math.ceil(this.num_results/this.page_size);
          },
      }
  };
</script>

<style>

</style>
