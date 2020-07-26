<template>
  <div>
    
    <div class="change-week">
      <div
        class="week"
        :class="{activeWeekOne: currentWeek === one }"
        @click="currentWeek = one"
      >1-я неделя</div>
      <div
        class="week"
        :class="{activeWeekTwo: currentWeek === two }"
        @click="currentWeek = two"
      >2-я неделя</div>
    </div>
    <div class="menu-days">
      <button v-for="tab in tabs" v-bind:key="tab.t" v-bind:class="['tab-button']">{{tab.ruT}}</button>
    </div>
    <div class="days">
      <tab-pn v-for="block in blocks" v-bind:key="block.id" :currentWeek="currentWeek"></tab-pn>
      <!-- <tab-pn v-for="block in blocks" v-bind:key="block.id" :currentWeek="currentWeek"></tab-pn>
      <tab-pn v-for="block in blocks" v-bind:key="block.id" :currentWeek="currentWeek"></tab-pn>
      <tab-pn v-for="block in blocks" v-bind:key="block.id" :currentWeek="currentWeek"></tab-pn>
      <tab-pn v-for="block in blocks" v-bind:key="block.id" :currentWeek="currentWeek"></tab-pn>
      <tab-pn v-for="block in blocks" v-bind:key="block.id" :currentWeek="currentWeek"></tab-pn>
      <tab-pn v-for="block in blocks" v-bind:key="block.id" :currentWeek="currentWeek"></tab-pn>-->
    </div>
  </div>
</template>
<script>
import tabPn from "@/components/tab-pn";

export default {
  data: () => {
    return {
      currentTab: "Pn",
      // tabs: ["Pn", "Vt", "Cr", "Cht", "Ptn", "Cb"],
      // ruTabs: ["Пн", "Вт", "Ср", "Чтв", "Пт", "Сб"],
      tabs: [
        { t: "Pn", ruT: "Пн" },
        { t: "Vt", ruT: "Вт" },
        { t: "Cr", ruT: "Ср" },
        { t: "Cht", ruT: "Чтв" },
        { t: "Ptn", ruT: "Пт" },
        { t: "Cb", ruT: "Сб" }
      ],
      blocks: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 }
      ],
      one: "one",
      two: "two",
      currentWeek: "one"
    };
  },
  components: {
    tabPn
  },
  methods: {
    Resize() {
      window.onresize = ev => {
        if (ev.target.innerWidth <= 800) {
          this.$router.push("/");
        }
      };
    }
  },
  mounted() {
    this.Resize();
  }
};
</script>

<style scope>
.header {
  width: 100%;
  margin: 0px;
  padding: 5px 5px;
  text-align: center;
  background-color: rgb(140, 200, 204);
  border-bottom: 2px solid #444;
}
.days {
  display: flex;
  /* flex-wrap: wrap; */
}
.day-block {
  /* border: 1px solid gray; */
  border-radius: 10px;
  margin: 0.2em;
  flex-grow: 1;
  min-height: 130px;

  box-shadow: 0px 0px 16px 0px rgba(166, 166, 166, 0.27);
}

/* ------------------------- */
button {
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  /* отображаем курсор в виде руки при наведении; некоторые
  считают, что необходимо оставлять стрелочный вид для кнопок */
  cursor: pointer;
  outline: none;
}

.week {
  padding: 0.1em 0.3em;
  border-radius: 10px;
  border: 1px solid gray;
  cursor: pointer;
}
.change-week {
  display: flex;
  justify-content: space-evenly;
  margin: 0.8em 2em;
}
.activeWeekOne {
  background-color: rgb(50, 183, 108);
}
.activeWeekTwo {
  background-color: rgb(94, 114, 228);
}

.menu-days {
  display: flex;
  justify-content: space-around;
}

.tab-button {
  font-size: 1.1rem;
}

.tab-button.active {
  border-bottom: 2px solid rgb(50, 183, 108);
}
</style>