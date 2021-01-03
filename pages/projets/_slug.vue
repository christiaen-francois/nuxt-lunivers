<template>
  <article ref="pageContent" class="page-content single-project">
    <header class="header-full-height">
      <div class="container">
        <h1 class="title">{{ projet.name }}</h1>
      </div>
      <div class="header-image">
        <img :src="projet.images.featured" :alt="projet.name" />
      </div>
    </header>
    <PageFooter />
  </article>
</template>

<script>
import find from 'lodash/find'
import global from '~/mixins/global.js'
export default {
  name: 'Projet',
  mixins: [global],
  computed: {
    projet() {
      return find(this.$store.state.projets.list, {
        slug: this.$route.params.slug,
      })
    },
  },
  head() {
    return {
      title: 'Projet',
    }
  },
}
</script>

<style lang="scss" scoped>
.header-full-height {
  .header-image {
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 1;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
