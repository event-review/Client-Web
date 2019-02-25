import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    checkLoginStateMutator(state, val) {
      state.isLogin = val
    }
  },
  actions: {
    checkLoginState({ commit }) {
      let token = localStorage.getItem('token')
      if (token) {
        commit('checkLoginStateMutator', true)
      } else {
        commit('checkLoginStateMutator', false)
      }
    }
  }
})
