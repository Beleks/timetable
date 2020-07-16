<template>
  <div>
    <div class="menu-days">
      <button v-for="tab in tabs" v-bind:key="tab.t" v-bind:class="['tab-button']">{{tab.ruT}}</button>
    </div>
    <div class="days">
      <div v-for="block in blocks" v-bind:key="block.id" class="day-block"></div>
    </div>
  </div>
</template>
<script>
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
      blocks: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]
    };
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
.days{
  display: flex;
}
.day-block {
  border: 1px solid gray;
  margin: 0.2em;
  flex-grow: 1;
  min-height: 130px;
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