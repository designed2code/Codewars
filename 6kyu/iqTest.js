//My code  not working for 1 test case iqTest("88 96 66 51 14 88 2 92 18 72 18 88 20 30 4 82 90 100 24 46 ");
https://www.codewars.com/kata/552c028c030765286c00007d/solutions/javascript
// function iqTest(numbers){
//     const a = numbers.split(" ")
//     console.log(a)
//     const b = a.map(Number)
//     console.log(b)
//     const len = b.length
// //     console.log(len)
//     if(len % 2 == 0){
//         const even_present_at = len - 2
// //         const position_of_even_element_present = indexOf(even_present_at)
//         // console.log(`The ${position_of_even_element_present}rd number is even`)
//         // return `The ${position_of_even_element_present}rd number is even`
//        //       console.log(`The ${position_of_even_element_present}rd number is even`)
//     return even_present_at ;
//         }
//     else{
//         const odd_present_at = len -2
//         return odd_present_at ;
//         // return `The ${odd_present_at}rd number is odd`
// //         console.log(`The ${odd_present_at}rd number is odd`)
//     }

// }
// iqTest("2 4 7 8 10")
// iqTest("1 2 2")

// ################## WORKING CODE#####################
function iqTest(numbers) {
    let numArr = numbers.split(' ');
    let obj = {};
    console.log(obj)
    obj.evenCount = 0;
    console.log(obj.evenCount)
    obj.oddCount = 0;
    console.log(obj.oddCount)
    console.log(numArr);
  
    for (let i = 0; i < numArr.length; i++) {
      if (numArr[i] % 2 === 0) {
        obj.evenCount += 1;
        obj.even = i + 1;
      } else {
        obj.oddCount += 1;
        obj.odd = i + 1;
      }
      
      if(obj.oddCount > 0 && obj.evenCount > 0 && obj.oddCount !== obj.evenCount) { // early termination condition
        break; // break out of the loop is the difference between odd and even already exists
      }
    }
  
    if (obj.evenCount < obj.oddCount) { // change to check the counts
      return (obj.even);
    } else {
      return (obj.odd);
    }
  }
  
//   console.log(iqTest("2 4 7 8 10")); // 3 (item: 7)
//   console.log(iqTest("1 2 2")); // 1 (item: 1)
//   console.log(iqTest("100 100 1")); // 3 (item: 1)
//   console.log(iqTest("5 3 2")); // 3 (item: 2)
  console.log(iqTest("88 96 66 51 14 88 2 92 18 72 18 88 20 30 4 82 90 100 24 46 "));
  
