<template>
  <article data-scroll-container>
    <header class="header-full-height" data-scroll-section>
      <div class="container container-xxl">
        <h1 class="title">studio de création graphique et web</h1>
      </div>
    </header>
    <ProjectList />
    <section id="edito" class="section-py" data-scroll-section>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="content-with-caption">
              <p
                class="content-caption inview"
                data-scroll
                data-scroll-speed="1"
              >
                <span>Valeurs</span>
              </p>
              <h2>
                lunivers est une épicerie fine pour laquelle nous œuvrons avec
                passion et l'envie de toujours faire mieux.
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
    <ClientList />
    <PageFooter />
  </article>
</template>

<script>
import locomotive from '~/mixins/locomotive.js'
export default {
  mixins: [locomotive],
}
</script>

<style lang="scss">
.links {
  padding-top: 15px;
  a {
    color: red;
  }
}
</style>
