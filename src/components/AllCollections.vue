<template>
  <Header></Header>

  <main>
    <h2>Collections</h2>

  </main>

  <footer></footer>
</template>

<script>

import Header from './Header.vue'

export default {
  name: 'app',
  data() {
    return {
      mockData: [],
    }
  },
  mounted() {
    fetch('https://api.npoint.io/80a1bc56007c395a26b3')
    .then(response => response.json())
    .then(json => {
      console.log(json);
      this.mockData = json
    })
  },
  components: {
    Header,
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
