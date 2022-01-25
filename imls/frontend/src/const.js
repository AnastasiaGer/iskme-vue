import Home from "./screens/Home.vue"
import SearchScreen from './screens/SearchScreen.vue'
import MyLibrary from './screens/MyLibrary.vue'
import Browse from './screens/Browse.vue'
import BrowseCollections from './screens/BrowseCollections.vue'
import AllCollections from './screens/AllCollections.vue'
import Map from './screens/Map.vue'
import Settings from './screens/Settings.vue'
import CollectionDetails from './screens/CollectionDetails.vue'
import CourseItem from './components/course/CourseItem.vue'
import MicrositeSpecificCollections from './screens/MicrositeSpecificCollections.vue'


export const ENTRY_POINT = `https://api.npoint.io/80a1bc56007c395a26b3`;

export const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/search', name: 'search', component: SearchScreen },
  { path: '/my-library', name: 'my-library', component: MyLibrary },
  { path: '/browse', name: 'browse', component: Browse },
  { path: '/browse-collections', name: 'browse-collections', component: BrowseCollections },
  { path: "/all-collections", name: "all-collections", component: AllCollections,},
  { path: '/map', name: 'map', component: Map },
  { path: '/settings', name: 'settings', component: Settings },
  { path: '/details/:collectionId', name: 'collection-details', component: CollectionDetails, props: true },
  { path: '/details/collection/course', name: 'course', component: CourseItem, props: true },
  { path: '/microsite-specific-collections/:id', name: 'microsite-specific-collections', component: MicrositeSpecificCollections, props: true },
]