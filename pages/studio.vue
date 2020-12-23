<template>
  <article data-scroll-container>
    <header class="header-full-height" data-scroll-section>
      <div class="container">
        <h1 class="title">lunivers cherche à vous mettre en lumière.</h1>
      </div>
    </header>
    <section id="services" class="section-py pb-0" data-scroll-section>
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <div class="content-with-caption">
              <p
                class="content-caption inview"
                data-scroll
                data-scroll-speed="1"
              >
                <span>la projection</span>
              </p>
              <h2 class="inview" data-scroll>
                les petits détails qui vous feront briller
              </h2>
            </div>
          </div>
          <div class="col-md-5 offset-md-2 inview" data-scroll>
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
              <li class="inview" data-scroll>identité & charte graphique</li>
              <li class="inview" data-scroll>imprimés</li>
              <li class="inview" data-scroll>lettrage</li>
              <li class="inview" data-scroll>signalétique</li>
              <li class="inview" data-scroll>iconographie</li>
              <li class="inview" data-scroll>design interactif</li>
            </ul>
          </div>
          <div class="col-md-5 offset-md-2">
            <ul class="service-list inview" data-scroll>
              <li class="inview" data-scroll>webdesign</li>
              <li class="inview" data-scroll>développement</li>
              <li class="inview" data-scroll>expérience utilisateur (UX)</li>
              <li class="inview" data-scroll>interface utilisateur (UI)</li>
              <li class="inview" data-scroll>création wordpress sur mesure</li>
              <li class="inview" data-scroll>site e-commerce</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <PageFooter />
  </article>
</template>

<script>
import locomotive from '~/mixins/locomotive.js'
export default {
  mixins: [locomotive],
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
  }
}
</style>
