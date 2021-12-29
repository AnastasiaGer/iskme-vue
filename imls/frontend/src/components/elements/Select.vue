<template>
  <select
    v-model="selectedOption"
    @input="event => { $emit('input', event.target.value) }"
    class="rounded-full p-2 text-sm"
  >
    <option selected disabled>{{ defaultOption }}</option>
    <option v-for="option in options" :key="option.id" :value="option.value">{{ option.name }}</option>
  </select>
</template>

<script>
export default {
  name: "Select",
  props: {
    options: {
      type: Array,
    },
  },
  data() {
    return {
      selectedOption: null,
      defaultOption: this.options[0].name
    }
  },
  mounted() {
    this.selectedOption = this.defaultOption
  },

  watch: {
    value: function (newValue) {
      this.selectedOption = newValue
    }
  }
}
</script>
