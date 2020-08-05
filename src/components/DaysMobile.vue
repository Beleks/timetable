<template>
  <div class="days">
    <div
      v-for="tab in tabs"
      :key="tab.t"
      :class="['tab-button', { 
        active: choseTab === `${tab.t}`,
        green: choseWeek === 'week1',
        blue: choseWeek === 'week2'}]"
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
        { t: "thu", ruT: "Чт" },
        { t: "fri", ruT: "Пт" },
        { t: "sat", ruT: "Сб" },
      ],
    };
  },
  computed: {
    choseTab() {
      if (this.$store.state.choseDay == null) {
        this.$store.commit("set_first_day", "mon");
        return "mon";
      } else {
        return this.$store.state.choseDay;
      }
    },
    choseWeek() {
      return this.$store.state.week;
    },
  },
  methods: {
    changeDay: function (day) {
      this.$store.commit("set_day", day);
    },
  },
};
</script>
<style lang="scss" scoped>
.days {
  margin-top: 0.7em;
  display: flex;
  justify-content: space-around;
}
.tab-button {
  font-size: 1.2rem;
  padding: 0 3px;
}
.green {
  border-bottom-color: rgb(50, 183, 108);
}
.blue {
  border-bottom-color: rgba(70, 90, 220, 0.91);
}

.active {
  border-bottom-style: solid;
}
</style>