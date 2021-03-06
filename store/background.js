export const state = () => ({
  sceneLoaded: false,
})

export const mutations = {
  // methodName(state, payload)
  setSceneLoaded(state, payload) {
    state.sceneLoaded = payload
  },
}

export const getters = {
  getSceneLoaded: (state) => state.sceneLoaded,
}

export const actions = {
  setSceneLoadedAction({ commit, state }, response) {
    commit('setSceneLoaded')
  },
}
