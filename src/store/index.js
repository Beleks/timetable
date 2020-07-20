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
    test_db: [
      {course: "1 курс", groups: []},
      {course: "1 курс", groups: []},
      {course: "1 курс", groups: []},
      {course: "1 курс", groups: []},
      {course: "1 курс", groups: []},
      {course: "1 курс", groups: []},
    ],
    days: [
      { dayRu: "Пн", dayEn: "mon" },
      { dayRu: "Вт", dayEn: "tue" },
      { dayRu: "Ср", dayEn: "wed" },
      { dayRu: "Чт", dayEn: "thu" },
      { dayRu: "Пт", dayEn: "fri" },
      { dayRu: "Сб", dayEn: "sat" }
    ]
  },
  mutations: {
    set_info(state, info) {
      console.log(info)
      state.update = info.datetable
      state.info = JSON.parse(info.ttable)
      // state.test.path = state.info[0].groups[0].table.week1
    },
    set_name_grup(state, grupInfo) {
      window.localStorage.setItem('grup', grupInfo)
      state.inputValue.grup_name = grupInfo
    },
    set_name_kurs(state, kursInfo) {
      window.localStorage.setItem('kurs', kursInfo)
      state.inputValue.kurs_name = kursInfo
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
    async getTimetable({ commit }) {
      let res = await axios
        .get("http://service.bielecki.ru/timetable/index.php")
        .then(response => (this.info = response.data[0]));

      commit('set_info', res)
    }
  },
  modules: {
  }
})
