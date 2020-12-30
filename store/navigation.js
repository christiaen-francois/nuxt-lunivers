export const state = () => ({
  menuVisibility: false,
  contactVisibility: false,
  contactTimeline: null,
})

export const mutations = {
  // methodName(state, payload)
  ToggleMenuVisibility(state, payload) {
    state.menuVisibility = !state.menuVisibility
  },
  ToggleContactVisibility(state, payload) {
    state.contactVisibility = !state.contactVisibility
  },
  gsapContactTimeline(state, payload) {
    // const gsap = payload
    // state.contactTimeline = gsap.timeline({
    //   paused: true,
    //   reversed: true,
    // })
  },
}

export const getters = {
  getMenuVisibility: (state) => state.menuVisibility,
  getContactVisibility: (state) => state.contactVisibility,
}

export const actions = {
  ToggleContactVisibilityAction({ commit, state }, response) {
    const gsap = response
    if (state.contactTimeline == null) {
      console.log('Timeline à mettre bro')
      commit('gsapContactTimeline', gsap)
    } else {
      console.log('Timeline OK')
    }

    if (!state.contactVisibility) {
      console.log('Play')
    } else {
      console.log('Reverse')
    }

    commit('ToggleContactVisibility')
  },
}
