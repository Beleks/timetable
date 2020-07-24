<template>
  <div :class="{border_left_green: green,
    border_left_blue: !green}">
    <div class="day-name row-6 border_left">
      <div class="name">{{h1day}}</div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="day-of-week row-6 border_left">
      <main-para
        v-for="(myText, index) in text"
        :para_green="para_green"
        :key="index"
        :testText="myText"
        :testNum="index + 1"
      ></main-para>
    </div>
  </div>
</template>
<script>
import MainPara from "@/components/MainPara";
export default {
  data: () => {
    return {
      mytestM: ["1", "2", "3", "4", "5", "6"],
    };
  },
  props: {
    h1day: String,
    weekEn: String,
    choseWeek: String,
    green: Boolean,
    // green_border: String
  },
  computed: {
    para_green() {
      // Ипарвить цвет
      return this.green;
    },
    main_para() {},
    group() {
      return this.$store.state.inputValue.grup_name;
    },
    text() {
      let kurs = this.$store.state.inputValue.kurs_name;
      if (this.$store.state.info !== null) {
        let searchGroup = this.$store.state.inputValue.grup_name;
        let massiv = this.$store.state.info[kurs - 1].groups;

        let res = massiv.find((g) => g.grname === searchGroup).table;

        let choseWeekDay = this.weekEn;
        let choseWeek = this.choseWeek;

        return res[choseWeek][choseWeekDay];
      }
    },
  },
  components: {
    MainPara,
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.row-6 {
  display: grid;
  grid-template-columns: repeat(6, minmax(130px, 1fr));
}
.day-name {
  margin-top: 1em;
  max-height: 40px;
  .name {
    display: flex;
    margin: 0.2em;
    font-size: 1.2rem;
  }
}
.border_left {
  // border-left: 2px solid rgba(70, 90, 220, 0.910);
  padding-left: 0.2em;
}
.border_left_green {
  border-left: 2px solid rgb(50, 183, 108);
}
.border_left_blue {
  border-left: 2px solid rgb(87, 105, 223);
}
</style>