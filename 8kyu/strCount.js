// https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript
// All Star Code Challenge #18

function strCount(str, letter){  
  //code here
  let count = 0
  if(str.length == 0){
    return count
  }
  for(let i =0; i< str.length ;i++){
    if (str.charAt(i) == letter){
     count = count + 1
    }
  }
  return count
}

// Test Case
// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
