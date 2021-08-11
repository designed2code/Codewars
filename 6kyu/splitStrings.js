// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/solutions/javascript

function solution(str){
  //Calculate length of string
const len = str.length

//if final array is declared inside the for loop then I get the result ['ab']['cd']['ef']
//but when it is declared outside the for loop then I get the result ['ab', 'cd', 'ef']

//For even length string
if(len % 2 == 0){
    let finalEven = []
//     Each iteration i increments by 2
    for(let i = 0;i< len; i = i+2){
        let result = str[i]+str[i+1]
    //    console.log(result)
       finalEven.push(result)
    }
    return finalEven
}
    else{
        let finalOdd = []
    for(let i = 0;i< len; i = i+2){
        let result = str[i]+str[i+1]
// To handle the last element
/*Because when str[i+1] becomes str[7] it returns undefined therefore according to the 
  expected output we need to add a '_' */
        if(str[i+1] == undefined){
            finalOdd.push(str[i]+'_')
            break;
        }
        finalOdd.push(result)
          
    }
    return finalOdd
}


}
solution('abcdef')
solution('abcdefg')
