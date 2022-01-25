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
                <Filters
                  v-bind:filterTypes="filterMaterialTypes"
                  filterTitle="Material Types"
                  v-model="materialTypes"
                />
                <Filters
                  v-bind:filterTypes="filterMediaFormats"
                  filterTitle="Media Formats"
                  v-model="mediaFormats"
                />
                <Filters
                  v-bind:filterTypes="filterLicenseTypes"
                  filterTitle="License Types"
                  v-model="licenseTypes"
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
          <span class="flex-1">5555 Resources</span>
          <div class="inline-flex flex-initial gap-x-6 items-center">
            Sort by:
            <Select v-model="filter" :options="options"></Select>
          </div>
        </div>
        <ul class>
          <ResourcesItemCard
            v-for="course in filteredCourses(filter, searchQuery, categories, educationLevels, materialTypes, mediaFormats, licenseTypes)"
            :key="course.site + Math.random()"
            v-bind:course="course"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from '../elements/SearchBar.vue';
import ResourcesItemCard from '../resourse/ResourcesItemCard.vue';
import Select from '../elements/Select.vue';
import Button from '../elements/Button.vue';
import Filters from '../elements/Filters.vue';
import { mapGetters } from 'vuex'

export default {
  name: 'ResourcesSearch',
  components: {
    ResourcesItemCard,
    Select,
    Button,
    Filters,
    SearchBar
  },
  data() {
    return {
      options: [
        { name: "All", id: 1, value: "all" },
        { name: "Last modified", id: 2, value: "last-modified" },
        { name: "Reviews", id: 3, value: "reviews" },
        { name: "Title", id: 4, value: "title" },
        // {name: 'Rating', id: 5, value: 'rating'},
      ],
      active: false,
      activeEducation: false,
      filter: 'all',
      searchQuery: '',
      categories: [],
      educationLevels: [],
      materialTypes: [],
      mediaFormats: [],
      licenseTypes: []
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
      this.filter = 'all';
      this.categories = [];
      this.educationLevels = [];
      this.materialTypes = [];
      this.mediaFormats = [];
      this.licenseTypes = [];
    }
  },
  computed: {
    courses() {
      return this.$store.state.courses;
    },
    //TODO: Use all list of microsites OR only that have resources?
    filterMicrositesCurators() {
      return [...new Set(this.$store.state.microsites.map(el => el.name))]
    },
    filterEducationLevels() {
      return [...new Set(this.$store.state.courses.map(el => el.level))]
    },
    filterMaterialTypes() {
      return [...new Set(this.$store.state.courses.map(el => el.materialType))]
    },
    filterMediaFormats() {
      return [...new Set(this.$store.state.courses.map(el => el.mediaFormat))]
    },
    filterLicenseTypes() {
      return [...new Set(this.$store.state.courses.map(el => el.licenseType))]
    },
    ...mapGetters(["filteredCourses"])
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