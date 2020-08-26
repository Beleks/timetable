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
      <div class="podgroup">
        <!-- <div class="bg right">2 п/г</div> -->
        <div
          :class="['bg', {
          right: chosePg_Data === 2,
          left: chosePg_Data === 1,
          green: choseWeek === 'week1',
          blue: choseWeek === 'week2'
        }]"
        ></div>
        <div class="chose" @click="chosePg_Data = 1">1 п/г</div>
        <div @click="chosePg_Data = 2">2 п/г</div>
      </div>
      <div
        class="time"
        :class="{
          green: choseWeek === 'week1',
          blue: choseWeek === 'week2'
          }"
      >{{time}}</div>
    </div>
    <div class="slider">
      <div class="slider__wrapper">
        <div
          class="main-text slider__item"
          :class="{position: chosePg_Data === 2}"
        >{{testText.para}}</div>
        <div
          class="main-text slider__item"
          :class="{position: chosePg_Data === 1}"
        >Привет, как дела ?</div>
      </div>
    </div>
    <div class="footer">
      <div class="prepod" :class="{position: chosePg_Data === 2}">{{testText.prepod}}</div>
      <div class="prepod" :class="{position: chosePg_Data === 1}">БЕЛЕЦКИЙ A.В</div>
      <div
        :class="{room: testText.class !==null,
      position: chosePg_Data === 2}"
      >{{testText.class}}</div>
      <div class="room" :class="{
      position: chosePg_Data === 1}">a.10-2</div>
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
  data: () => {
    return {
      show: true,
      chosePg_Data: 1,
    };
  },
  computed: {
    choseWeek() {
      return this.$store.state.week;
    },
    chosePg() {
      return this.$store.state.inputValue.pd_num;
    },
  },
  methods: {
    swap: function (event) {},
  },
};
</script>
<style lang="scss" scoped>
// .slider {
//   position: relative;
//   overflow: hidden;
// }
// .slider__wrapper {
//   display: flex;
//   transition: transform 0.6s ease;
// }

.slider__item {
  // flex: 0 0 100%;
  transition: visibility 0s, opacity 0.5s linear;
  // max-width: 100%;
}
.position {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  visibility: hidden;
}

//===================================================
* {
  // box-sizing: border-box;
}
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
  .podgroup {
    position: relative;
    // min-width: 120px;
    display: flex;
    justify-content: space-between;
    border-radius: 15px;
    // width: 100px;
    background-color: rgba(180, 180, 180, 0.5);
    // background-color: white;
    // border: 1px solid rgb(50, 183, 108);
    div {
      z-index: 101;
      color: white;
      // width: 40px;
      // margin:0 2px;
      // border: 1px solid rgb(167, 167, 167);
      border-radius: 15px;
      padding: 0.1em 0.7em;
    }
    .bg {
      padding: 0;
      width: 54.7px;
      height: 21.6px;
      position: absolute;
      z-index: 100;

      transition: transform 0.3s; // делает анимацию более плавной
    }
    .left {
      transform: translateX(0);
    }
    .right {
      transform: translateX(54.7px);
    }
  }
}
.main-text {
  // display: flex;
  // justify-content: center;
  margin: auto;
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
    transition: visibility 0s, opacity 0.5s linear;
  }
  .prepod {
    font-size: 0.9rem;
    // border-bottom: 1px solid gray;
    // font-weight: 300;
    font-style: italic;
    transition: visibility 0s, opacity 0.5s linear;
  }
}
</style>