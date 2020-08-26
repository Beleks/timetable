import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import parsInfo from '../utils/parsInfo'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showSelect: false,
    vsgtu: null,
    info: null,
    update: null,
    inputValue: {
      kurs_name: localStorage.getItem('kurs'),
      grup_name: localStorage.getItem('grup'),
      pd_num: 2
    },
    week: localStorage.getItem('week'),
    choseDay: localStorage.getItem('day'),
    days: [
      { dayRu: "Пн", dayEn: "mon" },
      { dayRu: "Вт", dayEn: "tue" },
      { dayRu: "Ср", dayEn: "wed" },
      { dayRu: "Чт", dayEn: "thu" },
      { dayRu: "Пт", dayEn: "fri" },
      { dayRu: "Сб", dayEn: "sat" }
    ],
    blackList: ['Б568', 'Б618 моаис'],
    green: true
  },
  mutations: {
    change_show(state, value) {
      state.showSelect = value
    },
    set_info(state, info) {
      // console.log(info)
      // console.log(info.ttable)
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
      window.localStorage.setItem('grup', arr[0].name)
      state.inputValue.grup_name = arr[0].name
    },
    set_week(state, week) {
      window.localStorage.setItem('week', week)
      state.week = week
    },
    set_first_week(state, week) {
      window.localStorage.setItem('week', week)
      state.week = week
    },
    set_first_day(state, day) {
      window.localStorage.setItem('day', day)
      state.choseDay = day
    },
    set_day(state, day) {
      window.localStorage.setItem('day', day)
      state.choseDay = day
    },
    set_new_mas(state, info) {
      // console.log(info.ttable)
      let new_info = JSON.parse(info.ttable)
      // console.log(new_info)
      

      let main_masiv = new_info

      let index_1
      let index_2
      let key_1
      let key_2

      main_masiv.forEach((element, index) => {
        index_1 = index
        element.groups.forEach((group, index) => {
          index_2 = index
          // console.log(new_info[index_1].groups[index_2], 'from state')
          for (let key in group.table) {
            key_1 = key
            // let obj = new_info[index_1].groups[index_2].table[key_1]

            let week = group.table[key]
            for (let key in week) {
              key_2 = key
              let mas = new_info[index_1].groups[index_2].table[key_1][key_2]
              week[key] = []
              mas.forEach(element => {

                week[key].push(Vue.parsInfo(element))
                // console.log(Vue.parsInfo(element), 'from state')
              })

            }
          }
        })
      });

      state.vsgtu = main_masiv

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
    async getTimetable({ commit, state }) {
      try {
        let res = await axios
          .get("https://service.bielecki.ru/timetable/index.php?mode=table&spec=bakalavriat")
          .then(response => (this.info = response.data[0]));
          console.log(this.info)
        commit('set_info', res)
        commit('set_new_mas', res)
      }
      catch{

      }

    }
  },
  modules: {
  }
})
