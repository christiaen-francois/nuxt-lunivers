<template>
  <article ref="someName" class="page-content">
    <header class="header-full-height">
      <div class="container">
        <h1 class="title">Les choses à faire</h1>
      </div>
    </header>
    <section id="services" class="section-py pb-0">
      <div class="container">
        <ul>
          <li>Joli préloader</li>
        </ul>
      </div>
    </section>
    <PageFooter />
  </article>
</template>

<script>
import global from '~/mixins/global.js'
export default {
  name: 'Todo',
  mixins: [global],
  head() {
    return {
      title: 'Todo haha',
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
