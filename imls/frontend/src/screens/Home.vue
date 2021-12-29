<template>
  <div id="home" class="flex">
    <div class="flex-shrink-0 pt-2">
      <h1 class="font-bold">What's New?</h1>
      <whats-new-collection-card class="pb-5"
         v-for="item in whats_new" :key="item.id"
        :who="item.who"
        :what="item.what"
        :img_url="item.img_url"
        :resources="item.resources"
        :subscribed="item.subscribed"/>
    </div>
    <div class="shadow-md m-4 mt-0 p-4 pt-2">
      <h3>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
        </svg>
        Network Activity
      </h3>
      <ul>
        <li v-for="item in network_activity" :key="item.id"
            class="m-4"
            >
          <p><em class="font-bold">{{item.who}}</em> {{item.what}}</p>
          <p class="text-sm text-gray-500">{{item.when}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';
  import VueAxios from 'vue-axios';
  import WhatsNewCollectionCard from '../components/WhatsNewCollectionCard.vue';

  //import uniqueId from 'lodash.uniqueid';

  Vue.use(VueAxios, axios);

  export default {
      name: 'Root',
      components: {
          WhatsNewCollectionCard
      },
      methods: {

      },
      mounted() {

      },
      computed: {
      },
      data: function() {
          return {
              whats_new: [
                  {
                      who: "CUNY",
                      what: "Nursing Chemistry Resources",
                      img_url: "/static/imls/nurse.jpg",
                      resources: [[17, "Textbooks"],
                                [6, "Courses"],
                                [64, "Lab Activities"],
                                [15, "Assessments"],
                                [2, "Simulations"]],
                      subscribed: 7
                  },
                  {
                      who: "CUNY",
                      what: "Mechanical Engineering",
                      img_url: "/static/imls/mechanical.jpg",
                      resources: [[3, "Courses"],
                                [4, "Lab Activities"],
                                [10, "Assessments"],
                                [4, "Assignments"]],
                      subscribed: 3
                  },
                  {
                      who: "LOUIS",
                      what: "Cost Accounting",
                      img_url: "/static/imls/business.jpg",
                      resources: [[1, "Course"]],
                      subscribed: 2
                  }
              ],
              network_activity: [
                  {
                      who: "INFOhio",
                      what: "added a collection to their library",
                      when: "1 day ago"
                  },
                  {
                      who: "CUNY",
                      what: "uploaded 2 NEW collections",
                      when: "3 days ago"
                  },
                  {
                      who: "LOUIS",
                      what: "updated 2 collections",
                      when: "1 week ago"
                  },
                  {
                      who: "CUNY",
                      what: "subscribed to 1 of your collections",
                      when: "4 weeks ago"
                  },
              ],
          }
      }
  };
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 10px;
}
</style>
<style src='../assets/styles/index.css'></style>
<style lang="postcss">
  .btn {
    @apply inline-block font-bold rounded-lg shadow-sm px-6 py-2;
  }

</style>
