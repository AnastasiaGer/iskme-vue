<template>
  <div class="flex flex-col">
    <div class="max-w-lg py-4 px-4 bg-white shadow-md rounded-lg overflow-hidden mx-auto">
      <h3 class="text-gray-700 font-semibold text-1xl tracking-wide mb-2">
        {{who}} added "{{what}}" collection
      </h3>
      <div class="flex flex-row">
        <img class="card_img object-cover"
             :src="img_url"/>
        <div class="ml-4 flex flex-col">
          <h4 class="text-m font-semibold mb-3">112 Resources</h4>
          <ul class="flex-1 text-sm text-gray-500">
            <li v-for="resource in resources" :key="resource.id">{{resource[0]}} {{resource[1]}}</li>
          </ul>
          <div class="text-sm text-gray-500">{{subscribed}} Subscribed Microsites</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
      props: {
          who: {required: true, type: String},
          what: {required: true, type: String},
          img_url: {required: true, type: String},
          resources: {required: true, type: Array},
          subscribed: {required: true, type: Number}
      }
  };
</script>

<style lang="postcss">
  img.card_img {
      width: 300px;
      height: 200px;
  }
</style>
