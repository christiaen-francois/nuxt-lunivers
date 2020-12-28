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
        // this.$store.commit('menu/refreshPageContentEl', this.$refs.someName)
        // console.log(this.$refs.someName)
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
      this.gsap = this.$gsap
      this.ScrollTrigger = this.$ScrollTrigger
      this.elinviews = this.gsap.utils.toArray('.fade-in-up-osc')
      this.gsap.registerPlugin(this.ScrollTrigger)

      this.elinviews.forEach((inview) => {
        this.gsap.from(inview, {
          opacity: 0,
          y: 50,
          duration: 0.5,
          //   ease: 'circ.inOut',
          scrollTrigger: {
            id: 'ScrollTrigger',
            scrub: 0.5,
            // once: true,
            trigger: inview,
            start: 'top bottom',
            end: 'top 70%',
            // markers: this.markers,
          },
        })
      })
    },
    refreshAnimation() {
      this.ScrollTrigger.refresh()
    },
    destroyAnimation() {
      const triggers = this.ScrollTrigger.getAll()
      triggers.forEach((trigger) => {
        trigger.kill()
      })
    },
  },
}
