// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.



// here is my solution

function validBraces(braces){
  braces = braces.split('')
  let i = 0
  const originalLength = braces.length
  while (i <= braces.length){

    if(braces[0] === '}'){ return false }
    if(braces[0] === ']'){ return false }
    if(braces[0] === ')'){ return false }

    const matchingBrace = (brace) => {
      if(brace === '{'){ return '}'}
      if(brace === '['){ return ']'}
      if(brace === '('){ return ')'}
    }
    const indexMatchingBrace = braces.find(brace => brace === matchingBrace(braces[0])) ? braces.indexOf(matchingBrace(braces[0])) : false
    console.log('braces', braces)
    console.log(braces[0])
    console.log('Matching braces', matchingBrace(braces[0]))
    console.log('find', braces.find(brace => brace === matchingBrace(braces[0])) )
    console.log('index', indexMatchingBrace )
    
    if(indexMatchingBrace){
      braces.splice(indexMatchingBrace,1)
      braces.shift()
    }
    else{ return false }
    
    if(braces.length === 0) return true
    i++
    if(i === originalLength) return false
  }
}
let braces = ['(', '{', '}', ')', '[', '(', '{', '}', ')', ']' ].join('')
console.log(validBraces( braces ))