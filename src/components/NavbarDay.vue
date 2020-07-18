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
      <button
        v-for="tab in tabs"
        v-bind:key="tab.t"
        v-bind:class="['tab-button', { active: currentTab === tab.t }]"
        v-on:click="currentTab = tab.t"
      >{{tab.ruT}}</button>
    </div>
    <component :is="currentTabComponent" :currentWeek="currentWeek"
    ></component>
  </div>
</template>
<script>
import tabPn from "@/components/tab-pn";
import tabVt from "@/components/tab-vt";
import tabCr from "@/components/tab-cr";
import tabCht from "@/components/tab-cht";
import tabPtn from "@/components/tab-ptn";
import tabCb from "@/components/tab-cb";

export default {
  data: () => {
    return {
      currentTab: "Pn",
      // tabs: ["Pn", "Vt", "Cr", "Cht", "Ptn", "Cb"],
      // ruTabs: ["Пн", "Вт", "Ср", "Чтв", "Пт", "Сб"],
      tabs: [
        {t:"Pn", ruT: "Пн"},
        {t:"Vt", ruT: "Вт"},
        {t:"Cr", ruT: "Ср"},
        {t:"Cht", ruT: "Чтв"},
        {t:"Ptn", ruT: "Пт"},
        {t:"Cb", ruT: "Сб"},
      ],
      one: "one",
      two: "two",
      currentWeek: "one"
    };
  },
  computed: {
    currentTabComponent: function() {
      return "tab-" + this.currentTab.toLowerCase();
    }
  },
  components: {
    tabPn,
    tabVt,
    tabCr,
    tabCht,
    tabPtn,
    tabCb
  }
};
</script>
<style lang="scss" scoped>
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
.nav {
  //   display: grid;
  //   grid-template-columns: minmax(100px, 1fr) 1fr 1fr;
  //   grid-gap: 0.5em;
}

// .block-day {
//     display: flex;
//     flex-direction: column;
//     align-items: center;

//   -------------
//     border: 1px solid black;
//     max-width: calc(100% / 7);

// }

// .grid-column {
//   display: grid;
//   grid-template-rows: minmax(50px, 1fr) 1fr 1fr 1fr 1fr 1fr;
// }
</style>