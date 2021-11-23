<template>
  <Header></Header>

  <main>
    <h2>Browse</h2>

    <NewCollections v-bind:mockData="mockData"/>

  </main>

  <footer></footer>
</template>

<script>
import NewCollections from './components/NewCollections.vue'
import Header from './components/Header.vue'
import Pagination from './components/Pagination.vue'

export default {
  name: 'app',
  data() {
    return {
      mockData: [
        {
          micrositeTitle: `ATLAS`,
          id: 1,
          collectionTitle: `Discover CCSS Aligned English Language Arts`,
          collectionThumbnail: `https://picsum.photos/228/200`,
          resourcesNumber: 22,
          modifiedDate: `May 4, 2020`,
        },
        {
          micrositeTitle: `ATLAZ CTEAS`,
          id: 2,
          collectionTitle: `Discover CCSS Aligned Mathematics`,
          collectionThumbnail: `https://picsum.photos/228/200`,
          resourcesNumber: 122,
          modifiedDate: `December 24, 2021`,
        },
        {
          micrositeTitle: `CT`,
          id: 3,
          collectionTitle: `NGSS`,
          collectionThumbnail: `https://picsum.photos/228/200`,
          resourcesNumber: 12,
          modifiedDate: `April 14, 2019`,
        },
        {
          micrositeTitle: `INFOHIO`,
          id: 4,
          collectionTitle: `STEAM`,
          collectionThumbnail: `https://picsum.photos/228/200`,
          resourcesNumber: 26,
          modifiedDate: `October 13, 2021`,
        },
        {
          micrositeTitle: `LOUIS`,
          id: 5,
          collectionTitle: `TeachEngineering`,
          collectionThumbnail: `https://picsum.photos/228/200`,
          resourcesNumber: 267,
          modifiedDate: `November 19, 2020`,
        },
        {
          micrositeTitle: `MI`,
          id: 5,
          collectionTitle: `PheT Interactives`,
          collectionThumbnail: `https://picsum.photos/228/200`,
          resourcesNumber: 67,
          modifiedDate: `June 8, 2021`,
        },
      ]
    }
  },
  components: {
    NewCollections,
    Header,
    Pagination
  }
}
</script>


<style>
html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}

/* Reset margins and paddings on most elements */
body,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
li,
p,
pre,
blockquote,
figure,
hr {
  margin: 0;
  padding: 0;
}

main {
  max-width: 1920px;
  padding: 50px;
  margin: 0 auto;
}

.visually-hidden:not(:focus):not(:active),
input[type="checkbox"].visually-hidden,
input[type="radio"].visually-hidden {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  width: 1 px;
  height: 1 px;
  margin: -1 px;
  padding: 0;
  white-space: nowrap;
  border: 0;
  clip-path: inset(100%);
}

/* Removes discs from ul */
ul {
  list-style: none;
}

input,
textarea,
select,
button {
  color: inherit;
  font: inherit;
  letter-spacing: inherit;
}

input,
textarea,
button {
  border: 1px solid gray;
}

button {
  border-radius: 0;
  padding: 0.75em 1em;
  background-color: transparent;
}

button * {
  pointer-events: none;
}

embed,
iframe,
img,
object,
video {
  display: block;
  max-width: 100%;
}

table {
  table-layout: fixed;
  width: 100%;
}

[hidden] {
  display: none !important;
}

/* noscript styles */
noscript {
  display: block;
  margin-bottom: 1em;
  margin-top: 1em;
}

#app {
  font-family: "Montserrat", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  overflow-x: hidden;
  min-height: 300px;
  color: #2c3e50;
  margin: 0 auto;
  background: #f0f2f2;
}
</style>
