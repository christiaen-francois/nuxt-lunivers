<template>
  <article data-scroll-container>
    <header class="" data-scroll-section>
      <div class="container">
        <h1 class="title">Projets</h1>
      </div>
    </header>
    <section id="projets" class="section-py" data-scroll-section>
      <div class="container">Projet</div>
    </section>
    <ProjectList />
    <PageFooter />
  </article>
</template>

<script>
import locomotive from '~/mixins/locomotive.js'
export default {
  mixins: [locomotive],
}
</script>

<style></style>
