<template>
  <div id="collection_details" class="flex">
    <div class="flex flex-col w-1/4 mr-4 shadow-md p-4 bg-white">
      <div class="flex justify-between">
        <router-link
          :to="{ name: 'browse-collections' }"
          class="text-blue-800 mb-4"
          aria-label="Go Back to Browse Collections page"
        >
          <svg
            class="inline-block mr-2"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path
                d="M11 5l-7 7l7 7"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4 12h16"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>Back
        </router-link>
      </div>
      <div class="flex flex-col justify-between bg-white">
        <img
          class
          v-bind:src="'/static/imls/collections/' + collectionThumbnail"
          :alt="collectionTitle"
        />
        <p class="m-1">{{ micrositeTitle }}</p>
        <h3 class="m-1 font-bold text-base">{{ collectionTitle }}</h3>
        <p class="m-1 font-bold text-base">{{ resourcesNumber }} resources | {{ educationLevel }}</p>
        <p class="m-1 font-bold text-base">Created May 2020 | 6 Subscribers</p>
        <Button
          label="Add Collection to site"
          @click="clickBtn"
          class="rounded-lg shadow-sm bg-blue-800 text-center text-white px-2 py-2"
        ></Button>
        <a href="#" class="text-blue-600 m-1">
          Read More About This Collection
          <svg
            class="inline-block mr-2"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path
                d="M8 4l8 8l-8 8"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </a>
        <p class="m-1">75% of collection / (9) Resources are not in your library</p>
      </div>
      <h5 class="text-base font-bold">Filters</h5>
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

    <div class="flex-1">
      <SearchBar v-model="searchQuery" />
      <div class="flex items-center mb-2">
        <span class="flex-1">12 Recources</span>
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
</template>

<script>
import SearchBar from "../components/elements/SearchBar.vue";
import ResourcesItemCard from "../components/resourse/ResourcesItemCard.vue";
import Button from "../components/elements/Button.vue";
import Select from "../components/elements/Select.vue";
import Filters from '../components/elements/Filters.vue';
import { mapGetters } from 'vuex'

export default {
  name: "CollectionDetails",
  props: {
    collection: {
      type: Object,
      required: true
    },
    collectionId: { type: Number },
    collectionThumbnail: { type: String },
    collectionTitle: { type: String },
    micrositeTitle: { type: String },
    resourcesNumber: { type: Number },
    educationLevel: { type: String },
  },
  components: {
    SearchBar,
    ResourcesItemCard,
    Button,
    Select,
    Filters
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
      // range: [20, 1900],
      filter: 'all',
      searchQuery: '',
      categories: [],
      educationLevels: [],
      materialTypes: [],
      mediaFormats: [],
      licenseTypes: []
    };
  },
  methods: {
    init() {
      if (('.checkboxes-sum .checkbox-item').length > 10) {
        this.collapsed = true
      }
    },
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
  mounted() {
    this.init()
  },
  computed: {
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
};
</script>

<style src='../assets/styles/index.css'></style>
<style lang="postcss">
.u-hidden {
  display: none !important;
}

.is-collapsed .checkbox-item:nth-child(n + 10) {
  display: none;
}
</style>