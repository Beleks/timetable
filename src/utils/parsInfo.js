export default {
  install(Vue, options) {
    Vue.parsInfo = function (string) {

      let str = string;
      // Получаю строку
      if (str === "_") {
        // let CLS = null;
        return {
          prepod: "",
          para: "_",
          class: null,
          podgroup: null
        };
      } else {
        let resultOne = str.match(/[.]/);
        let resultTwo = str.split(/[.]/)[0].length; // длина строки до точки 'пр' 'лек' 

        // console.log(str)
        // console.log(str[resultTwo])

        // Создадим переменную в кторой будет лек. пр.
        let kindOfPara = str.slice(0, resultTwo + 1)
        // console.log(kindOfPara);

        // Строка без 'пр.' 'лек.'; +1 - это с "."
        // let resultSTR = str.slice(resultTwo + 1);
        let resultSTR = str


        let PROBA_STR = resultSTR.matchAll(/[А-Я][.]/g) // Поиск по всей строке

        let ARR = Array.from(PROBA_STR)

        // console.log(Array.from(PROBA_STR).length)
        let twoPredmetMassiv

        if (ARR.length > 2 && ARR.length < 5) {
          // console.log(ARR)
          console.log(resultSTR)
          twoPredmetMassiv = resultSTR.split(" ")
          // console.log(twoPredmetMassiv)
          // Нашли строки где две фамилии
          // ====================
          twoPredmetMassiv.some((element, index) => {
            if (element.length <= 5) {
              let elSimbol = element.match(/[А-Я][.]/);


              if (elSimbol !== null) {
                
                if (elSimbol.input.length == 2) {

                } else {
                  console.log(twoPredmetMassiv)
                  // console.log(twoPredmetMassiv[index], 'то что надо')
                  console.log(twoPredmetMassiv[index + 1])
                  console.log(twoPredmetMassiv[index + 2])
                  console.log(twoPredmetMassiv[index + 3])
                  
                  
                  return true
                }
              }
            }
          })
        }



        // ====================================
        let resultMassiv = resultSTR.split(" ");

        let prepodMassiv = []; // Массив с Ф, ИО
        let FSname = ""; // фамилия И.О препода
        let classRoom = "";
        let Para = "";

        resultMassiv.some((element, index) => {
          // let el = element.match(/[А-Я][.][А-Я][.]/);
          //
          if (element.length <= 5) {
            // console.log(element);
            let el = element.match(/[А-Я][.]/);

            // console.log(el)
            if (el !== null) {
              // console.log(el)
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