<template>
  <div id="home" class="">
    <h1 class="font-bold">My Library</h1>
    <div class="flex">
      <div class="bg-gray-200 rounded-lg">
        <div class="inline-flex rounded-lg">
          <input type="radio" name="room_type" id="roomPrivate" checked hidden/>
          <label for="roomPrivate" class="radio text-center self-center py-2 px-4 rounded-lg cursor-pointer hover:opacity-75">Collections</label>
        </div>
        <div class="inline-flex rounded-lg">
          <input type="radio" name="room_type" id="roomPublic" hidden/>
          <label for="roomPublic" class="radio text-center self-center py-2 px-4 rounded-lg cursor-pointer hover:opacity-75">Resources</label>
        </div>
      </div>
    </div>

    <search-bar class="m-4 ml-0"/>

    <div>
      <span>Show: </span>
      <ul class="show-filter text-sm list-none inline-flex gap-x-6">
        <li class="font-bold">All</li>
        <li>Shared Collections</li>
        <li>Private Collections</li>
        <li>Subscribed Collections</li>
      </ul>
    </div>

    <div class="flex items-center">
      <span class="flex-1">230 items</span>
      <ul class="inline-flex flex-initial gap-x-6 items-center">
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" class="inline h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
          </svg>
          Filters
        </li>
        <li>
          View
          <svg xmlns="http://www.w3.org/2000/svg" class="inline h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="inline h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
          </svg>
        </li>
        <li>Sort by:
          <select class="rounded-full p-2 text-sm">
            <option value="">Last Modified</option>
            <option value="">Created</option>
          </select>
        </li>
      </ul>
    </div>

    <div class="flex flex-wrap mt-4 gap-4">
      <router-link :to="{ name: 'collection-details', params: {id:coll.uid} }"
                   v-for="coll in collections" :key="coll.id">
        <collection-card :name="coll.name"
                         :cover_img="coll.cover_img"
                         :microsite="coll.microsite"
                         :resource_count="coll.resource_count"
                         :num_alerts="coll.num_alerts"
                         :check="coll.check"/>
      </router-link>
    </div>
  </div>
</template>

<script>
  import SearchBar from '../components/elements/SearchBar.vue';
  import CollectionCard from '../components/CollectionCard.vue';
  //import uniqueId from 'lodash.uniqueid';


  export default {
      name: 'MyLibrary',
      components: {
          SearchBar,
          CollectionCard,
      },
      methods: {

      },
      mounted() {

      },
      computed: {
      },
      data: function() {
          return {
              collections: [
                  {
                      uid: "aaaa",
                      name: "Open Oregon",
                      cover_img: "/static/imls/classroom.jpg",
                      microsite: "OERC",
                      resource_count: 36,
                      num_alerts: 9,
                      check: false
                  },
                  {
                      uid: "aaab",
                      name: "Art History",
                      cover_img: "/static/imls/art_history.jpg",
                      microsite: "OERC",
                      resource_count: 100,
                      num_alerts: 0,
                      check: true
                  },
                  {
                      uid: "aaac",
                      name: "Serenity Now",
                      cover_img: "/static/imls/serenity_now2.jpg",
                      microsite: "MM",
                      resource_count: 42,
                      num_alerts: 1,
                      check: false
                  },
                  {
                      uid: "aaad",
                      name: "World Geography",
                      cover_img: "/static/imls/world_geography.jpg",
                      microsite: "OERC",
                      resource_count: 6,
                      num_alerts: 3,
                      check: true
                  },
                  {
                      uid: "aaae",
                      name: "Artificial Intelligence",
                      cover_img: "/static/imls/ai2.jpg",
                      microsite: "OERC",
                      resource_count: 36,
                      num_alerts: 5,
                      check: false
                  },
                  {
                      uid: "aaaf",
                      name: "Book Learnin'",
                      cover_img: "/static/imls/book_learning.jpg",
                      microsite: "OERC",
                      resource_count: 36,
                      num_alerts: 0,
                      check: false
                  },
                  {
                      uid: "aaag",
                      name: "Physics",
                      cover_img: "/static/imls/physics.jpg",
                      microsite: "OERC",
                      resource_count: 36,
                      num_alerts: 0,
                      check: false
                  },
                  {
                      uid: "aaah",
                      name: "Literature (It's lit, fam)",
                      cover_img: "/static/imls/lit.jpg",
                      microsite: "OERC",
                      resource_count: 36,
                      num_alerts: 2,
                      check: false
                  },
                  {
                      uid: "aaai",
                      name: "Businessing 101",
                      cover_img: "/static/imls/business_101.jpg",
                      microsite: "OERC",
                      resource_count: 36,
                      num_alerts: 0,
                      check: false
                  },
                  {
                      uid: "aaaj",
                      name: "Chemistry",
                      cover_img: "/static/imls/chemistry.jpg",
                      microsite: "OERC",
                      resource_count: 36,
                      num_alerts: 0,
                      check: false
                  },
                  {
                      uid: "aaak",
                      name: "Microbiology",
                      cover_img: "/static/imls/microbiology.jpg",
                      microsite: "OERC",
                      resource_count: 36,
                      num_alerts: 0,
                      check: false
                  },
                  {
                      uid: "aaal",
                      name: "History",
                      cover_img: "/static/imls/history.jpg",
                      microsite: "OERC",
                      resource_count: 36,
                      num_alerts: 3,
                      check: false
                  },
                  {
                      uid: "aaam",
                      name: "Music Appreciation",
                      cover_img: "/static/imls/music3.jpg",
                      microsite: "OERC",
                      resource_count: 36,
                      num_alerts: 0,
                      check: true
                  },

              ]
          }
      }
  };
</script>

<style src='../assets/styles/index.css'></style>
<style lang="postcss">
  input:checked ~ .radio {
      color:white;
      background-color: green;
  }

</style>
