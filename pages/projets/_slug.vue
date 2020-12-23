<template>
  <article data-scroll-container>
    <header class="header-full-height" data-scroll-section>
      <div class="container">
        <h1 class="title">{{ projet.name }}</h1>
        <nuxt-link class="btn btn-primary" to="/projets">Projets</nuxt-link>
      </div>
    </header>
    <PageFooter />
  </article>
</template>

<script>
import find from 'lodash/find'
export default {
  computed: {
    projet() {
      return find(this.$store.state.projets.list, {
        slug: this.$route.params.slug,
      })
    },
  },
}
</script>

<style></style>
