// https://www.codewars.com/kata/56efc695740d30f963000557
String.prototype.toAlternatingCase = function () {
  let str = '';
  for(let i = 0; i < this.length; i++){
//     Using ternary Operator
    (this[i] == this[i].toLowerCase())? str += this[i].toUpperCase(): str+=this[i].toLowerCase();
  }
  return str;
}

// Using If Else
// let str = '';

//     for(let i = 0; i < this.length; i++){
//            If current character is lowercase then make it uppercase
//         if(this[i] == this[i].toLowerCase())
//         {
//             str += this[i].toUpperCase()
//         }
//         if current character is lowercase then make it uppercase
//         else
//         {
//             str+=this[i].toLowerCase();
//         }
//     return str;
//     }
