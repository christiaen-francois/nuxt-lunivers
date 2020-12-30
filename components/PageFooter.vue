<template>
  <footer class="page-footer">
    <div class="container-fluid">
      <div class="page-footer-inner">
        <div class="row align-items-center">
          <div class="col-md-4 offset-md-1 mb-4 mb-md-0">
            <h2>Houston nous avons la solution à votre problème.</h2>
          </div>
          <div class="col-md-4 offset-md-2">
            <a
              href="#"
              class="btn btn-primary"
              @click.prevent="menuToggle($event)"
              >Etablir le contact</a
            >
            <p>
              <small>Contact imminent.... Je répète, contact imminent!</small>
            </p>
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
  computed: {
    ...mapState({
      menuVisibility: (state) => state.navigation.menuVisibility,
      contactVisibility: (state) => state.navigation.contactVisibility,
    }),
  },
  methods: {
    ...mapMutations('navigation', ['ToggleContactVisibility']), // https://stackoverflow.com/questions/60335163/how-to-correctly-use-nuxt-vue-mapmutations
    ...mapActions('navigation', ['ToggleContactVisibilityAction']),
    menuToggle(event) {
      // this.ToggleMenuVisibility()
      const gsap = this.$gsap
      this.ToggleContactVisibilityAction(gsap)
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
  }
  a,
  h2 {
    color: #000;
  }

  h2 {
    margin: 0;
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
