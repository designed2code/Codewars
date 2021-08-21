// https://www.codewars.com/kata/5866fc43395d9138a7000006/solutions/javascript
function ensureQuestion(s) {
    // CASE 1.
    // If string is an empty string then return '?'
    if(s == " "){
      return '?'
    }
    // CASE 2.
    // If the last character of the string is '?' then return the string
    if(s.charAt(s.length-1) == '?'){
    return s
    }

    // CASE 3.
    // If the last character of the string is not '?' then append (concat) the string with '?' and return
    else{
      return s+'?'
    }
  }
