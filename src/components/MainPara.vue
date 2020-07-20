<template>
  <div class="para">
    <div class="header">
      <div class="nuber">{{weekEn}}</div>
      <div class="room">а.8234 геол</div>
    </div>
    <div class="section">{{textContent}} {{text}}</div>
    <div class="footer">
      <div>ХАНДУЕВА В.Д.</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    textContent: String,
    weekEn: String
  },
  computed: {
    // kurs() {
    //   return this.$store.state.inputValue.kurs_name;
    // },
    group() {
      return this.$store.state.inputValue.grup_name;
    },
    text() {
      let kurs = this.$store.state.inputValue.kurs_name;
      // let searchGroup = this.$store.state.inputValue.grup_name;
      if (this.$store.state.info !== null) {
        let searchGroup = this.$store.state.inputValue.grup_name;
        let massiv = this.$store.state.info[kurs - 1].groups;
        console.log(searchGroup)
        let res = massiv.find(g => g.grname === searchGroup).table
        // console.log(this.weekEn)
        let choseWeek = this.weekEn
        console.log(res.week1[choseWeek])
        // res.week1.`${this.weekEn}`

        return res.week1[choseWeek];
        // masivGroup = 
        // let getTable = this.$store.state.info[kurs - 1].groups.find(group => group.grname === searchGroup).table
        // return getTable

      }

      // console.log(this.$store.state.info[kurs - 1].groups);
      // return this.$store.state.info[kurs - 1].groups;

      // console.log(this.$store.state.info[`${kurs}`])
      // return this.$store.state.info[0].groups
    }
  },
  beforeCreate() {
    // this.$store.dispatch("getTimetable");
  }
};
</script>>
<style lang="scss" scoped>
.para {
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  font-size: 0.78rem;
  border: 10px;
  padding: 0.3em;
  margin: 0.2em;

  box-shadow: 0px 0px 16px 0px rgba(166, 166, 166, 0.27);
  border-radius: 10px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nuber {
      background-color: rgb(50, 183, 108);
      color: white;
      border-radius: 10px;
      padding: 0.2em 0.5em;
    }
    .room {
      background-color: rgb(251, 140, 0);
      border-radius: 10px;
      padding: 0.1em 0.3em;
      color: white;
    }
  }
  .section {
    margin-top: 0.2em;
  }
  .footer {
    font-size: 0.75rem;
    margin-top: 0.2em;
    font-style: italic;
    display: flex;
    justify-content: center;
    div {
      border-bottom: 1px solid grey;
    }
  }
}
</style>