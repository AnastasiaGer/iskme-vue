<template>
  <div>
    Filters:
    <ul>
      <li v-for="(filters,filter_name) in active_filters" :key="filter_name.id"
          class="justify-center my-2 select-none space-y-1 space-x-1">
        <span>{{filter_name}}</span>
        <ul class="flex flex-row space-x-1">
          <li v-for="filter in filters" :key="filter.id"
              class="justify-center my-2 select-none space-y-1 space-x-1">
            <button
              class="h-6 px-3 text-white-100
                     transition-colors duration-150
                     bg-blue-200 rounded-lg
                     focus:shadow-outline hover:bg-blue-800">
              <span class="mr-2">{{labelFor(filter_name, filter)}}</span>
              <span @click="onClick(filter_name, filter)"
                    class="inline-flex items-center justify-center
                           px-2 py-1 text-xs font-bold leading-none
                           text-blue-100 bg-blue-600 rounded-full">X</span>
            </button>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
      props: {
          active_filters: {required: true, type: Object},
          masks: {required: true, type: Object}
      },
      methods: {
          onClick(filter_name, filter_value) {
              this.$emit("filter-removed", filter_name, filter_value);
          },
          labelFor(filter_name, filter_value) {
              if(this.masks[filter_name] != undefined
                 && !this.masks[filter_name]["tags"][filter_value] != undefined) {
                  return this.masks[filter_name]["tags"][filter_value];
              }
              return filter_value;
          }
      }
  };
</script>
