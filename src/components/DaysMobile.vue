<template>
  <div class="days">
    <div
      v-for="tab in tabs"
      :key="tab.t"
      :class="['tab-button', { active: choseTab === `${tab.t}` }]"
      @click="changeDay(tab.t)"
    >{{tab.ruT}}</div>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      tabs: [
        { t: "mon", ruT: "Пн" },
        { t: "tue", ruT: "Вт" },
        { t: "wed", ruT: "Ср" },
        { t: "thu", ruT: "Чтв" },
        { t: "fri", ruT: "Пт" },
        { t: "sat", ruT: "Сб" },
      ],
    };
  },
  computed: {
    choseTab(){
      if(this.$store.state.choseDay == null){ 
        this.$store.commit('set_first_day', 'mon')
        return 'mon'
      }else{
        return this.$store.state.choseDay
      }
    }
  },
  methods: {
    changeDay: function(day){
      this.$store.commit('set_day', day)
    }
  }
};
</script>
<style lang="scss" scoped>
.days {
  margin-top: 0.5em;
  display: flex;
  justify-content: space-around;
}
.tab-button {
  font-size: 1.1rem;
}

.active {
  border-bottom: 2px solid rgb(50, 183, 108);
}
</style>