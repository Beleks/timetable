<template>
  <div class="nav-menu">
    <div class="left">
      <div
        class="nav-block activ"
        :class="{
          green: choseWeek === 'week1',
          blue: choseWeek === 'week2'
        }"
      >
        <img src="@/icons/g.png" alt />
      </div>
      <div class="nav-block">
        <img class="prepod" src="@/icons/t.png" alt />
      </div>
    </div>
    <div class="right">
      <div>{{grp}}</div>
      <svg
        v-if="!show"
        @click="changeShow()"
        fill="#000000"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 26 26"
        width="26px"
        height="26px"
      >
        <path
          d="M 20.09375 0.25 C 19.5 0.246094 18.917969 0.457031 18.46875 0.90625 L 17.46875 1.9375 L 24.0625 8.5625 L 25.0625 7.53125 C 25.964844 6.628906 25.972656 5.164063 25.0625 4.25 L 21.75 0.9375 C 21.292969 0.480469 20.6875 0.253906 20.09375 0.25 Z M 16.34375 2.84375 L 14.78125 4.34375 L 21.65625 11.21875 L 23.25 9.75 Z M 13.78125 5.4375 L 2.96875 16.15625 C 2.71875 16.285156 2.539063 16.511719 2.46875 16.78125 L 0.15625 24.625 C 0.0507813 24.96875 0.144531 25.347656 0.398438 25.601563 C 0.652344 25.855469 1.03125 25.949219 1.375 25.84375 L 9.21875 23.53125 C 9.582031 23.476563 9.882813 23.222656 10 22.875 L 20.65625 12.3125 L 19.1875 10.84375 L 8.25 21.8125 L 3.84375 23.09375 L 2.90625 22.15625 L 4.25 17.5625 L 15.09375 6.75 Z M 16.15625 7.84375 L 5.1875 18.84375 L 6.78125 19.1875 L 7 20.65625 L 18 9.6875 Z"
        />
      </svg>
      <svg
        v-if="show"
        @click="changeShow()"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 240.835 240.835"
        style="enable-background:new 0 0 240.835 240.835;"
        xml:space="preserve"
      >
        <g>
          <path
            id="Expand_Less"
            d="M129.007,57.819c-4.68-4.68-12.499-4.68-17.191,0L3.555,165.803c-4.74,4.74-4.74,12.427,0,17.155
		        c4.74,4.74,12.439,4.74,17.179,0l99.683-99.406l99.671,99.418c4.752,4.74,12.439,4.74,17.191,0c4.74-4.74,4.74-12.427,0-17.155
		        L129.007,57.819z"
          />
        </g>
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
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
    choseWeek() {
      return this.$store.state.week;
    },
    show() {
      return this.$store.state.showSelect;
    },
  },
  methods: {
    changeShow() {
      let show = this.$store.state.showSelect;
      this.$store.commit("change_show", !show);
    },
  },
};
</script>
<style lang="scss" scoped>
.nav-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  // max-height: 30px;
  // border: 1px solid black;
  .left {
    display: flex;
    .nav-block {
      // border: 1px solid black;
      // background-color: grey;
      margin-left: 1em;

      img {
        width: 30px;
      }
      .prepod {
        opacity: 0.5;
      }
    }
    .activ {
      border-bottom-style: solid;
    }
  }
  .right {
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    svg {
      margin-left: 0.5em;
      width: 18px;
      margin-right: 1em;
    }
  }
}
.green {
  border-bottom-color: rgb(50, 183, 108);
}
.blue {
  border-bottom-color: rgba(70, 90, 220, 0.91);
}
</style>