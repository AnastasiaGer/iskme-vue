1. Re-Use

From the 'Browse Collection' page, these links should go to the same screen, just with a different 'filter':
 - New Collections - View All Collections
   screen that shows a list of all the collections that is pre-filtered by 'New Collections'
 - Popular Collections - View All Collections
   same screen that is pre-filterd by 'Popular Collections'
 - By Microsite - Show All
   same screen that is pre-filtered by 'Microsite == <microsite that was clicked>'
 - Education Level
   same screen that is pre-filtered by 'Education Level == <education level that was picked'


All those screens are, essentially, the 'Search Screen' - just that
depending on where you enter that search screen from, pre-sets some
filters for you. What that allows people to do then, is further refine
the search.


You SHOULD NOT build 'microsite-specific-collection',
'education-level-collection' etc.. Those are all the same search
screen, just that the filters are pre-set to give you those results.


2. Use flexible layout

In the 'Browse collections' page, If you resize the screen, the layout
and the logic of the previous/next breaks. See the 'Browse'
page. Maybe you can tweak the 'Browse' page and get rid of 'Browse
collections' page. You should re-use the cards also. The cards that
are used in the 'Browse' page have a lot of things figured out
already. (notification, bell, badges etc. And 'text shadow', text
centering etc.)


3. See the Vuex.Store instance in main.js. That should be the conduit
   for the code to fetch data from the server.

4. See `apps/imls/dummy_data/browse.json` for the json data

5. See `apps/imls/views/browse.py` for the Django view class. This is
   what Matt and I will be working on to get you the data from our
   backend database.

6. Do not sort/filter using vue.js. That does not sort/filter the
   result set. For example, if there are 10,000 collections in the
   server, the server will only give you 10-20 collections at a time
   (paginated search results). If you sort by time on the 10-20, it
   will not sort the 10,000 and give the 10-20 most relavent results.

   - we will start to fill out the Vuex.Store class the enable
     searching. Stay tuned.
