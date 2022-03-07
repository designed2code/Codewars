Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.
Question Link https://www.codewars.com/kata/5d5ee4c35162d9001af7d699
For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

Note: You will always be given a non-empty list containing positive values.

ENJOY CODING :)

// CODE
function sumOfMinimums(arr) {
  let countArr = []
  let sum = 0
  let i;
  for(i=0;i<=arr.length-1;i++){
  countArr.push(Math.min.apply(Math,arr[i]))
  sum = sum + countArr[i]
  }
    return sum
}
