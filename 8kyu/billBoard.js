// https://www.codewars.com/kata/570e8ec4127ad143660001fd/train/javascript
// For 1st Method refer https://medium.com/@ctrlalt_diljeet/multiply-without-using-in-javascript-890857bb003c

// 1st Method
function billboard(name, price = 30){
  
  return (name.length) / (1 / price)
} 

// 2nd Method
const m = (a,b) => a*b

function billboard(name, price = 30){ 
  return m(name.length, price)
} 
