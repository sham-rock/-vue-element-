import Vue from 'vue'
import Vuex from 'vuex'
import fetchLoading from './modules/fetchLoading'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    fetchLoading
  },
  getters: {

  }
})

export default store
