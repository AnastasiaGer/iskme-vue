<template>
  <router-link :to="{ name: 'collection-details', params: { id: collection.id } }">
    <li class="col_card flex flex-col items-center justify-center bg-white shadow rounded-lg mr-15px">
      <div class="relative h-2/3 w-full overflow-hidden">
        <img
          class="absolute top-0 left-0 object-cover"
          v-bind:src="'/static/imls/collections/' + collection.collectionThumbnail"
          alt="Collection Photo"
        />
        <div
          v-if="collection.num_alerts > 0"
          class="font-sans block absolute top-1 left-1 lg:inline-block align-middle text-white text-shadow-lg"
        >
          <div class="relative flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="flex-1 w-7 h-7 fill-current"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16
                    11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
              />
            </svg>
            <span
              class="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm leading-tight text-center"
            >{{ collection.num_alerts }}</span>
          </div>
        </div>

        <div v-if="collection.check" class="block text-blue-500 absolute top-1 right-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline-block h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div v-else class="border-none absolute right-1 top-1 snap-center rounded-full bg-slate-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="20px"
            height="20px"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            class="z-50"
          >
            <g fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1zm1 15a1 1 0 1 1-2 0v-3H8a1 1 0 1 1 0-2h3V8a1 1 0 1 1 2 0v3h3a1 1 0 1 1 0 2h-3v3z"
                fill="#fff"
              />
            </g>
          </svg>
        </div>
        <h4
          class="font-bold text-sm absolute bottom-0 w-full text-center text-white text-shadow-lg"
        >{{ collection.collectionTitle }}</h4>
      </div>

      <p class="font-bold text-sm">{{ collection.micrositeTitle }}</p>
      <p class="text-sm font-sm">{{ collection.resourcesNumber }} resources</p>
    </li>
  </router-link>
</template>

<script>
export default {
  name: "CollectionItemCard",
  props: {
    collection: {
      type: Object,
      required: true
    },
    num_alerts: { type: Number },
    check: { type: Boolean }
  }
}

</script>
