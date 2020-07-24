import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    info: null,
    update: null,
    inputValue: {
      kurs_name: localStorage.getItem('kurs'),
      grup_name: localStorage.getItem('grup')
    },
    days: [
      { dayRu: "Пн", dayEn: "mon" },
      { dayRu: "Вт", dayEn: "tue" },
      { dayRu: "Ср", dayEn: "wed" },
      { dayRu: "Чт", dayEn: "thu" },
      { dayRu: "Пт", dayEn: "fri" },
      { dayRu: "Сб", dayEn: "sat" }
    ],
    green: true
  },
  mutations: {
    set_info(state, info) {

      state.update = info.datetable
      state.info = JSON.parse(info.ttable)

    },
    set_name_grup(state, grupInfo) {
      window.localStorage.setItem('grup', grupInfo)
      state.inputValue.grup_name = grupInfo
    },
    set_name_kurs(state, kursInfo) {
      window.localStorage.setItem('kurs', kursInfo)
      state.inputValue.kurs_name = kursInfo
    },
    set_group_after_arr(state, arr) {
      window.localStorage.setItem('grup', arr[0])
      state.inputValue.grup_name = arr[0]
    },

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
    async getTimetable({ commit, state }) {
      let res = await axios
        .get("http://service.bielecki.ru/timetable/index.php")
        .then(response => (this.info = response.data[0]));

      commit('set_info', res)
    }
  },
  modules: {
  }
})
