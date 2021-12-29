<template>
  <div class="search flex-1">
    <div class="grid grid-cols-4">
      <ul class="space-y-2 pl-6">
        <search-facet v-for="facet in facets"
                      :key="facet.id"
                      :name="facet.name"
                      :field_name="facet.field_name"
                      :options="facet.options"
                      @facet-clicked="addFacetFilter"/>
      </ul>
      <div class="flex flex-wrap col-span-3 content-start">
        <router-link :to="{ name: 'collection-details', params: {id:item.uid} }"
                     v-for="item in search_results" :key="item.id">
          <collection-card name="Name" microsite="Microsite" check="true"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import CollectionCard from '../components/CollectionCard.vue';
  import SearchFacet from "../components/SearchFacet.vue";

  //import uniqueId from 'lodash.uniqueid';

  export default {
      name: 'SearchScreenCollection',
      components: {
          CollectionCard,
          SearchFacet,
      },
      methods: {
      },
      computed: {
      },
      data: function () {
          return {
              current_idx: 0,
              search_term: "",
              search_results: [],
              facets: [],
              facet_masks: (this.app_config.mask != undefined) ? this.app_config.mask : {},
              active_facet_filters: {},
              search_time: 0,
              search_count: 0,
              agg_fields: this.app_config.agg_fields,
              // agg_fields: ["subject", "material_type"]
          }
      }
  };
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 10px;
}
</style>
<style src='../assets/styles/index.css'></style>
<style lang="postcss">
  .btn {
    @apply inline-block font-bold rounded-lg shadow-sm px-6 py-2;
  }

</style>
