<template>
  <li>
    <span @click="onClick(option.value)">{{option.name}}</span>
    <span class="ml-1 px-2 text-xs
                 leading-none text-blue-100
                 bg-blue-600 rounded-full">
      {{option.count}}
    </span>
    <ul v-if="option.options" class="pl-6">
      <search-facet-option
        v-for="opt in option.options"
        @option-clicked="onClick"
        :option="opt"
        :key="opt.id"></search-facet-option>
    </ul>
  </li>
</template>

<script>
  export default {
      name: "SearchFacetOption",
      props: {
          option: { required: true, type: Object }
      },

      methods: {
          onClick(field_value) {
              this.$emit("option-clicked", field_value);
          }
      }
  };
</script>

<style>

</style>
