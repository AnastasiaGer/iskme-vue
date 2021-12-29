<template>
  <div
    class="micro_card flex flex-col items-center justify-center
           bg-white shadow rounded-lg">
    <div class="relative h-2/3 w-full overflow-hidden">
      <img :src="cover_img"
           alt=""
           class="absolute top-0 left-0 object-cover">

      <div class="font-bold text-sm absolute bottom-0 w-full text-center text-white text-shadow-lg">
        {{name}}
      </div>
    </div>
    <div class="font-bold text-sm">{{description}}</div>
    <div class="text-sm font-sm">{{collection_count}} Collections</div>
  </div>
</template>

<script>
  export default {
      name: "MicrositeCard",
      props: {
          cover_img: {required: true, type: String},
          name: {required: true, type: String},
          description: {required: true, type: String},
          collection_count: {required: true, type: Number},
      }
  };
</script>

<style lang="postcss">
    .micro_card {
      width: 200px;
      height: 160px;
  }

  .micro_card img {
      xwidth: 100%;
      xheight: 60%;
  }

</style>
