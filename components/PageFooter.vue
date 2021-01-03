<template>
  <footer ref="pageFooter" class="page-footer">
    <div class="container">
      <div class="page-footer-inner">
        <div class="row align-items-center">
          <div class="col-md-5 offset-md-1 order-2 order-md-1">
            <h2>Houston nous avons la solution à votre problème!</h2>
          </div>
          <div class="col-md-4 offset-md-1 mb-4 mb-md-0 order-1 order-md-2">
            <button
              type="button"
              class="btn btn-light btn-block btn-md-inline-block btn-lg"
              @click.prevent="menuToggle($event)"
            >
              Etablir le contact...
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import footerAnim from '~/mixins/footerAnim.js'
export default {
  name: 'PageFooter',
  mixins: [footerAnim],
  data() {
    return {
      pageContactPanelTimeline: null,
    }
  },
  computed: {
    ...mapState({
      menuVisibility: (state) => state.navigation.menuVisibility,
      contactVisibility: (state) => state.navigation.contactVisibility,
      overlayOpen: (state) => state.navigation.overlayOpen,
    }),
  },
  watch: {
    overlayOpen(newValue, oldValue) {
      this.toggleContactPanelVisibility(newValue)
      // console.log(`Updating from ${oldValue} to ${newValue}`)
    },
  },
  mounted() {
    this.$nextTick(
      function () {
        const pageFooter = this.$refs.pageFooter

        this.pageContactPanelTimeline = this.$gsap.timeline({
          paused: true,
          reversed: true,
        })
        this.pageContactPanelTimeline.to(pageFooter, {
          opacity: 0,
          duration: 0.2,
        })
      }.bind(this)
    )
  },
  methods: {
    ...mapMutations('navigation', ['ToggleContactVisibility']), // https://stackoverflow.com/questions/60335163/how-to-correctly-use-nuxt-vue-mapmutations
    ...mapActions('navigation', ['ToggleContactVisibilityAction']),
    menuToggle(event) {
      this.ToggleContactVisibilityAction()
    },
    toggleContactPanelVisibility(nv) {
      // console.log('toggleContactPanelVisibility', nv)
      if (nv) {
        this.pageContactPanelTimeline.play()
      } else {
        this.pageContactPanelTimeline.reverse()
      }
    },
  },
}
</script>

<style lang="scss">
.page-footer {
  padding-top: 15vh;
  .container-fluid {
    overflow: hidden;
  }
  .page-footer-inner {
    padding-top: 10vh;
    padding-bottom: 10vh;
    background: #fff;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    color: #000;
    @include mq($until: medium) {
      padding: 2rem;
      text-align: center;
    }
  }
  a,
  h2 {
    color: #000;
  }

  h2 {
    margin: 0;
    @include mq($until: small) {
      font-size: 1.5rem;
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
