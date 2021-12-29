# TODO

 - Fix the hotloading
 - Implement replacement for haystack
   - Create a second index for the same tenant (e.g. imls_<tenant>)
	 - see the reference schema, especially on how to handle paths for
       taxonomy etc.
   - Use django model event hooks to create/update/delete docs
   - Continue using both haystack (for regular search) and the new index for IMLS
   - Over time, replace all search/faceting functionality with the new
     IMLS based index and phase out haystack.
 - Using components/api from the IMLS, replace search functionality in
   the rest of the django app

# ilms-search-vue

Run the django app (`./manage.py runserver`), then, in another window,
cd to this directory. Then run `npm run serve`. Go to
"http://<yourtenant>:8000/imls/"

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
This is currently not working. Need to figure this out. Possibly try
upgrading `django-webpack-loader`.

```
npm run serve
```

### Compiles and minifies for production
Not sure how this would work with Django
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
