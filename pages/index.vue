<template>
  <article ref="someName" class="page-content">
    <header class="header-full-height">
      <div class="container container-xxl text-center">
        <p class="h1">travailler avec finesse</p>
      </div>
    </header>
    <section id="edito" class="section-py">
      <div class="container">
        <div class="row">
          <div class="col-md-6 mb-5 mb-md-0">
            <div class="content-with-caption">
              <p class="content-caption fade-in-up-osc">
                <span>Valeurs</span>
              </p>
              <h2>
                Une équipe solide de graphistes et développeurs web pour
                imaginer et créer votre demain
              </h2>
            </div>
          </div>
          <div class="col-md-5 offset-md-1">
            <p>
              Challenger les usages pour en créer de nouveaux, faire de grosses
              différences avec de petits détails, offrir un univers... Le file
              conducteur idéal qui fera de notre collaboration une histoire
              couronnée de réussites.
            </p>
            <nuxt-link class="btn btn-primary" to="/studio"
              >Le studio</nuxt-link
            >
          </div>
        </div>
      </div>
    </section>
    <ProjectList />
    <ClientList />
    <PageFooter />
  </article>
</template>

<script>
import global from '~/mixins/global.js'
export default {
  name: 'HomePage',
  mixins: [global],
  data() {
    return {
      wonders: [
        'travailler avec finesse',
        'œuvrer avec passion',
        'vous proproser le meilleur',
      ],
    }
  },
  head() {
    return {
      title:
        'Agence de graphisme et création de sites web de caractère - Weiswampach',
    }
  },
}
</script>

<style lang="scss" scoped>
.links {
  padding-top: 15px;
  a {
    color: red;
  }
}
</style>
