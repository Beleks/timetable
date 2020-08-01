export default {
  install(Vue, options) {
    Vue.parsInfo = function (string) {

      let str = string;
      // console.log(str);
      if (str === "_") {
        let CLS = null;
        return {
          prepod: "",
          para: "Пары нету :)",
          class: CLS,
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
        let Para = "";

        resultMassiv.some((element, index) => {
          // let el = element.match(/[А-Я][.][А-Я][.]/);
          //
          if (element.length <= 5) {
            // console.log(element);
            let el = element.match(/[А-Я][.]/);

            if (el !== null) {
              prepodMassiv = []; // Надо ли обнулять ?
              // FSname = ''
              if (el.input.length == 2) {
                // console.log(el, "Зачем они поставили пробел ?");
                let newMasClass = resultMassiv.slice(
                  index + 2,
                  resultMassiv.length
                ); // вырезаем все что после препода (аудитория)
                let newMasPre = resultMassiv.slice(resultMassiv[0], index - 1); // вырезаем навзвание предмета

                prepodMassiv.push(resultMassiv[index - 1]);
                prepodMassiv.push(el.input);
                prepodMassiv.push(resultMassiv[index + 1]);

                Para = newMasPre.join(" ");
                classRoom = newMasClass.join(" ");
                FSname = prepodMassiv.join(" ");

                return true;
              } else {
                // console.log(el.input, "input");

                // console.log(resultMassiv.splice());
                // console.log(resultMassiv.length - 1);
                // console.log(resultMassiv);

                // Какой-то шлак выше :)

                let newMasClass = resultMassiv.slice(
                  index + 1,
                  resultMassiv.length
                ); // вырезаем все что после препода (аудитория)
                let newMasPre = resultMassiv.slice(resultMassiv[0], index - 1); // вырезаем навзвание предмета
                // console.log(resultMassiv, "Массив в норме");  так чисто проверочка
                // console.log(newMasPre);  получаем название пары
                // console.log(newMasClass); получаем аудиторию
                prepodMassiv.push(resultMassiv[index - 1]);
                prepodMassiv.push(el.input);
                // console.log(prepodMassiv.join(" "));
                Para = newMasPre.join(" ");
                classRoom = newMasClass.join(" ");
                FSname = prepodMassiv.join(" ");
                return true;
              }
            } else {
              // console.log(el)
            }
          }
        });

        return {
          prepod: FSname, // фамилия И.О препода
          para: Para,
          class: classRoom,
        };
      }

    }
  }
}