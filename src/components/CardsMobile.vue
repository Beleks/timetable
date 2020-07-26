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
      <div class="time"></div>
    </div>
    <div class="main-text">{{content.para}}</div>
    <div class="footer">
      <div>{{content.prepod}}</div>
      <div>{{content.class}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    // textContent: String,
    // weekEn: String,
    testText: String,
    testNum: Number,
    // para_green: Boolean,
  },
  computed: {
    choseWeek() {
      return this.$store.state.week;
    },
    content() {
      let str = this.testText;
      console.log(str);
      if (str === "_") {
        return {
          prepod: "",
          para: "Пары нету :)",
        };
      } else {
        let resultOne = str.match(/[.]/);
        let resultTwo = str.split(/[.]/)[0].length;
        // console.log(str.slice(resultTwo + 1));

        let resultSTR = str.slice(resultTwo + 1); // Строка без 'пр.' 'лек.'

        let resultMassiv = resultSTR.split(" ");

        let prepodMassiv = [];
        let FSname = ""; // фамилия И.О препода
        let classRoom = "";
        let Para = ""

        resultMassiv.forEach((element, index) => {
          let el = element.match(/[А-Я][.][А-Я][.]/g);

          if (el !== null) {
            prepodMassiv = [];
            // FSname = ''
            console.log(el[0]);

            // console.log(resultMassiv.splice());
            // console.log(resultMassiv.length - 1);
            // console.log(resultMassiv);

            // Какой-то шлак выше :)

            let newMasClass = resultMassiv.slice(
              index + 1,
              resultMassiv.length
            ); // вырезаем все что после препода (аудитория)
            let newMasPre = resultMassiv.slice(resultMassiv[0], index - 1); // вырезаем навзвание предмета
            console.log(resultMassiv, "Массив в норме"); // так чисто проверочка
            console.log(newMasPre); // получаем название пары
            console.log(newMasClass); // получаем аудиторию
            prepodMassiv.push(resultMassiv[index - 1]);
            prepodMassiv.push(el[0]);
            // console.log(prepodMassiv.join(" "));
            Para = newMasPre.join(" ");
            classRoom = newMasClass.join(" ");
            FSname = prepodMassiv.join(" ");
            return FSname;
          } else {
          }
        });

        return {
          prepod: FSname, // фамилия И.О препода
          para: Para,
          class: classRoom,
        };
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  // font-size: 0.78rem;
  min-height: 70px;
  border: 10px;
  padding: 0.3em;
  margin: 0.4em 0.2em;

  box-shadow: 0px 0px 16px 0px rgba(166, 166, 166, 0.27);
  border-radius: 10px;
}
.head {
  display: flex;
  justify-content: space-between;
  .number {
    font-size: 0.9rem;
    color: white;
    border-radius: 15px;
    padding: 0.2em 0.5em;
  }
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
}
</style>