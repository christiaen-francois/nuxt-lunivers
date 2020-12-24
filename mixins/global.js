export default {
  data() {
    return {
      gsap: null,
      ScrollTrigger: null,
      elinviews: null,
    }
  },
  mounted() {
    this.$nextTick(
      function () {
        this.animation()
      }.bind(this)
    )
  },
  destroyed() {
    const triggers = this.ScrollTrigger.getAll()
    console.log(triggers)
    triggers.forEach((trigger) => {
      trigger.kill()
    })
  },
  methods: {
    animation() {
      this.gsap = this.$gsap
      this.ScrollTrigger = this.$ScrollTrigger
      this.elinviews = this.gsap.utils.toArray('.inview')
      this.gsap.registerPlugin(this.ScrollTrigger)
      this.ScrollTrigger.refresh()

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
            markers: {
              startColor: 'white',
              endColor: 'gold',
              fontSize: '10px',
              fontWeight: 'normal',
              indent: 20,
            },
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
          trigger: '.page-footer .container-fluid',
          start: 'top bottom',
          end: 'bottom top',
          markers: {
            startColor: 'white',
            endColor: 'gold',
            fontSize: '10px',
            fontWeight: 'normal',
            indent: 20,
          },
        },
      })
    },
  },
}
