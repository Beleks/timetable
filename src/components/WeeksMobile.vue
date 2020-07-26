<template>
  <div class="weeks">
    <div
      class="one"
      :class="{activeWeekOne: getWeek === 'one' }"
      @click="changeWeek('one')"
    >1-я неделя</div>
    <div class="two" :class="{activeWeekTwo: getWeek === 'two' }"
    @click="changeWeek('two')">2-я неделя</div>
  </div>
</template>
<script>

export default {
  methods: {
    changeWeek: function(week){
      this.$store.commit('set_week', week)
    },
  },
  computed: {
    getWeek(){
      if(this.$store.state.week == null){
        this.$store.commit('set_first_week', 'one')
        return 'one'
      }else{
        return this.$store.state.week
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.weeks {
  display: flex;
  justify-content: space-around;
  margin-top: 0.5em;
  div {
    padding: 0.2em 0.3em;
    border-radius: 5px;
  }
}
.one {
  border: 1px solid rgba(50, 183, 108, 0.5);
  color: rgb(50, 183, 108);
}
.activeWeekOne {
  border: 1px solid rgb(50, 183, 108);
  background-color: rgb(50, 183, 108);
  color: white;
}
.two {
  border: 1px solid rgba(94, 114, 228, 0.5);
  color: rgb(87, 105, 223);
}
.activeWeekTwo {
  border: 1px solid rgba(94, 114, 228, 0.5);
  background-color: rgb(87, 105, 223);
  color: white;
}
</style>