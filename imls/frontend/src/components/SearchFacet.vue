<template>
  <li>
    <div>
      {{name}}
    </div>
    <ul class="list-disk pl-6">
      <search-facet-option
        v-for="option in options"
        :key="option.id"
        @option-clicked="onClick"
        :option="option">
      </search-facet-option>
    </ul>
  </li>
</template>

<script>
  import SearchFacetOption from "./SearchFacetOption.vue";
  export default {
      components: {
          SearchFacetOption
      },
      props: {
          name: { required: true, type: String },
          field_name: { required: true, type: String },
          options: { required: true, type: Object }
      },

      methods: {
          onClick(field_value) {
              this.$emit("facet-clicked", this.field_name, field_value);
          }
      }
  };
</script>

<style>

</style>
