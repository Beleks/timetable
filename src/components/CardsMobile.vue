<template>
  <div class="card">
    <div class="head">
      <div
        class="number"
        :class="{
          green: choseWeek === 'week1',
          blue: choseWeek === 'week2'
          }"
      >{{testNum}}</div>
      <div class="time"></div>
    </div>
    <div class="main-text">{{testText}}</div>
    <div class="footer"></div>
  </div>
</template>
<script>
export default {
  props: {
    // textContent: String,
    // weekEn: String,
    testText: String,
    testNum: Number,
    // para_green: Boolean,
  },
  computed: {
    choseWeek() {
      return this.$store.state.week;
    },
    content(){
      
    }
  },
};
</script>
<style lang="scss" scoped>
.card {
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  // font-size: 0.78rem;
  min-height: 80px;
  border: 10px;
  padding: 0.3em;
  margin: 0.2em;

  box-shadow: 0px 0px 16px 0px rgba(166, 166, 166, 0.27);
  border-radius: 10px;
}
.head {
  display: flex;
  justify-content: space-between;
  .number {
    font-size: 0.9rem;
    color: white;
    border-radius: 15px;
    padding: 0.2em 0.5em;
  }
}

.green {
  background-color: rgb(50, 183, 108);
}
.blue {
  background-color: rgba(70, 90, 220, 0.91);
}
</style>