<template>
  <article ref="someName" class="page-content">
    <header class="header-full-height">
      <div class="container container-xxl text-center">
        <ul>
          <li v-for="(slogan, index) in slogans" :key="index">{{ slogan }}</li>
        </ul>
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
      pageTitle:
        'Agence de graphisme et création de sites web de caractère - Luxembourg',
      pageDescription: 'page desc',
      slogans: [
        'œuvrer avec passion & finesse',
        'vous inspirer en offrant le meilleur',
        'participer à votre accomplissement',
      ],
    }
  },
  head() {
    return {
      title: this.pageTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.pageDescription,
        },
      ],
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
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
