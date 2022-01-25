<template>
  <li>
    <router-link
      :to="{ name: 'microsite-specific-collections', params: { id: microsite.id } }"
      class="col_card flex flex-col items-center justify-center bg-white shadow rounded-lg mb-4"
      aria-label="Explore more about microsite"
    >
      <div class="relative h-2/3 w-full overflow-hidden">
        <img class="absolute top-0 left-0 object-cover" :src="microsite.cover_img" :alt="microsite.name" />
        <h3
          class="font-bold text-sm absolute bottom-0 w-full text-center text-white text-shadow-lg"
          role="heading"
        >{{ microsite.name }}</h3>
      </div>

      <div>
        <p class="text-sm text-center">Education level</p>
        <p class="text-sm text-center">{{ microsite.num_collections }} Collections</p>
      </div>
    </router-link>
  </li>
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