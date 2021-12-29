<template>
  <div id="home" class="">
    <h1 class="font-bold">Search for collections</h1>
    <search-bar class="mb-6"/>
    <h2 class="font-bold">Browse Other Microsite Collections</h2>
    <div class="mt-4">
      <h3 class="font-bold text-sm">New</h3>
      <div class="inline-block">
        <div class="flex flex-wrap gap-4">
          <collection-card v-for="coll in new_collections" :key="coll.id"
                           :name="coll.name"
                           :cover_img="coll.cover_img"
                           :microsite="coll.microsite"
                           :resource_count="coll.resource_count"
                           :num_alerts="coll.num_alerts"
                           :check="coll.check"/>
        </div>
        <dot-paginator
          :page_size="3" :num_results="15" :current="3"
          class="pt-3 justify-center"
          />
      </div>
    </div>
    <div class="mt-4">
      <h3 class="font-bold text-sm">Popular</h3>
      <div class="inline-block">
        <div class="flex flex-wrap gap-4">
          <collection-card v-for="coll in popular_collections" :key="coll.id"
                           :name="coll.name"
                           :cover_img="coll.cover_img"
                           :microsite="coll.microsite"
                           :resource_count="coll.resource_count"
                           :num_alerts="coll.num_alerts"
                           :check="coll.check"/>
        </div>
        <dot-paginator
          :page_size="3" :num_results="25" :current="1"
          class="pt-3 justify-center"
          />
      </div>
    </div>

    <div class="mt-4">
      <h3 class="font-bold text-sm">Microsites (NN)</h3>
      <div class="inline-block">
        <div class="flex flex-wrap gap-4">
          <microsite-card v-for="microsite in microsites" :key="microsite.id"
                          :cover_img="microsite.cover_img"
                          :name="microsite.name"
                          :description="microsite.description"
                          :collection_count="microsite.collection_count"
                          />
        </div>
        <dot-paginator
          :page_size="3" :num_results="25" :current="1"
          class="pt-3 justify-center"
          />
      </div>
    </div>
  </div>
</template>

<script>
  import SearchBar from '../components/elements/SearchBar.vue';
  import CollectionCard from "../components/CollectionCard.vue";
  import MicrositeCard from "../components/MicrositeCard.vue";
  import DotPaginator from "../components/DotPaginator.vue";
  //import uniqueId from 'lodash.uniqueid';


  export default {
      name: 'Browse',
      components: {
          DotPaginator,
          SearchBar,
          CollectionCard,
          MicrositeCard
      },
      methods: {

      },
      mounted() {

      },
      computed: {
      },
      data: function() {
          return {
              new_collections: [
                  {
                      name: "Open Oregon",
                      cover_img: "/static/imls/classroom.jpg",
                      microsite: "OERC",
                      resource_count: 36,
                      num_alerts: 0,
                      check: false
                  },
                  {
                      name: "Art History",
                      cover_img: "/static/imls/art_history.jpg",
                      microsite: "OERC",
                      resource_count: 100,
                      num_alerts: 0,
                      check: true
                  },
                  {
                      name: "Serenity Now",
                      cover_img: "/static/imls/serenity_now.jpg",
                      microsite: "MM",
                      resource_count: 42,
                      num_alerts: 0,
                      check: false
                  }
              ],
              popular_collections: [
                  {
                      name: "Businessing 101",
                      cover_img: "/static/imls/business.jpg",
                      microsite: "OERC",
                      resource_count: 36,
                      num_alerts: 0,
                      check: false
                  },
                  {
                      name: "Chemistry",
                      cover_img: "/static/imls/chemistry.jpg",
                      microsite: "OERC",
                      resource_count: 36,
                      num_alerts: 0,
                      check: false
                  },
                  {
                      name: "Microbiology",
                      cover_img: "/static/imls/microbiology.jpg",
                      microsite: "OERC",
                      resource_count: 36,
                      num_alerts: 0,
                      check: false
                  },
              ],
              microsites: [
                  {
                      name: "OERTX Repository",
                      description: "Higher Ed",
                      collection_count: 42,
                      cover_img: "/static/imls/higher_education2.jpg"
                  },
                  {
                      name: "Affordable Learning LOUISiana OER",
                      description: "Higher Ed",
                      collection_count: 162,
                      cover_img: "/static/imls/higher_ed.jpg"
                  },
                  {
                      name: "OhioLINK Course Content Library",
                      description: "Higher Ed",
                      collection_count: 23,
                      cover_img: "/static/imls/higher_ed2.jpg"
                  },
                  {
                      name: "VIVA Open",
                      description: "Higher Ed",
                      collection_count: 45,
                      cover_img: "/static/imls/higher_ed5.jpg"
                  },
                  {
                      name: "Microsite Name",
                      description: "Education Level",
                      collection_count: 22,
                      cover_img: "/static/imls/higher_ed6.jpg"
                  },
                  {
                      name: "Microsite Name",
                      description: "Education Level",
                      collection_count: 42,
                      cover_img: "/static/imls/classroom.jpg"
                  },
                  {
                      name: "OERTX Repository",
                      description: "Higher Ed",
                      collection_count: 42,
                      cover_img: "/static/imls/higher_education2.jpg"
                  },
                  {
                      name: "OERTX Repository",
                      description: "Higher Ed",
                      collection_count: 42,
                      cover_img: "/static/imls/higher_education2.jpg"
                  }

              ]
          }
      }
  };
</script>

<style src='../assets/styles/index.css'></style>
<style lang="postcss">
  .btn {
    @apply inline-block font-bold rounded-lg shadow-sm px-6 py-2;
  }

</style>
