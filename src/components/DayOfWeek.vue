<template>
  <div>
    <div class="day-name row-6 border-left">
      <div class="name">{{h1day}} {{weekEn}}</div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="day-of-week row-6 border-left">
      <!-- <main-para v-for="(para, index) in main_para" :key="index"></main-para> -->
      <!--  :textContent="para" -->
    </div>
  </div>
</template>
<script>
import MainPara from "@/components/MainPara";
export default {
  // data: () => {},
  props: {
    h1day: String,
    weekEn: String
  },
  computed: {
    main_para() {
      // console.log(this.$store.state.test.path["mon"])
      // console.log(this.$store.state.test.path[`${this.WEEK}`]);
      // return this.$store.state.test.path[`${this.WEEK}`];
      // return await this.$store.state.test.path["mon"];
    }
  },
  components: {
    MainPara
  },
  mounted() {
    console.log(this.$store.state.test.path[`${this.weekEn}`]);
  },
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