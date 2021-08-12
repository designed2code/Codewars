function spinWords(string){
  let splitstr = string.split(' ')
  let length_of_loop = splitstr.length
  
  let result = []
  for(i = 0; i<length_of_loop; i++){
    let length_of_each_ele = splitstr[i].length
    if(length_of_each_ele >= 5){
      result.push(splitstr[i].split('').reverse().join(''))
    }
    else{
      result.push(splitstr[i])
    }
  }
  return result.join(' ')
}
spinWords("Welcome")
