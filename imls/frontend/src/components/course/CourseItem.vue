<template>
  <div class="shadow-md list-none">
    <router-link :to="{ name: 'collection-details', params: {id: collection.id} }" class="text-blue-800 mb-4">
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
      </svg>Back to Collection Details
    </router-link>COURSE Full
  </div>
</template>

<script>
export default {
  props: {
    collection: {
      type: Object,
      required: true
    }
  }
}

</script>

<style>
</style>
