<template>
  <div>
    <div class="head">
      <div>418 с/в</div>
      <div>Выбрать группу</div>
    </div>
    <div class="section_select">
      <select name id>
        <option disabled value>Выберите один из вариантов</option>
        <option>Бакалавриат, специалитет</option>
      </select>
      <select name id v-model="krs">
        <option disabled value>Выберите курс</option>
        <option
          v-for="(option, index) in optionsKurs"
          :key="index"
          :value="index"
        >{{option}}</option>
      </select>
      <select name id v-model="grp">
        <option disabled value>Выберите группу</option>
        <option v-for="(option, index) in massivGroup" :key="index">{{option}}</option>
      </select>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    optionsKurs() {
      if (this.$store.state.info !== null) {
        let kurs = this.$store.state.info;

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
        let MAS = this.$store.state.info[choseKurs].groups;
        let arr = [];
        MAS.forEach((element) => {
          arr.push(element.grname);
        });

        if (!arr.includes(this.$store.state.inputValue.grup_name)) {
          this.$store.commit("set_group_after_arr", arr);
        }

        // console.log(this.$store.state.inputValue.grup_name);
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
        this.$store.commit("set_name_kurs", event.target.value);
      },
    },
  },
};
</script>