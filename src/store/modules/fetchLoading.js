const loading = {
  state: {
    fetchLoadingNum: 0
  },
  mutations: {
    AddLoadingNum (state) {
      state.fetchLoadingNum += 1
    },
    DelLoadingNum (state) {
      state.fetchLoadingNum -= 1
    }
  },
  actions: {
    addLoadingNum ({commit}) {
      commit('AddLoadingNum')
    },
    delLoadingNum ({commit}) {
      commit('DelLoadingNum')
    }
  }
}

export default loading
