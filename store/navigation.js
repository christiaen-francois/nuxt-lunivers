export const state = () => ({
  menuVisibility: false,
  contactVisibility: false,
  overlayOpen: false,
})

export const mutations = {
  // methodName(state, payload)
  ToggleMenuVisibility(state, payload) {
    state.menuVisibility = !state.menuVisibility
    state.overlayOpen = !state.overlayOpen
  },
  ToggleContactVisibility(state, payload) {
    state.contactVisibility = !state.contactVisibility
    state.overlayOpen = !state.overlayOpen
  },
}

export const getters = {
  getMenuVisibility: (state) => state.menuVisibility,
  getContactVisibility: (state) => state.contactVisibility,
  getOverlayOpen: (state) => state.overlayOpen,
}

export const actions = {
  ToggleContactVisibilityAction({ commit, state }, response) {
    commit('ToggleContactVisibility')
  },
}
