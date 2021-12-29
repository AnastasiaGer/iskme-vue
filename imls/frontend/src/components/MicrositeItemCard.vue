<template>
  <router-link :to="{ name: 'microsite-specific-collections', params: { id: microsite.id } }">
    <li
      class="col_card flex flex-col items-center justify-center bg-white shadow rounded-lg mb-4"
    >
      <div class="relative h-2/3 w-full overflow-hidden">
        <img
          class="absolute top-0 left-0 object-cover"
          :src="microsite.cover_img"
          alt="Microsite Photo"
        />
        <h4
          class="font-bold text-sm absolute bottom-0 w-full text-center text-white text-shadow-lg"
        >{{ microsite.name }}</h4>
      </div>

      <div>
        <p class="font-bold text-sm">{{microsite.num_collections}} Collections</p>
      </div>
    </li>
  </router-link>
</template>

<script>
export default {
  name: 'MicrositeItemCard',
  props: {
    microsite: {
      type: Object,
      required: true
    },
  }
}

</script>
