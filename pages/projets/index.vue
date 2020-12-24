<template>
  <article>
    <header class="">
      <div class="container">
        <h1 class="title">Projets</h1>
      </div>
    </header>
    <section id="projets" class="section-py">
      <div class="container">Projet</div>
    </section>
    <ProjectList />
    <PageFooter />
  </article>
</template>

<script>
import global from '~/mixins/global.js'
export default {
  name: 'HomePage',
  mixins: [global],
}
</script>

<style></style>
