<template>
  <div id="micrositeSpecificCollections" class>
    <router-link :to="{ name: 'browse-collections' }" class="text-blue-800 mb-15px">
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
      </svg>Back to Browse page
    </router-link>
    <h1 class="font-bold mb-4 mt-4">{{database[0].micrositeTitle}} Collections</h1>
    <div class="flex-1">
      <SearchBar v-model="searchQuery" class="mb-15px" />
      <div class="flex items-center mb-2">
        <span class="flex-1">{{database.length}} Collections</span>
        <ul class="inline-flex flex-initial gap-x-6 items-center">
          <li>
            Sort by:
            <Select v-model="filter" :options="options"></Select>
          </li>
        </ul>
      </div>
    </div>
    <ul class="flex flex-wrap mt-4 gap-4">
      <CollectionItemCard
        v-for="(collection, index) in filteredCourses"
        :key="index"
        v-bind:collection="collection"
      />
    </ul>
  </div>
</template>

<script>
import SearchBar from '../components/elements/SearchBar.vue';
import CollectionItemCard from '../components/collection/CollectionItemCard.vue';
import Select from "../components/elements/Select.vue";
import { ENTRY_POINT } from '../const.js'


export default {
  name: 'MicrositeSpecificCollections',
  components: {
    SearchBar,
    CollectionItemCard,
    Select
  },
  props: ['id'],
  data() {
    return {
      database: [],
      options: [
        { name: "Newest", id: 2, value: "last-modified" },
        { name: "Most Popular", id: 3, value: "reviews" },
      ],
      filter: 'last-modified',
      searchQuery: '',
      //id: this.$route.params.id
    }
  },
  mounted() {
    fetch(ENTRY_POINT)
      .then(response => response.json())
      .then(json => {
        this.database = json.collections.filter(el => el.id === this.id)
      })
  },
  computed: {
    filteredCourses() {
      let filtered;
      if (this.filter === "last-modified") {
        filtered = this.database
          .map((el) => el)
          .sort((a, b) => new Date(b.updated) - new Date(a.updated));
      }

      if (this.searchQuery) {
        const cleanedupQuery = this.searchQuery.trim().toLowerCase();
        filtered = this.database
          .map((el) => el)
          .filter((item) =>
            item.courseTitle.toLowerCase().includes(cleanedupQuery));
      }

      //TODO: Sort filtered base

      if (this.filter === "reviews") {
        filtered = this.database
          .map((el) => el)
          .sort((a, b) => b.reviews - a.reviews);
      }

      return filtered;
    },
  },
}
</script>

