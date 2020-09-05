<template>
  <div>
    <div class="head" v-if="anyСlasses">
      <cards-mobile
        v-for="(myText, index) in text"
        :key="index"
        :testText="myText"
        :testNum="index + 1"
        :time="time[index].t"
      ></cards-mobile>
    </div>
    <div class="NO_anyСlasses" v-if="!anyСlasses">
      <div>Нет занятий</div>
    </div>
  </div>
</template>
<script>
import CardsMobile from "@/components/CardsMobile";
export default {
  data: () => {
    return {
      time: [
        { t: "09:00 - 10:35" },
        { t: "10:45 - 12:20" },
        { t: "13:00 - 14:35" },
        { t: "14:45 - 16:20" },
        { t: "16:25 - 18:00" },
        { t: "18:05 - 19:40" },
      ],
    };
  },
  components: {
    CardsMobile,
  },
  computed: {

    // !!! =================
    // Попробыватьдругое решение глоблаьно, что бы уже где-то содрежалась информация что пар нет ?
    // занести переменные в data ?

    anyСlasses() {
      let kurs = this.$store.state.inputValue.kurs_name;
      let searchGroup = this.$store.state.inputValue.grup_name;
      let choseWeekDay = this.$store.state.choseDay;
      let choseWeek = this.$store.state.week;
      let anyСlasses;
      if (this.$store.state.vsgtu !== null) {
        let massiv = this.$store.state.vsgtu[kurs].groups;
        let res = massiv.find((g) => g.grname === searchGroup).table;
        anyСlasses = res[choseWeek][choseWeekDay].some((element) => {
          if (element.one.para.length > 2) {
            return true;
          }
        });
      }
      return anyСlasses;
    },
    text() {
      let kurs = this.$store.state.inputValue.kurs_name;
      let searchGroup = this.$store.state.inputValue.grup_name;
      let choseWeekDay = this.$store.state.choseDay;
      let choseWeek = this.$store.state.week;

      if (this.$store.state.vsgtu !== null) {
        let massiv = this.$store.state.vsgtu[kurs].groups;
        let res = massiv.find((g) => g.grname === searchGroup).table;

        // console.log(res[choseWeek][choseWeekDay]);
        return res[choseWeek][choseWeekDay];
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.head {
  margin-top: 1em;
}
</style>