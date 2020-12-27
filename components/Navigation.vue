<template>
  <nav role="navigation" aria-label="Menu principal">
    <div class="nav-inner">
      <Logo />
    </div>
    <div class="mobile-toggler" @click.prevent="mobileToggle()">
      <span class="mobile-toggler-btn"></span>
    </div>
    <div class="menu header-navigation">
      <div class="row aligh-middle w-100">
        <div class="col-xl-10 offset-xl-1">
          <ul class="menu-list">
            <li class="menu-item">
              <nuxt-link to="/" class="menu-link" @click.native="mobileToggle()"
                >Accueil</nuxt-link
              >
            </li>
            <li class="menu-item">
              <nuxt-link
                to="/studio"
                class="menu-link"
                @click.native="mobileToggle()"
                >Studio</nuxt-link
              >
            </li>
            <li class="menu-item">
              <nuxt-link
                to="/projets"
                class="menu-link"
                @click.native="mobileToggle()"
                >Projets</nuxt-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      toggleState: false,
      menutl: null,
    }
  },
  mounted() {
    const mobileNavigation = document.querySelector('.header-navigation')
    // const menuList = document.querySelector('.header-navigation ul')
    const menuItems = document.querySelectorAll('.header-navigation ul li')

    this.menutl = this.$gsap.timeline({ paused: true, reversed: true })
    this.menutl.to(mobileNavigation, {
      opacity: 1,
      display: 'flex',
      duration: 0.2,
    })
    this.menutl.from(menuItems, {
      opacity: 0,
      x: 50,
      duration: 0.2,
      stagger: 0.01,
    })
  },
  methods: {
    mobileToggle(event) {
      const toggleBtn = document.querySelector('.mobile-toggler-btn')

      if (!this.showMenu) {
        toggleBtn.classList.add('open')
        this.menutl.play()
      } else {
        toggleBtn.classList.remove('open')
        this.menutl.reverse()
      }

      this.$store.commit('menu/toggle')
      this.showMenu = this.$store.state.menu.isOpen
      // console.log(this.$store.state.menu.isOpen)
    },
  },
}
</script>
<style lang="scss" scoped>
nav {
  position: fixed;
  width: 100%;
  height: 0;
  top: 0;
  left: 0;
  padding: 2rem 2rem 0 2rem;
  z-index: 200;

  .nav-inner {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .mobile-toggler {
    position: absolute;
    width: 2rem;
    height: 1.4rem;
    top: 1.6rem;
    right: 25px;
    z-index: 11;
    cursor: pointer;

    &-btn {
      position: absolute;
      top: 0.5rem;
      right: 0;
      width: 1.6rem;
      height: 2px;
      background: #fff;
      @include transitionPrefixMultiple(0.4s, all);

      &::before {
        content: '';
        position: absolute;
        top: -0.5rem;
        width: 2rem;
        height: 2px;
        background: #fff;
        @include transitionPrefixMultiple(0.4s, all);
      }

      &::after {
        content: '';
        position: absolute;
        top: 0.5rem;
        width: 1.2rem;
        height: 2px;
        background: #fff;
        @include transitionPrefixMultiple(0.4s, all);
      }

      &.open {
        transform: rotate(720deg);
        background: transparent;

        &::before {
          transform: rotate(45deg) translate(5px, 8px);
        }

        &::after {
          width: 2rem;
          transform: rotate(-45deg) translate(3px, -6px);
        }
      }
    }
  }

  .header-navigation {
    position: fixed;
    top: 0;
    left: 0;
    display: none;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    background: rgba($color3, 0.95);
    padding: 0;
    margin: 0;
    opacity: 0;
    overflow-y: scroll;
    z-index: 10;
    -ms-flex-align: center;
    align-items: center;

    .menu-list {
      margin: 0;
      padding: 0;
      list-style: none;

      li {
        font-size: 2.8rem;
        line-height: 1;

        @include mq($from: medium) {
          font-size: 90px;
        }
      }
      a {
        color: #fff;
        text-transform: lowercase;
        font-weight: 500;

        &:hover {
          color: transparent;
          -webkit-text-stroke: 1.5px #fff;
        }
      }
    }
  }
}
</style>
