<template>
  <main id="js-scroll" rel="mainContent" class="page-wrapper">
    <Navigation />
    <Nuxt />
    <PageFooter />
    <Background />
  </main>
</template>

<script>
// import { mapState, mapMutations } from 'vuex'
import { mapState } from 'vuex'

export default {
  data() {
    return {
      pwtl: null,
    }
  },
  computed: {
    ...mapState({
      sceneLoaded: (state) => state.background.sceneLoaded,
    }),
  },
  watch: {
    sceneLoaded(newValue, oldValue) {
      // console.log(`Updating sceneLoaded from ${oldValue} to ${newValue}`)
      if (newValue === true) {
        this.pwtl.play()
      }
    },
  },
  mounted() {
    const pageWrapper = document.querySelector('.page-wrapper')
    this.pwtl = this.$gsap.timeline({ paused: true, reversed: true })
    this.pwtl.to(pageWrapper, {
      opacity: 1,
      duration: 1,
    })
    this.setRootVars()
    window.addEventListener('resize', this.setRootVars, false)
  },
  methods: {
    setRootVars() {
      const root = document.documentElement
      const vh =
        Math.round(
          document.documentElement.clientHeight || 0,
          window.innerHeight || 0
        ) / 100

      root.style.setProperty('--vh', vh + 'px')
    },
  },
}
</script>

<style></style>
