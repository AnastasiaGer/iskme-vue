<template>
  <div class="box-border overflow-y-hidden w-1250px p-0 list-none mx-0 my-auto mb-25px overflow-hidden"
  >
    <ul
      v-bind:class="{ 'is-collapsed': collapsed, 'collections-sum': true }"
      class="flex flex-wrap gap-4 mb-25px"
      >
        <MicrositeItemCard
          v-for="(microsite, index) in microsites"
          :key="index"
          v-bind:microsite="microsite"
          class="microsite-item-card"
        />
    </ul>
    <button type="button"
      v-bind:class="{ 'u-hidden': !collapsed }"
      v-on:click="collapsed = !collapsed"
      class="text-blue-800 font-bold text-center mb-25px"
    >Show all</button>
    <button type="button"
      v-bind:class="{ 'u-hidden': collapsed }"
      v-on:click="collapsed = !collapsed"
      class="text-blue-800 font-bold text-center mb-25px"
    >Show less</button>
  </div>
</template>

<script>
import MicrositeItemCard from "./MicrositeItemCard.vue";

export default {
  name: "MicrositeCollectionList",
  props: ["microsites"],
  components: {
    MicrositeItemCard,
  },
  data() {
    return {
      collapsed: false
    }
  },
  mounted() {
    if (('.collections-sum .microsite-item-card').length > 10) {
      this.collapsed = true
    }
  }
};
</script>

<style>
.u-hidden {
  display: none !important;
}

.is-collapsed .microsite-item-card:nth-child(n + 10) {
  display: none;
}
</style>
