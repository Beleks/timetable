<template>
  <div>
    <div class="head">
      <div>{{grp}}</div>
      <div class="choose" @click=" show = !show">Выбрать группу</div>
    </div>
    <transition name="fade">
      <div class="section_select" v-show="show">
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
          <option
            v-for="(option, index) in massivGroup"
            :value="option.name"
            :key="index"
            :disabled="option.dis"
          >{{option.name}}</option>
        </select>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      show: false,
    };
  },
  computed: {
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
        this.$store.state.vsgtu !== null &&
        this.$store.state.inputValue.kurs_name !== null
      ) {
        let choseKurs = this.$store.state.inputValue.kurs_name;
        let MAS = this.$store.state.vsgtu[choseKurs].groups;
        let arr_proverka = []; // массив для проверки
        let arr = [];
        let gr = {};
        MAS.forEach((element) => {
          gr = {};
          gr.name = element.grname;
          gr.dis = false;

          arr_proverka.push(element.grname);
          arr.push(gr);
        });

        // console.log(arr);
        if (!arr_proverka.includes(this.$store.state.inputValue.grup_name)) { 
          // лищний раз перещитывает computed (исправить)
          this.$store.commit("set_group_after_arr", arr);
        }

       

        let blackList = ["Б568"];

        arr.forEach((element, index) => {
          blackList.find((i) => {
            if (i === element.name) {
              // console.log(i, element, index);
              arr[index].name = element.name + " (нет данных)";
              arr[index].dis = true;
            }
          });
        });

        return arr;
      }
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
          this.$store.commit("set_name_kurs", "0");
          return "0";
        } else {
          return this.$store.state.inputValue.kurs_name;
        }
      },
      set(value) {
        console.log(event.target.value);
        this.$store.commit("set_name_kurs", event.target.value);
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.head {
  margin: 0em 1em;
  align-items: center;
  display: flex;
  justify-content: space-between;
  .choose {
    margin-left: 1em;

    padding: 0.2em 0.3em;
    border-radius: 5px;
    // border: 1px solid rgba(251, 138, 0, 0.8);
    color: white;
    background-color: rgba(243, 156, 17, 0.9);
  }
  margin-bottom: 0.7em;
}
.section_select {
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  select {
    min-width: 260px;
    max-width: 260px;
    // width: 100%;
    margin: 0.4em 1em;
    font-size: 0.9rem;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  transition: opacity 0s;
  opacity: 0;
}
</style>