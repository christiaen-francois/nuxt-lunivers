<template>
  <article ref="pageContent" class="page-content">
    <header>
      <div class="container">
        <h1 class="title">Clients</h1>
      </div>
    </header>
    <section id="edito" class="section-py">
      <div class="container">Contenu</div>
    </section>
  </article>
</template>

<script>
import global from '~/mixins/global.js'
export default {
  name: 'Clients',
  mixins: [global],
  head() {
    return {
      title: 'Clients',
    }
  },
}
</script>

<style lang="scss" scoped>
.service-list {
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    font-size: 3rem;
    font-weight: 200;
    line-height: 1;
    margin: 1.5rem 0;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
