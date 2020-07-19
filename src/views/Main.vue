<template>
  <div>
    <div class="header">
      <div class="grup">
        <select name id>
          <option disabled value>Выберите один из вариантов</option>
          <option>Бакалавриат, специалитет</option>
        </select>
        <select name id v-model="krs">
          <option disabled value>Выберите курс</option>
          <option value="1">1 курс</option>
          <option value="2">2 курс</option>
        </select>
        <select name id v-model="grp">
          <option disabled value>Выберите группу</option>
          <option>ОЗБ 579</option>
          <option>ОЗБ 600</option>
        </select>
      </div>
      <!-- <div class="button">Сохранить</div> -->
      <div style="margin-left: 1em;">{{grp}}</div>
    </div>
    <div class="week">
      <div class="one">1-я неделя</div>
      <div class="two">2-я неделя</div>
    </div>
    <div class="table">
      <div class="time row-6">
        <div>09:00 - 10:35</div>
        <div>10:45 - 12:20</div>
        <div>13:00 - 14:35</div>
        <div>14:45 - 16:20</div>
        <div>16:25 - 18:00</div>
        <div>18:05 - 19:40</div>
      </div>
      <day-of-week v-for="day in days" :key="day.id" :h1day="day.dayRu"></day-of-week>
    </div>
  </div>
</template>
<script>
import DayOfWeek from "@/components/DayOfWeek";
export default {
  data: () => {
    return {
      days: [
        { dayRu: "Пн", dayEn: "mon" },
        { dayRu: "Вт", dayEn: "tue" },
        { dayRu: "Ср", dayEn: "wed" },
        { dayRu: "Чт", dayEn: "thu" },
        { dayRu: "Пт", dayEn: "fri" },
        { dayRu: "Сб", dayEn: "sat" }
      ]
    };
  },
  computed: {
    grp: {
      get() {
        return this.$store.state.inputValue.grup_name;
      },
      set(value) {
        this.$store.commit("set_name_grup", event.target.value);
      }
    },
    krs: {
      get() {
        return this.$store.state.inputValue.kurs_name;
      },
      set(value) {
        this.$store.commit("set_name_kurs", event.target.value);
      }
    }
  },
  components: { DayOfWeek }
};
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  margin: 0.3em 0;
  .grup {
    select:not(:first-child) {
      margin-left: 1em;
    }
  }
  .button {
    margin-left: 2em;
    border-radius: 5px;
    cursor: pointer;
    padding: 0.1em 0.5em;
    background-color: rgb(50, 183, 108);
  }
}
.week {
  display: flex;
  padding: 0.3em 0;

  border-bottom: 2px solid rgb(50, 183, 108);
  div:not(:first-child) {
    margin-left: 1em;
  }
  div {
    // margin-left: 1em;
    // position: relative;
    // margin-bottom: -2px;
    padding: 0.2em 0.6em;
    // border: 2px solid rgb(50, 183, 108);

    border-radius: 5px;
    cursor: pointer;
  }
  .one {
    border: 1px solid rgb(50, 183, 108);
    // border-top: 2px solid rgb(50, 183, 108);
    // border-left: 2px solid rgb(50, 183, 108);
    // border-right: 2px solid rgb(50, 183, 108);
    // border-bottom: 2px solid rgb(50, 183, 108);
    background-color: rgb(50, 183, 108);
    color: white;
  }
  .two {
    border: 1px solid rgba(94, 114, 228, 0.5);
    // border-top: 2px solid rgb(94,114,228);
    // border-left: 2px solid rgb(94,114,228);
    // border-right: 2px solid rgb(94,114,228);
    // border-bottom: 2px solid rgb(94,114,228);
    // background-color: rgba(94, 114, 228, 0.541);
    // background-color: rgba(94, 114, 228, 0.300);
    // color: rgba(0, 0, 0, 0.7);
    color: rgba(57, 82, 224, 0.74);
  }
}

//  TABLE =======================

.time {
  margin-top: 0.8em;
  display: grid;
  grid-template-columns: repeat(6, minmax(130px, 1fr));
  border-left: 2px solid white;
  padding-left: 0.2em;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    // background-color: rgb(251,140,0);
    background-color: rgb(50, 183, 108);
    border-radius: 5px;
    padding: 0.2em 0.4em;
    color: white;
  }
}
</style>