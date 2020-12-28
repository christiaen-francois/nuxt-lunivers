<template>
  <nav role="navigation" aria-label="Menu principal">
    <div class="nav-inner">
      <Logo />
      <div class="mobile-toggler" @click.prevent="mobileToggle($event)">
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
        <div class="col-xl-7 offset-xl-2 col">
          <ul class="menu-list">
            <li class="menu-item">
              <nuxt-link
                to="/"
                class="menu-link"
                @click.native="mobileToggle($event)"
                >Accueil</nuxt-link
              >
            </li>
            <li class="menu-item">
              <nuxt-link
                to="/studio"
                class="menu-link"
                @click.native="mobileToggle($event)"
                >Studio</nuxt-link
              >
            </li>
            <li class="menu-item">
              <nuxt-link
                to="/projets"
                class="menu-link"
                @click.native="mobileToggle($event)"
                >Projets</nuxt-link
              >
            </li>
          </ul>
        </div>
        <div class="col-xl-3 col">Adresse</div>
      </div>
    </div>
    <div class="header-contact"></div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      gsap: null,
      toggleState: false,
      menutl: null,
      contacttl: null,
      typeForm:
        'https://form.typeform.com/to/UpLbrgsH?typeform-medium=embed-snippet',
    }
  },
  mounted() {
    this.gsap = this.$gsap
    /**
     * Mobile menu toggle animation
     */
    const nav = document.querySelector('.header-navigation')
    const navCols = document.querySelectorAll('.header-navigation .col')
    const navMenuItems = document.querySelectorAll('.header-navigation ul li')
    // const menuList = document.querySelector('.header-navigation ul')

    this.menutl = this.$gsap.timeline({ paused: true, reversed: true })
    this.menutl.to(nav, {
      opacity: 1,
      display: 'flex',
      duration: 0.2,
    })
    this.menutl.from(navCols, {
      opacity: 0,
      x: 50,
      duration: 0.4,
      stagger: 0.05,
    })
    this.menutl.from(navMenuItems, {
      opacity: 0,
      x: 50,
      duration: 0.2,
      stagger: 0.05,
    })

    /**
     * Contact menu toggle animation
     */
    const contact = document.querySelector('.header-contact')
    const svgWrapper = document.querySelector('.svg-wrapper')
    const iconClose = document.querySelector('.close-icon')
    const titleOpen = document.querySelector('.title.open')
    const titleClose = document.querySelector('.title.close')
    this.contacttl = this.$gsap.timeline({
      paused: true,
      reversed: true,
      onComplete: this.completeFunction,
      onReverseComplete: this.reverseFunction,
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
    mobileToggle(event) {
      const toggleBtn = document.querySelector('.mobile-toggler-btn')

      if (!this.toggleState) {
        toggleBtn.classList.add('open')
        this.menutl.play()
      } else {
        toggleBtn.classList.remove('open')
        this.menutl.reverse()
      }

      this.$store.commit('menu/toggle')
      this.toggleState = this.$store.state.menu.isOpen
      // console.log(this.$store.state.menu.isOpen)
    },
    contactToggle(event) {
      this.contacttl.reversed()
        ? this.contacttl.play()
        : this.contacttl.reverse()
      console.log(event)
    },
    completeFunction() {
      const contact = document.querySelector('.header-contact')
      const iframe = document.createElement('iframe')
      const gsap = this.gsap
      iframe.src = this.typeForm
      // iframe.setAttribute('width', '100%')
      iframe.style.width = '100%'
      iframe.style.height = '100%'
      iframe.style.opacity = '0'
      iframe.frameBorder = 'none'
      contact.appendChild(iframe)
      iframe.addEventListener('load', function (e) {
        const iframetl = gsap.timeline()
        iframetl.to(iframe, {
          opacity: 1,
          duration: 0.5,
        })
      })
    },
    reverseFunction() {
      const contactIframe = document.querySelector('.header-contact iframe')
      contactIframe.remove()
      console.log('reverseFunction')
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
    position: relative;
    z-index: 11;
    margin-right: 3rem;
    cursor: pointer;
    width: 2rem;
    height: 1.4rem;

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
    background: rgba($color3, 0.95);
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 10;
  }
  .header-contact {
    z-index: 12;

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

  .title-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

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
    margin-left: calc(16.6px + 0.14118vw);
    pointer-events: none;
    overflow: hidden;
    will-change: transform;
    transition: background-color 0.6s cubic-bezier(0.19, 1, 0.22, 1);

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
}
</style>
