<template>
  <div class>
    <SearchBar v-model="searchQuery" class="mb-15px" />
    <div class="flex">
      <div class="flex flex-col w-1/4 mr-4 shadow-md p-4 bg-white">
        <div class="flex flex-col justify-between bg-white">
          <h5 class="text-base font-bold mb-20px">Filters</h5>

          <div class="flex flex-col justify-between bg-white">
            <form>
              <ul>
                <Filters
                  v-bind:filterTypes="filterMicrositesCurators"
                  filterTitle="Microsite Curators"
                  v-model="categories"
                />
                <Filters
                  v-bind:filterTypes="filterEducationLevels"
                  filterTitle="Education Levels"
                  v-model="educationLevels"
                />
              </ul>
            </form>
          </div>
          <Button
            label="Reset"
            @click="clear"
            class="rounded-lg shadow-sm bg-blue-800 text-center text-white px-2 py-2"
          ></Button>
        </div>
      </div>
      <div class="flex-1">
        <div class="flex items-center mb-2">
          <span class="flex-1">{{ paginated_collections.total }} Resources</span>
          <div class="inline-flex flex-initial gap-x-6 items-center">
            Sort by:
            <Select v-model="filter" :options="options"></Select>
          </div>
        </div>

        <ul class="flex flex-wrap mt-4 gap-4">
          <CollectionItemCard
            v-for="collection in filteredCollections(filter, searchQuery, categories, educationLevels)"
            :key="collection.id + Math.random()"
            v-bind:collection="collection"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from '../elements/SearchBar.vue';
import CollectionItemCard from './CollectionItemCard.vue';
import Select from '../elements/Select.vue';
import Button from '../elements/Button.vue';
import Filters from '../elements/Filters.vue';
import { mapGetters } from 'vuex'

export default {
  name: 'CollectionsSearch',
  components: {
    CollectionItemCard,
    Select,
    Button,
    Filters,
    SearchBar
  },
  data() {
    return {
      options: [
        { name: "Newest", id: 2, value: "last-modified" },
        { name: "Most Popular", id: 3, value: "reviews" },
      ],
      active: false,
      activeEducation: false,
      filter: 'last-modified',
      searchQuery: '',
      categories: [],
      educationLevels: [],
    }
  },
  methods: {
    toggle() {
      this.active = !this.active
    },
    toggleEducation() {
      this.activeEducation = !this.activeEducation
    },
    clear() {
      this.searchQuery = '';
      this.filter = 'last-modified';
      this.categories = [];
      this.educationLevels = [];
    }
  },
  computed: {
    paginated_collections() {
      return this.$store.state.paginated_collections
    },
    //TODO: Use all list of microsites OR only that have resources?
    filterMicrositesCurators() {
      return [...new Set(this.$store.state.microsites.map(el => el.name))]
    },
    filterEducationLevels() {
      return [...new Set(this.$store.state.paginated_collections.collections.map(el => el.educationLevel))]
    },
    ...mapGetters(["filteredCollections"])
  },
}
</script>

<style lang="postcss">
.u-hidden {
  display: none !important;
}

.is-collapsed .checkbox-item:nth-child(n + 10) {
  display: none;
}
</style>