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
        this.ScrollTrigger.refresh()
      }.bind(this)
    )
  },
  destroyed() {},
  methods: {
    initAnimation() {
      this.gsap = this.$gsap
      this.ScrollTrigger = this.$ScrollTrigger
      this.elinviews = this.gsap.utils.toArray('.inview')
      this.gsap.registerPlugin(this.ScrollTrigger)
      this.destroyAnimation()

      console.log('initAnimation')

      this.elinviews.forEach((inview) => {
        this.gsap.from(inview, {
          opacity: 0,
          y: 150,
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

      this.gsap.from('.page-footer .row', {
        opacity: 0,
        y: 100,
        delay: 0.9,
        duration: 0.5,
        // ease: 'circ.inOut',
        scrollTrigger: {
          // once: true,
          id: 'footerTrigger',
          trigger: '.page-footer .row',
          start: 'top bottom',
          end: 'bottom bottom',
          // markers: this.markers,
        },
      })
    },
    destroyAnimation() {
      console.log('destroyAnimation')
      const triggers = this.ScrollTrigger.getAll()
      triggers.forEach((trigger) => {
        trigger.kill()
      })
    },
  },
}
