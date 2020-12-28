<template>
  <article ref="someName" class="page-content">
    <header class="header-full-height">
      <div class="container">
        <h1 class="title">Carrière</h1>
      </div>
    </header>
    <PageFooter />
  </article>
</template>

<script>
import global from '~/mixins/global.js'
export default {
  name: 'Carriere',
  mixins: [global],
  head() {
    return {
      title: 'Carrière',
    }
  },
}
</script>

<style></style>
