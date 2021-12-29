<template>
  <div class="flex">
    <div class="w-9/12">
      <div class="relative text-gray-800 focus-within:text-gray-400">
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <button class="border-none p-1 focus:outline-none focus:shadow-outline">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              class="w-6 h-6"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </span>
        <input
          type="search" name="search" autocomplete="off"
          class="w-full py-2 border-none shadow-md text-sm text-white bg-white rounded-full pl-10 focus:outline-none focus:bg-gray-200 focus:text-gray-900"
          placeholder="Search Collection"
          @input="event => { $emit('input', event.target.value) }"
          v-model="searchQuery"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      searchQuery: ''
    }
  },
  mounted() {
    this.searchQuery = ''
  },

  watch: {
    value: function (newSearchQuery) {
      this.searchQuery = newSearchQuery
    }
  }
};
</script>
