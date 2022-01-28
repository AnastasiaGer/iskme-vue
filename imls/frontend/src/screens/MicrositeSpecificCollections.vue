<template>
  <div id="micrositeSpecificCollections" class>
    <router-link
      :to="{ name: 'browse-collections' }"
      class="text-blue-800 mb-15px"
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
      </svg>Back to Browse page
    </router-link>
    <h1 class="font-bold mb-4 mt-4">{{ title }} Collections</h1>
    <SearchBar v-model="searchQuery" class="mb-15px" />

    <div class="flex-1">
      <div class="flex items-center mb-2">
        <span
          class="flex-1"
        >{{ collectionsByMicrosite(collectionName, filter, searchQuery).length }} Collections</span>
        <div class="inline-flex flex-initial gap-x-6 items-center">
          Sort by:
          <Select v-model="filter" :options="options"></Select>
        </div>
      </div>

      <ul class="flex flex-wrap mt-4 gap-4">
        <CollectionItemCard
          v-for="collection in collectionsByMicrosite(collectionName, filter, searchQuery)"
          :key="collection.id + Math.random()"
          v-bind:collection="collection"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import SearchBar from '../components/elements/SearchBar.vue';
import CollectionItemCard from '../components/collection/CollectionItemCard.vue';
import Select from "../components/elements/Select.vue";
import { mapGetters } from 'vuex'

export default {
  name: 'MicrositeSpecificCollections',
  props: {
    id: { type: Number },
    title: { type: String },
  },
  components: {
    SearchBar,
    CollectionItemCard,
    Select
  },
  data() {
    return {
      options: [
        { name: "Newest", id: 2, value: "last-modified" },
        { name: "Most Popular", id: 3, value: "reviews" },
      ],
      filter: 'last-modified',
      searchQuery: '',
      collectionName: this.title //TODO: make localStorage for title
      //id: this.$route.params.id
    }
  },
  computed: {
    ...mapGetters(["collectionsByMicrosite"])
  },
}
</script>

<style src='../assets/styles/index.css'></style>