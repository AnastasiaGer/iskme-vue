import Vue from 'vue'
import Vuex from 'vuex';
import axios from 'axios';
import VueRouter from 'vue-router'
import App from "./App.vue"
import {routes} from './const'
import('@/assets/styles/index.css');

const configElement = document.getElementById( 'config' );
const config = JSON.parse( configElement.innerHTML );

Vue.config.productionTip = false
Vue.prototype.app_config = config;
Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        collections_by_category: [],
        microsites: [],
        collection_count_by_education_level: [],
        //TODO: this needs to be an object that can hold the current
        // page number, current search terms, facets etc..
        paginated_collections: {
            total: 0,
            page: 0,
            collections: []
        }
    },
    mutations: {
        setAllCollections (state, collections) {
            state.collections_by_category = collections
        },

        setMicrosites (state, microsites) {
            state.microsites = microsites;
        },

        setCountByEducationLevel (state, by_ed_level) {
            state.collection_count_by_education_level = by_ed_level;
        },

        setSearchResults (state, search_results) {
            //     //TODO: this needs to be thought through.. need to maintain state wrt to search/filters
            //     state.paginated_collections.total = search_result.total;
            //     state.paginated_collections.page = search_result.page;
            state.paginated_collections.total = search_results.total;
            state.paginated_collections.page = search_results.page;
            state.paginated_collections.collections = search_results.collections;
        }
    },
    actions: {
        async getCollections({ commit }) {
            let result = await axios.get('/imls/browse');
            var my_collections = result.data.collections_by_category;
            var microsites = result.data.microsites;
            var by_ed_level = result.data.collection_count_by_education_level;
            var search_results = result.data.search_results;
            console.log(result.data);
            commit('setAllCollections', my_collections);
            commit('setMicrosites', microsites);
            commit('setCountByEducationLevel', by_ed_level);
            commit('setSearchResults', search_results);
        }
    }
});


const router = new VueRouter({
  routes: routes
})

new Vue({
    store: store,
    router: router,
    render: h => h(App),
}).$mount('#app')
