//https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript
// My Solution
function toCamelCase(str){
  //console.log(str, 'testing')
  if(str === ''){
    return ''
  } else {

   let containmentArea = []
   let splitString = str.replace(/[^A-Z0-9]/ig, "_").split("_")
   //[ 'the', 'stealth', 'warrior' ]
   let firstElement = containmentArea.push( splitString.splice(0,1) )

   for(let word in splitString){

     let splitWords = splitString[word].split('')
     let capitalLetter = splitWords[0].toUpperCase()

     splitWords.splice(0,1, capitalLetter)
     let joinedWord = splitWords.join('')

     containmentArea.push(joinedWord)
     let newSentence = containmentArea.join('')

   }
     return containmentArea.join('')
  }
}

//Shorter Version

function toCamelCase(str){

      var regExp =/[-_]\w/ig;

      return str.replace(regExp,function(match){
            return match.charAt(1).toUpperCase();
       });
}
