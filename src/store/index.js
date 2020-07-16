import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
    // SET_SAME_INFO: (state, info){
    //   state.info = info 
    // }
  },
  actions: {
    // GET_SAME_INFO({ commit }) {
    //   return axios('http://service.bielecki.ru/test', {
    //     method: 'GET'
    //   })
    //     .then((response)=>{
    //       commit('SET_SAME_INFO', response.data)
    //     })
    // }
  },
  modules: {
  }
})
