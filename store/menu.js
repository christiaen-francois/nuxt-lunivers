export const state = () => ({
  isOpen: false,
})

export const mutations = {
  toggle(state) {
    state.isOpen = !state.isOpen
  },
}

export const getters = {
  isOpen: (state) => state.isOpen,
}
