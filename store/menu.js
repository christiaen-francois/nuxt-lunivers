export const state = () => ({
  isOpen: false,
  pageContentEl: null,
})

export const mutations = {
  refreshPageContentEl(state, el) {
    state.pageContentEl = el
  },
  toggle(state) {
    state.isOpen = !state.isOpen
  },
}

export const getters = {
  isOpen: (state) => state.isOpen,
  pageContentEl: (state) => state.pageContentEl,
}
