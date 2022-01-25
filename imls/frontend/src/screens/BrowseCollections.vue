<template>
  <div id="home" class>
    <h1 class="font-bold">Browse</h1>
    <SearchBar class="mb-6" v-model="searchQuery" />
    <div
      v-for="collection_category in collections_by_category"
      :key="collection_category.name"
      class="w-1074px"
    >
      <div class="flex justify-start items-start">
        <h2 class="font-bold mr-20px mb-10px">{{ collection_category.name }}</h2>
        <router-link :to="{ name: 'all-collections' }" class="text-blue-800">View All collections</router-link>
      </div>
      <CollectionList class="mb-30" v-bind:collections="collection_category.collections" />
    </div>

    <div class="flex justify-start items-start">
      <h2 class="font-bold mr-20px mb-10px mt-25px">By Microsite</h2>
    </div>
    <MicrositeCollectionList class="mb-30" v-bind:microsites="microsites" />

    <div class="flex justify-start items-start">
      <h2 class="font-bold mr-20px mb-10px mt-25px">By Education Level</h2>
    </div>
    <EducationCollectionList class="mb-30" v-bind:education_levels="education_levels" />
  </div>
</template>

<script>
import SearchBar from '../components/elements/SearchBar.vue';
import CollectionList from "../components/collection/CollectionList.vue";
import MicrositeCollectionList from "../components/MicrositeCollectionList.vue";
import EducationCollectionList from '../components/EducationCollectionList.vue'

//import DotPaginator from "../components/DotPaginator.vue";
//import uniqueId from 'lodash.uniqueid';


export default {
  name: 'BrowseCollections',
  components: {
    // DotPaginator,
    SearchBar,
    CollectionList,
    MicrositeCollectionList,
    EducationCollectionList
  },
  data() {
    return {
      searchQuery: '',
    }
  },
  
  methods: {

  },
  //TODO: 
  //- filter state for lists: New and Popular
  //- Searchbar

  computed: {
    collections_by_category() {
      return this.$store.state.collections_by_category;
    },

    microsites() {
      return this.$store.state.microsites;
    },
    education_levels() {
      return this.$store.state.collection_count_by_education_level;
    }
  },
};
</script>

<style src='../assets/styles/index.css'></style>