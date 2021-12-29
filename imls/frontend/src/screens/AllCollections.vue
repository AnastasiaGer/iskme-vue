<template>
  <div id="all_collection">
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
    <h1 class="font-bold mb-4 mt-4">All Collections</h1>
    <SearchBar v-model="searchQuery" class="mb-15px" />
    <div class="flex mb-15px">
      <div class="rounded-lg">
        <div class="inline-flex">
          <input type="radio" name="room_type" id="roomPrivate" checked hidden />
          <label
            for="roomPrivate"
            class="bg-white radio text-center font-bold self-center px-6 py-2 rounded-lg border-2 shadow-sm border-stone-800 mr-10px cursor-pointer hover:opacity-75"
          >Collections</label>
        </div>
        <div class="inline-flex">
          <input type="radio" name="room_type" id="roomPublic" hidden />
          <label
            for="roomPublic"
            class="bg-white radio text-center font-bold self-center py-2 px-6 rounded-lg shadow-sm border-2 border-stone-800 mr-10px cursor-pointer hover:opacity-75"
          >Resources</label>
        </div>
      </div>
    </div>
    <div class="flex">
      <div class="flex flex-col w-1/4 mr-4 shadow-md p-4 bg-white">
        <div class="flex flex-col justify-between bg-white">
          <h5 class="text-base font-bold mb-20px">Filters</h5>
          <form>
            <ul>
              <li v-bind:class="{ 'is-collapsed': collapsed, 'checkboxes-sum': true }">
                <div class="flex mb-20px">
                  <p
                    class="font-semibold text-16px text-black relative pointer mr-15px"
                  >Microsite Curators</p>
                  <button @click="toggle" class="outline-hidden">
                    <svg
                      v-if="!active"
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
                          d="M4 9l8 8l8-8"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>
                    <svg
                      v-else
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <g transform="rotate(180 12 12)">
                        <g fill="none">
                          <path
                            d="M4 9l8 8l8-8"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                      </g>
                    </svg>
                  </button>
                </div>

                <div v-if="active" class="flex flex-col flex-nowrap mt-10px">
                  <div
                    v-for="(microsite, index) in microsites"
                    :key="index"
                    v-bind:microsite="microsite"
                    class="checkbox-item mb-10px"
                  >
                    <label class="text-10px text-black pointer">
                      <input type="checkbox" />
                      {{ microsite.name }}
                    </label>
                  </div>
                  <button
                    v-bind:class="{ 'u-hidden': !collapsed }"
                    v-on:click="collapsed = !collapsed"
                    class="text-blue-800 font-bold text-center mb-25px"
                  >Show all</button>
                  <button
                    v-bind:class="{ 'u-hidden': collapsed }"
                    v-on:click="collapsed = !collapsed"
                    class="text-blue-800 font-bold text-center mb-25px"
                  >Show less</button>
                </div>
              </li>

              <li>
                <div class="flex mb-20px">
                  <p
                    class="font-semibold text-16px text-black relative pointer mr-15px"
                  >Education Levels</p>
                  <button @click="toggleEducation" class="outline-hidden">
                    <svg
                      v-if="!activeEducation"
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
                          d="M4 9l8 8l8-8"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>
                    <svg
                      v-else
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <g transform="rotate(180 12 12)">
                        <g fill="none">
                          <path
                            d="M4 9l8 8l8-8"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                      </g>
                    </svg>
                  </button>
                </div>

                <div v-if="activeEducation" class="flex flex-col flex-nowrap mt-ss">
                  <div class="mb-10px">
                    <label class="text-10px text-black pointer">
                      <input type="checkbox" />
                      Preschool
                    </label>
                  </div>
                  <div class="mb-10px">
                    <label class="text-10px text-black pointer">
                      <input type="checkbox" />
                      Lower Primary
                    </label>
                  </div>
                  <div class="mb-10px">
                    <label class="text-10px text-black pointer">
                      <input type="checkbox" />
                      Upper Primary
                    </label>
                  </div>
                  <div class="mb-10px">
                    <label class="text-10px text-black pointer">
                      <input type="checkbox" />
                      Middle School
                    </label>
                  </div>
                  <div class="mb-10px">
                    <label class="text-10px text-black pointer">
                      <input type="checkbox" />
                      High School
                    </label>
                  </div>
                  <div class="mb-10px">
                    <label class="text-10px text-black pointer">
                      <input type="checkbox" />
                      Community College / Lower Division
                    </label>
                  </div>
                  <div class="mb-10px">
                    <label class="text-10px text-black pointer">
                      <input type="checkbox" />
                      College / Upper Division
                    </label>
                  </div>
                  <div class="mb-10px">
                    <label class="text-10px text-black pointer">
                      <input type="checkbox" />
                      Graduate / Professional
                    </label>
                  </div>
                  <div class="mb-10px">
                    <label class="text-10px text-black pointer">
                      <input type="checkbox" />
                      Career Technical
                    </label>
                  </div>
                  <div class="mb-10px">
                    <label class="text-10px text-black pointer">
                      <input type="checkbox" />
                      Adult Education
                    </label>
                  </div>
                </div>
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div class="flex-1">
        <div class="flex items-center mb-2">
          <span class="flex-1">{{ paginated_collections.total }} Recources</span>
          <div class="inline-flex flex-initial gap-x-6 items-center">
            Sort by:
            <Select v-model="filter" :options="options"></Select>
          </div>
        </div>
        <!-- <ul class="inline-flex flex-initial gap-x-6 items-center">
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" class="inline h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
          </svg>
          Filters
        </li>
        <li>
          View
          <svg xmlns="http://www.w3.org/2000/svg" class="inline h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="inline h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
          </svg>
        </li>
        <li>Sort by:
          <select class="rounded-full p-2 text-sm">
            <option value="">Last Modified</option>
            <option value="">Created</option>
          </select>
        </li>
        </ul>-->

        <ul class="flex flex-wrap mt-4 gap-4">
          <CollectionItemCard
            v-for="collection in paginated_collections.collections"
            :key="collection.id"
            v-bind:collection="collection"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from '../components/elements/SearchBar.vue';
import CollectionItemCard from '../components/collection/CollectionItemCard.vue'
import Select from "../components/elements/Select.vue";
//import {ENTRY_POINT} from '../const.js'


export default {
  name: 'AllCollections',
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
      collapsed: false,
      active: false,
      activeEducation: false,
      filter: 'last-modified',
      searchQuery: ''
    }
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
    }
  },
  mounted() {
    this.init()

  },
  computed: {
    paginated_collections() {
      return this.$store.state.paginated_collections
    },
    microsites() {
      return this.$store.state.microsites;
    },
    //TODO: now we have no filtered collections
    // filteredCourses() {
    //   let filtered;
    //   if (this.filter === "last-modified") {
    //     filtered = this.database
    //       .map((el) => el)
    //       .sort((a, b) => new Date(b.updated) - new Date(a.updated));
    //   }

    //   if (this.searchQuery) {
    //     const cleanedupQuery = this.searchQuery.trim().toLowerCase();
    //     filtered = this.database
    //       .map((el) => el)
    //       .filter((item) =>
    //         item.courseTitle.toLowerCase().includes(cleanedupQuery));
    //   }

    //   //TODO: Sort filtered base

    //   if (this.filter === "reviews") {
    //     filtered = this.database
    //       .map((el) => el)
    //       .sort((a, b) => b.reviews - a.reviews);
    //   }

    //   return filtered;
    // },
  },
}
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
