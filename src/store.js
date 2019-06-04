import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentId: false
  },
  mutations: {
    changeCurrentId (state, currentId) {
      state.currentId = currentId
    }
  },
  actions: {
    changeCurrentId (ctx, currentId) {
      ctx.commit('changeCurrentId', currentId)
    }
  }
})
