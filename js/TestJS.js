function getMathResult(base, progress){
  if (progress === 0 || progress <= 0 || typeof(progress) !== "number"){
    console.log("error");
    return base;
  }

  let sett = "";
  for (let i = 1; i <= progress; i++){
    sett += `${base*i}---`;
  }
  sett = sett.slice(0,-3);
  return sett;
 }



console.log(getMathResult(10, 5));








































// const lines = 3;
// let result = '';
// let arr = [];
// let o = 0;


// for (let f = 0; f <= lines * 2; f++){ 
//  if (f%2 != 0){
//   arr[o++] = f;
//    } else {
//      continue;
//    }
//   }

//  for (let i = 1; i <= lines; i++){ //линии

//       for (let j = 0; j < arr[i-1]; j++){ //звездочки

//           if (j === 0){
//                     for (let k = 0; k <= lines - i; k++){ //пробелы
//                        result += " ";
//                        }
//                     }
//             result += "*";
//         }
//         result += "\n";
// }
// console.log(result);  




