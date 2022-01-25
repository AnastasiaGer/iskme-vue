<template>
  <li v-bind:class="{ 'is-collapsed': collapsed, 'checkboxes-sum': true }">
    <div class="flex mb-20px">
      <p
        class="font-semibold text-16px text-black relative pointer mr-15px"
        :aria-label="filterTitle"
      >{{ filterTitle }}</p>
      <button
        role="button"
        aria-label="Open Microsite Curators list"
        @click="toggle"
        class="outline-hidden"
      >
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
        v-for="(filterType, index) in filterTypes"
        :key="index"
        v-bind:filterType="filterType"
        class="checkbox-item mb-10px"
      >
        <label class="text-10px text-black pointer">
          <input :value="filterType" v-model="model" type="checkbox" />
          {{ filterType }}
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

  <!-- <li class>
          <p class="font-semibold text-16px text-black relative pointer">Publication/Update Date</p>
          <VueSimpleRangeSlider
            style="width: 300px"
            :min="0"
            :max="2000"
            :logarithmic="true"
            v-model="range"
            activeBarColor="#1c62cd"
          />
  </li>-->
</template>

<script>
// import VueSimpleRangeSlider from 'vue-simple-range-slider';
// import 'vue-simple-range-slider/dist/vueSimpleRangeSlider.css'

export default {
  name: 'Filters',
  props: {
    filterTypes: Array,
    filterTitle: String,
    value: Array,
  },
  data() {
    return {
      collapsed: false,
      active: false,
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
  },
  mounted() {
    this.init()
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  // components: {
  //   VueSimpleRangeSlider,
  // },
  // data() {
  //   return {
  //     range: [20, 1900],
  //   }
  // },
};
</script>

<style lang="postcss"></style>
<style lang="postcss">
.u-hidden {
  display: none !important;
}

.is-collapsed .checkbox-item:nth-child(n + 10) {
  display: none;
}
</style>