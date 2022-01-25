<template>
  <div id="all_collection">
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
    <h1 class="font-bold mb-4 mt-4">All Collections</h1>
    <div>
      <button
        v-for="tab in tabs"
        v-bind:key="tab.name"
        v-bind:class="['tab-button', { active: currentTab.name === tab.name }]"
        v-on:click="currentTab = tab"
      >{{ tab.name }}</button>

      <component v-bind:is="currentTab.component"></component>
    </div>
  </div>
</template>



<script>

import CollectionsSearch from '../components/collection/CollectionsSearch.vue';
import ResourcesSearch from '../components/resourse/ResourcesSearch.vue';
var tabs = [
  {
    name: "Collections",
    component: CollectionsSearch
  },
  {
    name: "Resources",
    component: ResourcesSearch
  },
];

export default {
  name: 'AllCollections',
  data() {
    return {
      tabs: tabs,
      currentTab: tabs[0]
    }
  },
}
</script>

<style>
.tab-button {
  padding: 0.5em 2em;

  border: 1px solid #ccc;
  cursor: pointer;
  background: #ffffff;
  margin-bottom: 25px;
  margin-right: 10px;
  font-weight: bold;
  border-radius: 15px;
}
.tab-button:hover {
  background: #0e6b22;
  color: #ffffff;
}
.tab-button.active {
  background: #149234;
  color: #ffffff;
}
</style>