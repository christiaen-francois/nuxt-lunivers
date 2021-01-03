export default {
  data() {
    return {
      gsap: null,
      ScrollTrigger: null,
      elinviews: null,
      markers: {
        startColor: '#01C8EE',
        endColor: '#EE2E7C',
        fontSize: '10px',
        fontWeight: 'normal',
        indent: 20,
      },
    }
  },
  mounted() {
    this.$nextTick(
      function () {
        this.initAnimation()
        // console.log('ticked')
      }.bind(this)
    )
  },
  watch: {
    $route() {
      this.refreshAnimation()
    },
  },
  destroyed() {
    this.destroyAnimation()
    window.removeEventListener('resize', this.refreshAnimation)
  },
  methods: {
    initAnimation() {
      // this.gsap = this.$gsap
      // this.ScrollTrigger = this.$ScrollTrigger
      // this.gsap.registerPlugin(this.ScrollTrigger)
      // this.gsap.from('.page-footer .page-footer-inner', {
      //   opacity: 0,
      //   y: 100,
      //   delay: 0.5,
      //   duration: 0.5,
      //   // ease: 'circ.inOut',
      //   scrollTrigger: {
      //     // once: true,
      //     id: 'footerTrigger',
      //     trigger: '.page-footer .page-footer-inner',
      //     start: 'top bottom',
      //     end: 'bottom bottom',
      //     // markers: this.markers,
      //   },
      // })
    },
    refreshAnimation() {
      // console.log('this.refreshAnimation()')
      // this.ScrollTrigger.refresh()
    },
    destroyAnimation() {
      // const triggers = this.ScrollTrigger.getAll()
      // triggers.forEach((trigger) => {
      //   trigger.kill()
      // })
    },
  },
}
