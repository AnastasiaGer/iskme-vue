<template>
  <div class="relative">
    <div class="p-6 bg-white rounded-xl shadow-md space-x-4 -top-8 -left-4">
      <div>
        <div class="text-xl font-medium text-black">
          <a :href="result.url" target="_blank">{{result.doclist.docs[0].title}}</a>
          <span class="ml-1 px-2 text-xs
                 leading-none text-blue-100
                 bg-blue-600 rounded-full">
            {{result.doclist.numFound}}
          </span>
        </div>
        <div class="text-sm">
          {{result.doclist.docs[0].url}}
        </div>
        <p class="text-gray-500 line-clamp-3">{{result.doclist.docs[0].abstract}}</p>
      </div>
      <ul class="list-reset flex">
        <li v-for="format in result.doclist.docs[0].media_formats" :key="format.id"
            class="mr-3">
          <span
            class="inline-block border border-blue-100 rounded py-1 px-3 bg-blue-100 text-black">
            {{format}}
          </span>
        </li>
      </ul>
      <div>Modified: {{result.doclist.docs[0].modified_date}}</div>
      <div>Published: {{result.doclist.docs[0].entry_date}}</div>
    </div>
  </div>
</template>

<script>
  export default {
      props: {
          result: { required: true, type: Object }
      },
      computed: {

      }
  };
</script>

<style lang="postcss">

</style>
