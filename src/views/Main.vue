<template>
  <div>
    <div class="header">
      <div class="grup">
        <select name id>
          <option disabled value>Выберите один из вариантов</option>
          <option>Бакалавриат, специалитет</option>
        </select>
        <select name id>
          <option disabled value>Выберите курс</option>
          <option>1 курс</option>
        </select>
        <select name id @change="getValue($event)" v-model="grp" >
          <option disabled value>Выберите группу</option>
          <option>ОЗБ 579</option>
          <option value="ОЗБ 600">ОЗБ 600</option>
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

      <div class="day-name row-6 border-left">
        <div class="name">Пн</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="day-of-week row-6 border-left">
        <main-para></main-para>
        <main-para></main-para>
        <main-para></main-para>
        <main-para></main-para>
        <main-para></main-para>
        <main-para></main-para>
      </div>
      <div class="day-name row-6 border-left">
        <div class="name">Вт</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="day-of-week row-6 border-left">
        <main-para></main-para>
        <main-para></main-para>
        <main-para></main-para>
        <main-para></main-para>
        <main-para></main-para>
        <main-para></main-para>
      </div>
      <!-- <div class="day-name row-6 border-left">
        <div class="name">Пн</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="day-of-week row-6 border-left">
        <main-para></main-para>
        <main-para></main-para>
        <main-para></main-para>
        <main-para></main-para>
        <main-para></main-para>
        <main-para></main-para>
      </div>
      <div class="day-name row-6 border-left">
        <div class="name">Вт</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="day-of-week row-6 border-left">
        <main-para></main-para>
        <main-para></main-para>
        <main-para></main-para>
        <main-para></main-para>
        <main-para></main-para>
        <main-para></main-para>
      </div>
      <div class="day-name row-6 border-left">
        <div class="name">Пн</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="day-of-week row-6 border-left">
        <main-para></main-para>
        <main-para></main-para>
        <main-para></main-para>
        <main-para></main-para>
        <main-para></main-para>
        <main-para></main-para>
      </div>
      <div class="day-name row-6 border-left">
        <div class="name">Вт</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="day-of-week row-6 border-left">
        <main-para></main-para>
        <main-para></main-para>
        <main-para></main-para>
        <main-para></main-para>
        <main-para></main-para>
        <main-para></main-para>
      </div>-->
    </div>
  </div>
</template>
<script>
import MainPara from "@/components/MainPara";
export default {
  data: () => {
    return {
      // selectGrup: "",
      grp: localStorage.getItem('grup')
    };
  },
  methods:{
    getValue(event){
      this.selectGrup = event.target.value
      window.localStorage.setItem('grup', this.selectGrup)
      // console.log(this.grp)
      
    }
  },
  components: {
    MainPara
  }
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
.table {
  display: grid;
  grid-template-rows: minmax(auto, min-content) repeat(
      5,
      minmax(auto, min-content) 1fr
    );
  // row-gap: 40px;
}
// .table:nth-child(1) {
//   row-gap: 40px;

// }
/* Применяеться только к таблице а не к элементам таблицы */
.time {
  margin-top: 0.8em;
  position: sticky;
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

.row-6 {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}
.day-name {
  margin-top: 1em;
  max-height: 40px;
  .name {
    display: flex;
    margin: 0.2em;
    font-size: 1.2rem;
  }
}
.border-left {
  border-left: 2px solid rgb(50, 183, 108);
  padding-left: 0.2em;
}
</style>