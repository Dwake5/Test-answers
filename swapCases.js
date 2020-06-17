// https://www.hackerrank.com/challenges/swap-case/problem

// You are given a string and your task is to swap cases. In other words, convert all lowercase letters to uppercase letters and vice versa.


const swapCases = str => {
  let length = str.length
  if (length > 1000) return 'Does not meet constraints'

  let newString = ''

  for (i = 0; i < length; i++) {
    if (str.charAt(i) === str.charAt(i).toUpperCase()){
      newString += str.charAt(i).toLowerCase()
    } else {
      newString += str.charAt(i).toUpperCase() 
    }
  }

  return newString
}
