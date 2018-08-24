<template>
  <nuxt-link :to="'/gallery/' + id">
    <article class="gal">
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
