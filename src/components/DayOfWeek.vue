<template>
  <div>
    <div class="day-name row-6 border-left">
      <div class="name">{{h1day}}</div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="day-of-week row-6 border-left">
      <main-para
        v-for="(myText, index) in text"
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
      mytestM: ["1", "2", "3", "4", "5", "6"]
    };
  },
  props: {
    h1day: String,
    weekEn: String
  },
  computed: {
    main_para() {},
    group() {
      return this.$store.state.inputValue.grup_name;
    },
    text() {
      let kurs = this.$store.state.inputValue.kurs_name;
      if (this.$store.state.info !== null) {
        let searchGroup = this.$store.state.inputValue.grup_name;
        let massiv = this.$store.state.info[kurs - 1].groups;

        let res = massiv.find(g => g.grname === searchGroup).table;

        let choseWeek = this.weekEn;
        console.log(res.week1[choseWeek]);

        return res.week1[choseWeek];
      }
    }
  },
  components: {
    MainPara
  },
  mounted() {}
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
.border-left {
  border-left: 2px solid rgb(50, 183, 108);
  padding-left: 0.2em;
}
</style>