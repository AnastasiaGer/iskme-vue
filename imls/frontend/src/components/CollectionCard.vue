<template>
  <div class="col_card flex flex-col items-center justify-center bg-white shadow rounded-lg">
    <div class="relative h-2/3 w-full overflow-hidden">
      <img :src="cover_img" alt class="absolute top-0 left-0 object-cover" />

      <div
        v-if="num_alerts > 0"
        class="font-sans block absolute top-1 left-1 lg:inline-block align-middle text-white text-shadow-lg hover:text-gray-700"
      >
        <a href="#" role="button" class="relative flex">
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
          >{{ num_alerts }}</span>
        </a>
      </div>

      <div v-if="check" class="block text-blue-500 absolute top-1 right-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="inline-block h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586
                   7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div
        class="font-bold text-sm absolute bottom-0 w-full text-center text-white text-shadow-lg"
      >{{ name }}</div>
    </div>
    <div class="font-bold text-sm">{{ microsite }}</div>
    <div class="text-sm font-sm">{{ resource_count }} resources</div>
  </div>
</template>

<script>
export default {
  name: "CollectionCard",
  props: {
    name: { required: true, type: String },
    cover_img: { required: true, type: String },
    microsite: { required: true, type: String },
    resource_count: { required: true, type: Number },
    num_alerts: { required: true, type: Number },
    check: { required: true, type: Boolean }
  }
};
</script>

<style lang="postcss">
.col_card {
  width: 200px;
  height: 160px;
}

.col_card img {
  xwidth: 100%;
  xheight: 60%;
}
</style>
