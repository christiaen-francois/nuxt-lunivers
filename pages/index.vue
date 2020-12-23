<template>
  <article data-scroll-container>
    <header class="header-full-height" data-scroll-section>
      <div class="container container-xxl">
        <h1 class="title inview">studio de création graphique et web</h1>
      </div>
    </header>
    <ProjectList />
    <section id="edito" class="section-py" data-scroll-section>
      <div class="container">
        <div class="row">
          <div class="col-md-6 mb-5 mb-md-0">
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
// import locomotive from '~/mixins/locomotive.js'
export default {
  mounted() {
    this.animation()
  },
  methods: {
    animation() {
      const gsap = this.$gsap
      const ScrollTrigger = this.$ScrollTrigger
      const inviews = gsap.utils.toArray('.inview')
      gsap.registerPlugin(ScrollTrigger)

      inviews.forEach((inview) => {
        gsap.from(inview, {
          opacity: 0,
          y: 100,
          duration: 0.5,
          ease: 'circ.inOut',
          scrollTrigger: {
            id: 'ScrollTrigger',
            trigger: inview,
            start: 'bottom bottom-=100',
            end: 'bottom top',
            // markers: true,
          },
        })
      })
    },
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
