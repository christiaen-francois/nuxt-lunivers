<template>
  <article ref="pageContent" class="page-content">
    <header class="header-full-height">
      <div class="container">
        <h1 class="title">Projets</h1>
      </div>
    </header>
    <section id="projets" class="section-py">
      <div class="container">Jolie liste des projets</div>
    </section>
    <PageFooter />
  </article>
</template>

<script>
import global from '~/mixins/global.js'
export default {
  name: 'HomePage',
  mixins: [global],
  head() {
    return {
      title: 'Projets',
    }
  },
}
</script>

<style></style>
