<template>
  <article ref="someName" class="page-content">
    <header class="header-full-height">
      <div class="container">
        <h1 class="title">lunivers cherche à vous mettre en lumière.</h1>
      </div>
    </header>
    <section id="services" class="section-py pb-0">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <div class="content-with-caption">
              <p class="content-caption fade-in-up-osc">
                <span>la projection</span>
              </p>
              <h2 class="fade-in-up-osc">
                les petits détails qui vous feront briller
              </h2>
            </div>
          </div>
          <div class="col-md-5 offset-md-2 fade-in-up-osc">
            <p>
              Notre constante envie de fournir le meilleur nous permet de nous
              dépasser et vous proposer des projets pertinents et créatifs.
            </p>
            <nuxt-link class="btn btn-primary" to="/projets">
              Les images valent mieux que 1000 mots</nuxt-link
            >
          </div>
        </div>
        <div class="row section-py pb-0">
          <div class="col-md-5">
            <ul class="service-list">
              <li class="fade-in-up-osc">identité & charte graphique</li>
              <li class="fade-in-up-osc">imprimés</li>
              <li class="fade-in-up-osc">lettrage</li>
              <li class="fade-in-up-osc">signalétique</li>
              <li class="fade-in-up-osc">iconographie</li>
              <li class="fade-in-up-osc">design interactif</li>
            </ul>
          </div>
          <div class="col-md-5 offset-md-2">
            <ul class="service-list">
              <li class="fade-in-up-osc">webdesign</li>
              <li class="fade-in-up-osc">développement</li>
              <li class="fade-in-up-osc">expérience utilisateur (UX)</li>
              <li class="fade-in-up-osc">interface utilisateur (UI)</li>
              <li class="fade-in-up-osc">création wordpress sur mesure</li>
              <li class="fade-in-up-osc">site e-commerce</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <PageFooter />
  </article>
</template>

<script>
import global from '~/mixins/global.js'
export default {
  name: 'Studio',
  mixins: [global],
  head() {
    return {
      title: 'Studio',
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
