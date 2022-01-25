import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueRouter from "vue-router";
import App from "./App.vue";
import { routes } from "./const";
import("@/assets/styles/index.css");

const configElement = document.getElementById("config");
const config = JSON.parse(configElement.innerHTML);

Vue.config.productionTip = false;
Vue.prototype.app_config = config;
Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    collections_by_category: [],
    microsites: [],
    collection_count_by_education_level: [],
    courses: [],
    //TODO: this needs to be an object that can hold the current
    // page number, current search terms, facets etc..
    paginated_collections: {
      total: 0,
      page: 0,
      collections: []
    },
  },
  mutations: {
    setAllCollections(state, collections) {
      state.collections_by_category = collections;
    },

    setMicrosites(state, microsites) {
      state.microsites = microsites;
    },

    setCountByEducationLevel(state, by_ed_level) {
      state.collection_count_by_education_level = by_ed_level;
    },

    setCourses(state, courses) {
      state.courses = courses;
    },

    setSearchResults(state, search_results) {
      //     //TODO: this needs to be thought through.. need to maintain state wrt to search/filters
      //     state.paginated_collections.total = search_result.total;
      //     state.paginated_collections.page = search_result.page;
      state.paginated_collections.total = search_results.total;
      state.paginated_collections.page = search_results.page;
      state.paginated_collections.collections = search_results.collections;
    },
  },
  actions: {
    async getCollections({ commit }) {
      let result = await axios.get("/imls/browse");
      var my_collections = result.data.collections_by_category;
      var microsites = result.data.microsites;
      var by_ed_level = result.data.collection_count_by_education_level;
      var search_results = result.data.search_results;
      let courses = result.data.courses;
      console.log(result.data);
      commit("setAllCollections", my_collections);
      commit("setMicrosites", microsites);
      commit("setCountByEducationLevel", by_ed_level);
      commit("setSearchResults", search_results);
      commit("setCourses", courses);
    },
  },
  getters: {
    filteredCollections: (state) => (filter, searchQuery, categories, educationLevels) => {
      const cleanedupQuery = searchQuery.trim().toLowerCase();
      let filteredCollections = []

      filteredCollections = state.paginated_collections.collections
        .map((el) => el)
        .filter(x => {
          return categories.length == 0 || categories.indexOf(x.micrositeTitle.toString()) != -1
        })
        .filter(x => {
          return educationLevels.length == 0 || educationLevels.indexOf(x.educationLevel.toString()) != -1
        })
        .filter(x => {
          return searchQuery.length == 0 || x.collectionTitle.toLowerCase().includes(cleanedupQuery)
        })

      let sorted = []

      if (filter === "last-modified") {
        sorted = filteredCollections
          .map((el) => el)
          .sort((a, b) => new Date(b.updated) - new Date(a.updated));
      } else if (filter === "reviews") {
        sorted = filteredCollections
          .map((el) => el)
          .sort((a, b) => b.reviews - a.reviews);
      }

      return sorted;
    },
    filteredCourses: (state) => (filter, searchQuery, categories, educationLevels, materialTypes, mediaFormats, licenseTypes) => {
      const cleanedupQuery = searchQuery.trim().toLowerCase();
      let filteredCourses = []

      filteredCourses = state.courses
        .map((el) => el)
        .filter(x => {
          return categories.length == 0 || categories.indexOf(x.site.toString()) != -1
        })
        .filter(x => {
          return educationLevels.length == 0 || educationLevels.indexOf(x.level.toString()) != -1
        })
        .filter(x => {
          return materialTypes.length == 0 || materialTypes.indexOf(x.materialType.toString()) != -1
        })
        .filter(x => {
          return mediaFormats.length == 0 || mediaFormats.indexOf(x.mediaFormat.toString()) != -1
        })
        .filter(x => {
          return licenseTypes.length == 0 || licenseTypes.indexOf(x.licenseType.toString()) != -1
        })
        .filter(x => {
          return searchQuery.length == 0 || x.courseTitle.toLowerCase().includes(cleanedupQuery)
        })

      let sorted = []
      if (filter === "all") {
        sorted = filteredCourses
      } else if (filter === "last-modified") {
        sorted = filteredCourses
          .map((el) => el)
          .sort((a, b) => new Date(b.updated) - new Date(a.updated));
      } else if (filter === "reviews") {
        sorted = filteredCourses
          .map((el) => el)
          .sort((a, b) => b.reviews - a.reviews);
      } else if (filter === "title") {
        sorted = filteredCourses
          .map((el) => el)
          .sort((a, b) => a.courseTitle.localeCompare(b.courseTitle));
      }
      // if (this.filter === 'rating') {
      //   filtered = this.database.map(el => el).sort((a,b) => a.rating - b.rating)
      // }
      return sorted;
    },
  },
});

const router = new VueRouter({
  routes: routes,
});

new Vue({
  store: store,
  router: router,
  render: (h) => h(App),
}).$mount("#app");