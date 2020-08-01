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
          <option v-for="(option, index) in optionsKurs" :key="index" :value="index">{{option}}</option>
        </select>
        <select name id v-model="grp">
          <option disabled value>Выберите группу</option>
          <option v-for="(option, index) in massivGroup" :key="index">{{option}}</option>
        </select>
      </div>
      <!-- <div class="button">Сохранить</div> -->
      <div style="margin-left: 1em;">{{grp}}</div>
    </div>
    <div
      class="week"
      :class="{borderGreen: getWeek === 'week1',
    borderBlue: getWeek === 'week2'}"
    >
      <div
        class="one"
        :class="{activeWeekOne: getWeek === 'week1' }"
        @click="changeWeek('week1')"
      >1-я неделя</div>
      <div
        class="two"
        :class="{activeWeekTwo: getWeek === 'week2' }"
        @click="changeWeek('week2')"
      >2-я неделя</div>
    </div>
    <div class="table">
      <div class="time row-6" :class="{green: getWeek == 'week1',
      blue: getWeek == 'week2'}">
        <div>09:00 - 10:35</div>
        <div>10:45 - 12:20</div>
        <div>13:00 - 14:35</div>
        <div>14:45 - 16:20</div>
        <div>16:25 - 18:00</div>
        <div>18:05 - 19:40</div>
      </div>
      <div v-if="getWeek == 'week1'">
        <day-of-week
          :green="true"
          v-for="day in days"
          :key="day.id"
          :h1day="day.dayRu"
          :weekEn="day.dayEn"
          :choseWeek="'week1'"
        ></day-of-week>
      </div>
      <div v-if="getWeek == 'week2'">
        <day-of-week
          :green="false"
          v-for="day in days"
          :key="day.id"
          :h1day="day.dayRu"
          :weekEn="day.dayEn"
          :choseWeek="'week2'"
        ></day-of-week>
      </div>
    </div>
  </div>
</template>
<script>
import DayOfWeek from "@/components/DayOfWeek";
export default {
  data: () => {
    return {};
  },
  computed: {
    getWeek() {
      if (this.$store.state.week == null) {
        this.$store.commit("set_first_week", "week1");
        return "week1";
      } else {
        return this.$store.state.week;
      }
    },
    optionsKurs() {
      if (this.$store.state.vsgtu !== null) {
        let kurs = this.$store.state.vsgtu;

        let result = kurs.filter((obj) => obj.groups.length > 0);

        let resultMas = result.map((item) => item.course);

        return resultMas;
      }
    },
    massivGroup() {
      if (
        this.$store.state.info !== null &&
        this.$store.state.inputValue.kurs_name !== null
      ) {
        let choseKurs = this.$store.state.inputValue.kurs_name;
        let MAS = this.$store.state.vsgtu[choseKurs].groups;
        let arr = [];
        MAS.forEach((element) => {
          arr.push(element.grname);
        });

        if (!arr.includes(this.$store.state.inputValue.grup_name)) {
          this.$store.commit("set_group_after_arr", arr);
        }
        return arr;
      }
    },
    days() {
      return this.$store.state.days;
    },
    grp: {
      get() {
        if (this.$store.state.inputValue.grup_name == null) {
        } else {
          return this.$store.state.inputValue.grup_name;
        }
      },
      set(value) {
        this.$store.commit("set_name_grup", event.target.value);
      },
    },
    krs: {
      get() {
        if (this.$store.state.inputValue.kurs_name == null) {
          // window.localStorage.setItem("kurs", "1");
          this.$store.commit("set_name_kurs", "0");
          return "0";
        } else {
          return this.$store.state.inputValue.kurs_name;
        }
      },
      set(value) {
        this.$store.commit("set_name_kurs", event.target.value);
      },
    },
  },
  components: { DayOfWeek },
  methods: {
    changeWeek: function (week) {
      this.$store.commit("set_week", week);
    },
    Resize() {
      window.onresize = (ev) => {
        // console.log(ev.target.innerWidth)
        if (ev.target.innerWidth <= 800) {
          this.$router.push("/home");
        }
      };
    },
  },
  mounted() {
    this.Resize();
  },
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
  }
}
.borderGreen {
  border-bottom: 2px solid rgb(50, 183, 108);
}
.borderBlue {
  border-bottom: 2px solid rgb(87, 105, 223);
}
.week {
  display: flex;
  padding: 0.3em 0;

  // border-bottom: 2px solid rgb(50, 183, 108);
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
    border: 1px solid rgba(50, 183, 108, 0.5);
    color: rgb(50, 183, 108);
  }
  .activeWeekOne {
    border: 1px solid rgb(50, 183, 108);
    background-color: rgb(50, 183, 108);
    color: white;
  }
  .two {
    border: 1px solid rgba(94, 114, 228, 0.5);
    color: rgb(87, 105, 223);
  }
  .activeWeekTwo {
    border: 1px solid rgba(94, 114, 228, 0.5);
    background-color: rgb(87, 105, 223);
    color: white;
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
    // background-color: rgba(251, 138, 0, 0.8);
    border-radius: 5px;
    padding: 0.2em 0.4em;
    color: white;
  }
}
.green {
  div {
    background-color: rgb(50, 183, 108);
  }
}
.blue {
  div {
    background-color: rgba(70, 90, 220, 0.91);
  }
}

// ----------------- Цвета неедль
.green_border {
  border-left: 2px solid rgb(50, 183, 108);
}
</style>