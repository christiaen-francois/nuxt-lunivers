<template>
  <article ref="pageContent" class="page-content">
    <header class="header-full-height">
      <div class="container container-xxl text-center">
        <h1 ref="homeTitle">
          Graphisme et création de sites de caractère sur mesure
        </h1>
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
                Une équipe de graphistes et développeurs web pour imaginer et
                créer les petits détails qui vous feront briller
              </h2>
            </div>
          </div>
          <div class="col-md-5 offset-md-1">
            <p>
              Notre but est de challenger les usages pour en créer de nouveaux,
              faire de grosses différences avec de petits détails, offrir un
              univers... Le file conducteur idéal qui fera de notre
              collaboration une histoire couronnée de réussites.
            </p>
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
    <ClientList />
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
      pageDescription:
        "Lunivers est une agence web et graphique située à Weiswampach spécialisée dans le développement d'identités sur mesure. Avec une équipe qui a plus de 10 ans d'expérience dans l'écoute de ses clients.",
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
.header-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.service-list {
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    font-size: 1.7rem;
    font-weight: 200;
    line-height: 1;
    margin: 1.5rem 0;

    @include mq($from: large) {
      font-size: 3rem;
    }

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
