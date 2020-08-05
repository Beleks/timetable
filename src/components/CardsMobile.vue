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
      <div
        class="time"
        :class="{
          green: choseWeek === 'week1',
          blue: choseWeek === 'week2'
          }"
      >{{time}}</div>
    </div>
    <div class="main-text">{{testText.para}}</div>
    <div class="footer">
      <div class="prepod">{{testText.prepod}}</div>
      <div :class="{room: testText.class !==null}">{{testText.class}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    // textContent: String,
    // weekEn: String,
    testText: Object,
    testNum: Number,
    time: String,
    // para_green: Boolean,
  },
  computed: {
    choseWeek() {
      return this.$store.state.week;
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  // align-items: center;

  // font-size: 0.78rem;
  min-height: 90px;
  border: 10px;
  padding: 0.3em;
  margin: 0.4em 0.2em;

  box-shadow: 0px 0px 16px 0px rgba(166, 166, 166, 0.27);
  border-radius: 10px;
}
.card > div:not(:first-child) {
  margin-top: 0.3em;
}
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .number {
    // font-size: 0.9rem;
    color: white;
    border-radius: 15px;
    padding: 0.1em 0.4em;
  }
  .time {
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // font-size: 0.9rem;
    color: white;
    // background-color: rgba(243, 156, 17, 0.9);
    border-radius: 15px;
    padding: 0.1em 0.5em;
  }
}
.main-text {
  font-weight: bold;
  font-size: 0.9rem;
}

.green {
  background-color: rgb(50, 183, 108);
}
.blue {
  background-color: rgba(70, 90, 220, 0.91);
}

// footer------------------------
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .room {
    background-color: rgba(243, 156, 17, 0.9);
    // font-size: 0.9rem;
    color: white;
    border-radius: 15px;
    padding: 0.1em 0.5em;
  }
  .prepod {
    font-size: 0.9rem;
    // border-bottom: 1px solid gray;
    // font-weight: 300;
    font-style: italic;
  }
}
</style>