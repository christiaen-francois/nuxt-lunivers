<template>
  <footer class="page-footer px-5">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-md-4 offset-md-1 mb-4 mb-md-0">
          <h2>Houston nous avons la solution à votre problème.</h2>
        </div>
        <div class="col-md-4 offset-md-2">
          <a href="#" class="btn btn-primary">Etablir le contact</a>
          <p>
            <small>Contact imminent.... Je répète, contact imminent!</small>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  mounted() {
    this.animationFooter()
  },
  methods: {
    animationFooter() {
      const gsap = this.$gsap
      const ScrollTrigger = this.$ScrollTrigger
      gsap.registerPlugin(ScrollTrigger)

      gsap.from('.page-footer .row', {
        opacity: 0,
        y: 100,
        duration: 0.5,
        ease: 'circ.inOut',
        scrollTrigger: {
          id: 'footerTrigger',
          trigger: '.page-footer .container-fluid',
          start: 'top 99%',
          end: 'bottom top',
          markers: true,
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.page-footer {
  padding-top: 15vh;
  .container-fluid {
    overflow: hidden;
  }
  .row {
    padding-top: 10vh;
    padding-bottom: 10vh;
    background: #fff;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    color: #000;

    a,
    h2 {
      color: #000;
    }

    h2 {
      margin: 0;
    }
  }

  address {
    margin: 0;
  }

  .copyright {
    border-top: solid 1px rgba(#fff, 0.1);
    text-align: center;
    padding: 2rem 15px;
    font-size: 0.9rem;
    margin: 0 15px 0 15px;

    @include mq($from: xlarge) {
      margin: 0 2rem 0 2rem;
    }
  }
}
</style>
