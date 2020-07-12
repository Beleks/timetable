<template>
  <div>
    <div class="week-one" v-if="currentWeek === 'one'">
      <div class="block">
        <div class="top">
          <div class="top-par">1</div>
          <div class="top-time">09:00 - 10:35</div>
        </div>
        <div class="main-section">лек. Экологические аспекты регионального природопользования</div>
        <div class="footer">
          <div class="teacher">Иметхенов О.А</div>
          <div class="class">а.8240 эбж</div>
        </div>
      </div>
    </div>
    <div class="week-two" v-if="currentWeek === 'two'">
      <div class="block">
        <div class="top">
          <div class="top-par">1</div>
          <div class="top-time">09:00 - 10:35</div>
        </div>
        <div class="main-section">лек. Экологические аспекты регионального природопользования</div>
        <div class="footer">
          <div class="teacher">Иметхенов О.А</div>
          <div class="class">а.8240 эбж</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    currentWeek: String
  }
};
</script>
<style lang="scss" scoped>
.block {
  // border: 1px solid gray;
  border-radius: 10px;
  margin: 1em;
  display: flex;
  flex-direction: column;

  padding: 0.5em;
  // ======================
  box-shadow: 0px 0px 16px 0px rgba(166, 166, 166, 0.27);
  min-height: 130px;
  justify-content: space-between;
}
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &-time {
    display: flex;
    justify-content: center;
    align-items: center;
    // background-color: rgb(251,140,0);
    background-color: rgb(50, 183, 108);
    border-radius: 10px;
    padding: 0.1em 0.3em;
    color: white;
  }
  &-par {
    background-color: rgb(50, 183, 108);
    color: white;
    border-radius: 15px;
    padding: 0.2em 0.5em;
  }
}
.main-section {
  margin-top: 0.5em;
}
.footer {
  margin-top: 0.4em;
  display: flex;
  justify-content: space-between;
  .teacher {
    font-style: italic;
    border-bottom: 1px solid grey;
  }
  .class {
    background-color: rgb(251, 140, 0);
    border-radius: 10px;
    padding: 0.1em 0.3em;
    color: white;
  }
}
</style>