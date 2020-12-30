<template>
  <nav role="navigation" aria-label="Menu principal">
    <div class="nav-inner">
      <Logo />
      <div class="mobile-toggler" @click.prevent="menuToggle($event)">
        <span class="mobile-toggler-btn"></span>
      </div>
      <button class="contact-btn" @click.prevent="contactToggle($event)">
        <span class="title-wrapper">
          <span class="title open">Houston?</span>
          <span class="title close">Fermer</span>
        </span>
        <span class="icon">
          <span class="icon-filler"></span>
          <span class="svg-wrapper">
            <svg viewBox="0 0 34 18" data-v-175da50e="">
              <path
                d="M9 1.2h16c4.3 0 7.8 3.5 7.8 7.8h0c0 4.3-3.5 7.8-7.8 7.8H9c-4.3 0-7.8-3.5-7.8-7.8h0c0-4.3 3.5-7.8 7.8-7.8z"
                class="border"
                data-v-175da50e=""
              ></path>
              <path
                d="M10 7.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5S8.5 9.8 8.5 9s.7-1.5 1.5-1.5z"
                class="ball"
                data-v-175da50e=""
              ></path>
              <path
                d="M17 7.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5z"
                class="ball"
                data-v-175da50e=""
              ></path>
              <path
                d="M24 7.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5z"
                class="ball"
                data-v-175da50e=""
              ></path>
            </svg>
          </span>
          <span class="close-icon">
            <span class="top"></span>
            <span class="bottom"></span>
          </span>
        </span>
      </button>
    </div>
    <div class="menu header-navigation">
      <div class="row align-items-end w-100">
        <div class="col-xl-7 offset-xl-2 col-content">
          <ul class="menu-list">
            <li class="menu-item">
              <nuxt-link
                to="/"
                class="menu-link"
                @click.native="menuToggle($event)"
                >Accueil</nuxt-link
              >
            </li>
            <li class="menu-item">
              <nuxt-link
                to="/studio"
                class="menu-link"
                @click.native="menuToggle($event)"
                >Studio</nuxt-link
              >
            </li>
            <li class="menu-item">
              <nuxt-link
                to="/projets"
                class="menu-link"
                @click.native="menuToggle($event)"
                >Projets</nuxt-link
              >
            </li>
          </ul>
        </div>
        <div class="col-xl-3 col-content">Adresse</div>
      </div>
    </div>
    <div class="header-contact">
      <div class="header-contact-inner">
        <!-- <iframe
          id="typeform-full"
          width="100%"
          height="100%"
          frameborder="0"
          allow="camera; microphone; autoplay; encrypted-media;"
          src="https://form.typeform.com/to/UpLbrgsH?typeform-medium=embed-snippet"
        ></iframe>
        <script
          type="text/javascript"
          src="https://embed.typeform.com/embed.js"
        ></script> -->
      </div>
    </div>
  </nav>
