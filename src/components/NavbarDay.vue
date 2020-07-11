<template>
  <div>
    <button
      v-for="tab in tabs"
      v-bind:key="tab"
      v-bind:class="['tab-button', { active: currentTab === tab }]"
      v-on:click="currentTab = tab"
    >{{tab}}</button>
    <component :is="currentTabComponent"></component>
  </div>
</template>
<script>
import tabPn from "@/components/tab-pn";

export default {
  data: () => {
    return {
      currentTab: "Pn",
      tabs: ["Pn", "Vt", "Cr", "Cht", "Cb"]
    };
  },
  computed: {
    currentTabComponent: function() {
      return "tab-" + this.currentTab.toLowerCase();
    }
  },
  components: {
      tabPn
  }
};
</script>
<style lang="scss" scoped>
.nav {
  //   display: grid;
  //   grid-template-columns: minmax(100px, 1fr) 1fr 1fr;
  //   grid-gap: 0.5em;
}

.tab-button {
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