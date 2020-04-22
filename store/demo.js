export const state = () => ({
  pageName: 'Vuex',
  count: 1
})

export const mutations = {
  add(state, payload) {
    state.count = state.count + payload
  }
}

export const actions = {
  addAction({ commit }, number) {
    setTimeout(() => {
      commit('add', number)
    }, 1000)
  }
}
