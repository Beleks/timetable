export default {
  install(Vue, options) {
    Vue.parsInfo = function (string) {

      let str = string;
      // Получаю строку
      if (str === "_") {
        // let CLS = null;

        // return {
        //   prepod: "",
        //   para: "_",
        //   class: null,
        //   podgroup: null
        // };
        return {
          one: {
            prepod: "",
            para: "_",
            class: null,
            podgroup: null
          },
          two: null
        }
      } else {
        let resultOne = str.match(/[.]/);
        let resultTwo = str.split(/[.]/)[0].length; // длина строки до точки 'пр' 'лек' 

        // ===============
        let OneChose
        let TwoChose = null
        // ===============


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
        let onePredmetMassiv
        let twoPredmetMassiv

        if (ARR.length > 2 && ARR.length < 5) {
          // console.log(ARR)
          // console.log(resultSTR, ' | Строка')
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
                  // console.log(twoPredmetMassiv)

                  let firstParaMassiv = twoPredmetMassiv.slice(0, index + 2)
                  let secondaParaMassiv = twoPredmetMassiv.slice(index + 2)
                  console.log(firstParaMassiv)
                  // console.log(secondaParaMassiv)
                  OneChose = ParsSTR(firstParaMassiv)
                  TwoChose = ParsSTR(secondaParaMassiv)

                  // console.log(secondaParaMassiv.slice(index + 2), "Вторая пара")

                  // Убирать из массва все диффисы после ФИО !!
                  // console.log(twoPredmetMassiv[index], 'то что надо')
                  // console.log(twoPredmetMassiv[index + 1])
                  // console.log(twoPredmetMassiv[index + 2])
                  // console.log(twoPredmetMassiv[index + 3])


                  return true
                }
              }
            }
          })
        } else if (ARR.length === 2) {
          
          onePredmetMassiv = resultSTR.split(" ")
          // console.log(twoPredmetMassiv)
          onePredmetMassiv.some((element, index) => {
            if (element.length <= 5) {
              let elSimbol = element.match(/[А-Я][.]/);


              if (elSimbol !== null) {



                if (elSimbol.input.length == 2) {

                } else {
                  
                  OneChose = ParsSTR(onePredmetMassiv)



                  return true
                }
              }
            }
          })
        }



        // ====================================
        let resultMassiv = resultSTR.split(" ");

        // let PROBA = ParsSTR(resultMassiv)

        // console.log(PROBA, 'PROBA')
        return {
          one: OneChose,
          two: TwoChose
        }
      }

    }
  }
}

function ParsSTR(str) {


  let prepodMassiv_f = []
  let FSname_f = ""; // фамилия И.О препода
  let classRoom_f = "";
  let Para_f = "";
  str.some((element, index) => {
    if (element.length <= 5) {
      let el = element.match(/[А-Я][.]/);
      if (el !== null) {

        prepodMassiv_f = [];
        if (el.input.length == 2) {
          let newMasClass = str.slice(
            index + 2,
            str.length
          ); // вырезаем все что после препода (аудитория)
          let newMasPre = str.slice(str[0], index - 1);// вырезаем навзвание предмета

          prepodMassiv_f.push(str[index - 1]);
          prepodMassiv_f.push(el.input);
          prepodMassiv_f.push(str[index + 1]);

          Para_f = newMasPre.join(" ");
          classRoom_f = newMasClass.join(" ");
          FSname_f = prepodMassiv_f.join(" ");
          return true
        }
        else {
          let newMasClass = str.slice(
            index + 1,
            str.length
          );
          let newMasPre = str.slice(str[0], index - 1);// вырезаем навзвание предмета
          
          prepodMassiv_f.push(str[index - 1]);
          prepodMassiv_f.push(el.input);

          Para_f = newMasPre.join(" ");
          classRoom_f = newMasClass.join(" ");
          FSname_f = prepodMassiv_f.join(" ");
          return true
        }
      } else {

      }
    }
  })
  return {
    prepod: FSname_f,
    para: Para_f,
    class: classRoom_f,

  }
}


