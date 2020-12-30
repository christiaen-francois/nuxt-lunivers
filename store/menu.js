export const state = () => ({
  isOpen: false,
  pageContentEl: null,
})

export const mutations = {
  // methodName(state, payload)
  refreshPageContentEl(state, payload) {
    state.pageContentEl = payload
  },
  toggle(state, payload) {
    state.isOpen = !state.isOpen
  },
}

export const getters = {
  isOpen: (state) => state.isOpen,
  pageContentEl: (state) => state.pageContentEl,
}
