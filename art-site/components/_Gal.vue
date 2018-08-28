<template>
  <nuxt-link :to="'/gallery/' + id">
    <article class='gal'>
        <div class="thumbnail" :style="{backgroundImage: 'url(' + thumbnail + ')'}"></div>
        <h1>{{ title }}</h1>
        <p>{{ descriptionText }}</p>
        <p>{{ materialsText }}</p>
    </article>
  </nuxt-link>
</template>

<script>
export default {
    props: ['id', 'title', 'thumbnail', 'descriptionText', 'materialsText']
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}

.gal {
  box-sizing: border-box;
  width: 280px;
  padding: 8px;
  border: 2px solid #ccc;
  box-shadow: 0 2px 2px #aaa;
  margin: 10px;
}

.thumbnail {
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 200px;
}
</style>
