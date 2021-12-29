<template>
  <div id="collection_details" class="flex">
    <div class="flex flex-col w-1/4 mr-4 shadow-md p-4 bg-white">
      <div class="flex justify-between">
        <router-link :to="{ name: 'browse-collections' }" class="text-blue-800 mb-4">
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
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379
                    5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
            />
          </svg>
        </a>
      </div>
      <div class="flex flex-col justify-between bg-white">
        <img class v-bind:src="'/static/imls/collections/1.jpeg'" alt="Collection Photo" />
        <p class="m-1">VIVA</p>
        <h3 class="m-1 font-bold text-base">Art History</h3>
        <p class="m-1 font-bold text-base">12 resources | Higher Ed</p>
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
      <Filters />
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
      <div class="flex items-center">
        <ResourcesList v-bind:database="filteredCourses" />
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "../components/elements/SearchBar.vue";
import ResourcesList from "../components/resourse/ResourcesList.vue";
import Button from "../components/elements/Button.vue";
import Select from "../components/elements/Select.vue";
import Filters from '../components/elements/Filters.vue';
import {ENTRY_POINT} from '../const.js'

export default {
  name: "CollectionDetails",
  components: {
    SearchBar,
    ResourcesList,
    Button,
    Select,
    Filters
  },
  data() {
    return {
      database: [],
      options: [
        { name: "All", id: 1, value: "all" },
        { name: "Last modified", id: 2, value: "last-modified" },
        { name: "Reviews", id: 3, value: "reviews" },
        { name: "Title", id: 4, value: "title" },
        // {name: 'Rating', id: 5, value: 'rating'},
      ],
      // range: [20, 1900],
      filter: 'all',
      searchQuery: ''
    };
  },
  mounted() {
    fetch(ENTRY_POINT)
      .then((response) => response.json())
      .then((json) => {
        this.database = json.courses;
      });
  },
  methods: {
    clickBtn() {
      
    },
  },
  computed: {
    filteredCourses() {
      let filtered;
      if (this.filter === "all") {
        filtered = this.database;
      }

      if (this.searchQuery) {
        const cleanedupQuery = this.searchQuery.trim().toLowerCase();
        filtered = this.database
          .map((el) => el)
          .filter((item) => 
            item.courseTitle.toLowerCase().includes(cleanedupQuery));
      }

    //TODO: Sort filtered base

      if (this.filter === "last-modified") {
        filtered = this.database
          .map((el) => el)
          .sort((a, b) => new Date(b.updated) - new Date(a.updated));
      }

      if (this.filter === "reviews") {
        filtered = this.database
          .map((el) => el)
          .sort((a, b) => b.reviews - a.reviews);
      }

      if (this.filter === "title") {
        filtered = this.database
          .map((el) => el)
          .sort((a, b) => a.courseTitle.localeCompare(b.courseTitle));
      }

      // if (this.filter === 'rating') {
      //   filtered = this.database.map(el => el).sort((a,b) => a.rating - b.rating)
      // }

      return filtered;
    },
  },
};
</script>

<style src='../assets/styles/index.css'></style>
<style lang="postcss">
</style>

