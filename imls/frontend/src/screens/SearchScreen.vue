<template>
  <div class="search flex-1">
    <index-selector :indexes="app_config.indexes"
                    :current_idx="current_idx"
                    @index-selected="changeIndex"></index-selector>
    <h2>Search time: {{search_time}}</h2>
    <h2>Matched Docs: {{search_count}}</h2>
    <search-filters :active_filters="active_facet_filters"
                    :masks="facet_masks"
                    @filter-removed="removeFacetFilter"/>
    <search-bar @search-triggered="doSearch" search_term=""/>
    <div class="flex">
      <div class="bg-gray-200 rounded-lg">
        <div class="inline-flex rounded-lg">
          <input type="radio" name="room_type"
                 id="roomPrivate"
                 :checked="!this.search_resources"
                 hidden/>
          <label for="roomPrivate"
                 v-on:click="switchView('collections')"
                 class="radio text-center
                        self-center py-2 px-4 rounded-lg cursor-pointer
                        hover:opacity-75">
            Collections
          </label>
        </div>
        <div class="inline-flex rounded-lg">
          <input type="radio" name="room_type" id="roomPublic"
                 :checked="this.search_resources"
                 hidden/>
          <label for="roomPublic"
                 v-on:click="switchView('resources')"
                 class="radio text-center self-center py-2 px-4 rounded-lg cursor-pointer hover:opacity-75">
            Resources
          </label>
        </div>
      </div>
    </div>
    <search-screen-resources v-if="search_resources"/>
    <search-screen-collection v-else/>
    <search-filters :active_filters="active_facet_filters"
                    :masks="facet_masks"
                    @filter-removed="removeFacetFilter"/>
  </div>
</template>

<script>
  import SearchBar from '../components/elements/SearchBar.vue';
  import SearchFilters from "../components/SearchFilters.vue";
  import IndexSelector from "../components/IndexSelector.vue";
  import SearchScreenCollection from "./SearchScreenCollection.vue";
  import SearchScreenResources from "./SearchScreenResources.vue";

  //import uniqueId from 'lodash.uniqueid';

  export default {
      name: 'SearchScreen',
      components: {
          SearchBar,
          SearchFilters,
          IndexSelector,
          SearchScreenCollection,
          SearchScreenResources
      },
      methods: {
          async doSearch(term) {
              var query = {"term": term};
              const response = await this.$http.post(this.search_url,
                                                     query);
              this.search_time = response.data.took;
              this.search_count = response.data.hits.total;
              this.search_results = [...response.data.hits.hits].slice(0);
              this.initFacets(response.data.facets);
          },

          removeFacetFilter(facet, facet_value) {
              console.log("Removing filter:",facet,facet_value);
              this.active_facet_filters[facet].delete(facet_value);
              if(this.active_facet_filters[facet].size == 0) {
                  delete this.active_facet_filters[facet];
              }
              this.active_facet_filters.__ob__.dep.notify();
              this.doSearch();
          },

          addFacetFilter(facet, facet_value) {
              if(!(facet in this.active_facet_filters)) {
                  this.active_facet_filters[facet] = new Set();
              }
              this.active_facet_filters[facet].add(facet_value);
              this.active_facet_filters.__ob__.dep.notify();
              this.doSearch();
          },

          _addFacetPath(facet, path, option) {
              var p = path.shift();
              if(path.length == 0) {
                  if(facet.options[p] == undefined) {
                      facet.options[p] = option;
                  }
                  else {
                      var opt = facet.options[p];
                      opt["name"] = option["name"];
                      opt["value"] = option["value"];
                      opt["count"] = option["count"];
                  }
              }
              else {
                  if(facet.options[p] == undefined) {
                      facet.options[p] = {"name": p,
                                          "value": p,
                                          "count": 0,
                                          "options": {}};
                  }
                  this._addFacetPath(facet.options[p], path, option);
              }
          },

          initFacets(facets) {
              this.facets = [];
              if(facets == undefined) {
                  return;
              }
              for (let [key, value] of Object.entries(facets)) {
                  if(key == "count") {
                      continue;
                  }
                  var name = key;
                  var masks = {};
                  var sep = "|";

                  if(this.facet_masks[key] != undefined) {
                      name = this.facet_masks[key]["label"];
                      masks = this.facet_masks[key]["tags"];
                  }
                  var facet = {"name": name,
                               "field_name": key,
                               "options": {}}
                  for(let bucket of value.buckets) {
                      var path = bucket.val.split(sep);
                      var last = path[path.length - 1];
                      var label = (masks[last] != undefined) ? masks[last] : last;

                      var facet_option = {"name": label,
                                          "value": bucket.val,
                                          "count": bucket.count,
                                          "options": {}};
                      this._addFacetPath(facet, path, facet_option);
                  }
                  this.facets.push(facet);
              }
          },

          changeIndex(idx) {
              this.current_idx = idx;
              this.doSearch();
          },

          switchView(searchType) {
              this.search_resources = (searchType === "resources");
          },
      },
      mounted() {
          this.doSearch();
      },
      computed: {
          search_url: function() {
              var url = "/imls/search";
              return url;
          }
      },
      data: function () {
          return {
              search_resources: false,
              current_idx: 0,
              search_term: "",
              group_by: "url",
              search_results: [],
              facets: [],
              facet_masks: (this.app_config.mask != undefined) ? this.app_config.mask : {},
              active_facet_filters: {},
              search_time: 0,
              search_count: 0,
              agg_fields: this.app_config.agg_fields,
              agg_size: 25
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
