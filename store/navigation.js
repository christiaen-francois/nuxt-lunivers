export const state = () => ({
  menuVisibility: false,
  contactVisibility: false,
  overlayOpen: false,
  typeFormUrl: null,
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
  changeTypeFormUrl(state, payload) {
    state.typeFormUrl = payload
  },
}

export const getters = {
  getMenuVisibility: (state) => state.menuVisibility,
  getContactVisibility: (state) => state.contactVisibility,
  getOverlayOpen: (state) => state.overlayOpen,
  getTypeFormUrl: (state) => state.overlayOpen,
}

export const actions = {
  ToggleContactVisibilityAction({ commit, state }, response) {
    commit('ToggleContactVisibility')
  },
  changeTypeFormUrlAction({ commit, state }, response) {
    commit('changeTypeFormUrl')
  },
}