</template>
<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Navigation',
  data() {
    return {
      menutl: null,
      contacttl: null,
      typeForm:
        'https://form.typeform.com/to/UpLbrgsH?typeform-medium=embed-snippet',
    }
  },
  computed: {
    ...mapState({
      menuVisibility: (state) => state.navigation.menuVisibility,
      contactVisibility: (state) => state.navigation.contactVisibility,
    }),
  },
  watch: {
    contactVisibility(newValue, oldValue) {
      // console.log(`Updating from ${oldValue} to ${newValue}`)
      if (newValue === true) {
        this.contacttl.play()
      } else {
        this.contacttl.reverse()
      }
      if (this.menuVisibility) {
        this.menuToggle()
      }
      this.bodyOverflow()
    },
  },
  mounted() {
    /**
     * Mobile menu toggle animation
     */

    const navigation = document.querySelector('.header-navigation')
    const navigationContents = document.querySelectorAll(
      '.header-navigation .col-content'
    )
    const navigationMenuItems = document.querySelectorAll(
      '.header-navigation ul li'
    )

    this.menutl = this.$gsap.timeline({ paused: true, reversed: true })
    this.menutl.to(navigation, {
      opacity: 1,
      display: 'flex',
      duration: 0.2,
    })
    this.menutl.from(navigationContents, {
      opacity: 0,
      x: 50,
      duration: 0.4,
      stagger: 0.05,
    })
    this.menutl.from(navigationMenuItems, {
      opacity: 0,
      x: 50,
      duration: 0.2,
      stagger: 0.05,
    })

    /**
     * Contact menu toggle animation
     */
    const contact = document.querySelector('.header-contact')
    // const contactForm = document.querySelector('.header-contact .typeform-widget')
    const svgWrapper = document.querySelector('.svg-wrapper')
    const iconClose = document.querySelector('.close-icon')
    const titleOpen = document.querySelector('.title.open')
    const titleClose = document.querySelector('.title.close')
    this.contacttl = this.$gsap.timeline({
      paused: true,
      reversed: true,
      // onComplete: this.completeFunction,
      // onReverseComplete: this.reverseFunction,
    })
    this.contacttl.to(contact, {
      opacity: 1,
      display: 'flex',
      duration: 0.2,
    })
    this.contacttl.to(iconClose, {
      yPercent: -100,
      duration: 0.2,
      ease: 'power2.out',
    })
    this.contacttl.to(
      svgWrapper,
      {
        yPercent: -100,
        duration: 0.2,
        ease: 'power2.out',
      },
      '-=0.15'
    )
    this.contacttl.to(
      titleOpen,
      {
        yPercent: -100,
        duration: 0.2,
        ease: 'power2.out',
      },
      '-=0.25'
    )
    this.contacttl.from(
      titleClose,
      {
        yPercent: 100,
        duration: 0.2,
        ease: 'power2.out',
      },
      '-=0.15'
    )
  },
  methods: {
    ...mapMutations('navigation', [
      'ToggleMenuVisibility',
      'ToggleContactVisibility',
    ]), // https://stackoverflow.com/questions/60335163/how-to-correctly-use-nuxt-vue-mapmutations
    menuToggle(event) {
      const toggleBtn = document.querySelector('.mobile-toggler-btn')
      if (!this.menuVisibility) {
        toggleBtn.classList.add('open')
        this.menutl.play()
      } else {
        toggleBtn.classList.remove('open')
        this.menutl.reverse()
      }
      this.ToggleMenuVisibility()
      this.bodyOverflow()
    },
    contactToggle(event) {
      this.ToggleContactVisibility()
    },
    bodyOverflow() {
      if (this.menuVisibility || this.contactVisibility) {
        document.body.classList.add('has-overlay')
      } else {
        document.body.classList.remove('has-overlay')
      }
    },
  },
}
</script>
<style lang="scss" scoped>
nav {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 1.5rem 1.5rem 0 30px;
  z-index: 200;

  @include mq($from: small) {
    padding: 2rem 2rem 0 2rem;
  }

  .nav-inner {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .mobile-toggler {
    z-index: 11;
    cursor: pointer;
    width: 2rem;
    height: 1.1rem;

    @include mq($until: small) {
      position: fixed;
      bottom: 2rem;
      left: 1.5rem;
    }

    @include mq($from: small) {
      position: relative;
      margin-right: 3rem;
    }

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

  .header-contact,
  .header-navigation {
    position: fixed;
    top: 0;
    left: 0;
    display: none;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 10;
  }
  .header-contact {
    z-index: 12;

    @include mq($until: small) {
      padding-bottom: 3rem;
    }
    & > div,
    iframe {
      height: 100%;
      width: 100%;
      border: none;
    }
  }

  .header-navigation {
    overflow-y: scroll;
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
.contact-btn {
  position: relative;
  z-index: 13;
  margin: 0;
  padding: 0;
  border-radius: 0;
  border: none;
  background: 0 0;
  outline: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;

  @include mq($until: small) {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
  }

  .title-wrapper {
    position: relative;
    display: none;

    @include mq($from: small) {
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .title {
      display: block;
      font-size: calc(16.2px + 0.04706vw);
      color: #ebeeef;
      line-height: 1;
      pointer-events: none;
      transition: color 0.6s cubic-bezier(0.19, 1, 0.22, 1);
      will-change: transform;

      &:last-of-type {
        position: absolute;
        opacity: 1;
        font-weight: initial;
        text-shadow: initial;
      }
    }
  }

  .icon {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 54px;
    height: 54px;
    background-color: #fff;
    border-radius: 100%;
    border-bottom-right-radius: 0;
    margin-left: calc(16.6px + 0.14118vw);
    pointer-events: none;
    overflow: hidden;
    will-change: transform;
    transition: background-color 0.6s cubic-bezier(0.19, 1, 0.22, 1);

    @include mq($from: small) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 100%;
    }

    .svg-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        display: block;
        width: 34px;
        height: 18px;

        .border {
          fill: none;
          stroke: $color1;
          stroke-width: 1.5;
          transition: stroke 0.6s cubic-bezier(0.19, 1, 0.22, 1);
        }

        .ball {
          fill: $color1;
          transition: fill 0.6s cubic-bezier(0.19, 1, 0.22, 1);
        }
      }
    }

    .close-icon {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: translate3d(0, 100%, 0);

      span {
        position: absolute;
        width: 22px;
        border-radius: 1px;
        height: 1.5px;
        background-color: $color1;

        &.top {
          transform: rotate(45deg);
        }

        &.bottom {
          transform: rotate(-45deg);
        }
      }
    }
  }

  .icon-filler {
    position: absolute;
    width: 250%;
    height: 200%;
    background-color: #ebeeef;
    border-radius: 50%;
    top: -50%;
    left: -75%;
    transform: translateY(75%);
    display: block;
    will-change: transform;
  }
  div[class*='mobile-modal__Wrapper'] {
    padding-bottom: 3rem;
  }
}
</style>
