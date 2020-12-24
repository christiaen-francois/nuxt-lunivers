<template>
  <article>
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
              <p class="content-caption inview">
                <span>la projection</span>
              </p>
              <h2 class="inview">les petits détails qui vous feront briller</h2>
            </div>
          </div>
          <div class="col-md-5 offset-md-2 inview">
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
              <li class="inview">identité & charte graphique</li>
              <li class="inview">imprimés</li>
              <li class="inview">lettrage</li>
              <li class="inview">signalétique</li>
              <li class="inview">iconographie</li>
              <li class="inview">design interactif</li>
            </ul>
          </div>
          <div class="col-md-5 offset-md-2">
            <ul class="service-list inview">
              <li class="inview">webdesign</li>
              <li class="inview">développement</li>
              <li class="inview">expérience utilisateur (UX)</li>
              <li class="inview">interface utilisateur (UI)</li>
              <li class="inview">création wordpress sur mesure</li>
              <li class="inview">site e-commerce</li>
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
