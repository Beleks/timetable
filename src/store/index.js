import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    info: null,
    update: null
  },
  mutations: {
    set_info(state, info){
      console.log(info)
      state.update = info.datetable
      state.info = JSON.parse(info.ttable)
    }
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
    async getTimetable({commit}){
      let res = await axios
      .get("http://service.bielecki.ru/timetable/index.php")
      .then(response => (this.info = response.data[0]));

      commit('set_info', res)
    }
  },
  modules: {
  }
})
