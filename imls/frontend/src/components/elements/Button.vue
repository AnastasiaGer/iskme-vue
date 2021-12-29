<template>
  <div class="inline-block bg-white font-bold rounded-lg shadow-sm
              px-6 py-2 border-2 border-stone-800 mr-10px">
    <button @click="click">{{ label }}</button>
  </div>
</template>

<script>
export default {
  name: "Button",
    props: {
        label: {
            type: String,
            default: 'Press'
        }
    },
  methods: {
    click() {
      this.$emit('click')
    },
  },
}


</script>

<style>
</style>
