<template>
  <div class="head">
    <cards-mobile
      v-for="(myText, index) in text"
      :key="index"
      :testText="myText"
      :testNum="index + 1"
      :time="time[index].t"
    ></cards-mobile>
  </div>
</template>
<script>
import CardsMobile from "@/components/CardsMobile";
export default {
  data: ()=>{
    return {
      time: [
        {t: "09:00 - 10:35"},
        {t: "10:45 - 12:20"},
        {t: "13:00 - 14:35"},
        {t: "14:45 - 16:20"},
        {t: "16:25 - 18:00"},
        {t: "18:05 - 19:40"}
      ]
    }
  },
  components: {
    CardsMobile,
  },
  computed: {
    text() {
      let kurs = this.$store.state.inputValue.kurs_name;
      let searchGroup = this.$store.state.inputValue.grup_name;
      let choseWeekDay = this.$store.state.choseDay;
      let choseWeek = this.$store.state.week;

      if (this.$store.state.info !== null) {
        let massiv = this.$store.state.info[kurs].groups;

        let res = massiv.find((g) => g.grname === searchGroup).table;
        return res[choseWeek][choseWeekDay];
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.head{
  margin-top: 1em;
}
</style>