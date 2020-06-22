/*=]
A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits):

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1634 (4 digits):

    1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634
The Challenge:

Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.

Error checking for text strings or other invalid inputs is not required, only valid integers will be passed into the function.

Below please find my solution 
*/

function narcissistic(value) {
  // Code me to return true or false
  let digitsArray = value.toString().split('')
  let numberOfDigits = digitsArray.length
  let checkValue = digitsArray
    .map(digit => digit**numberOfDigits)
    .reduce((a,b) => a+b,0)
  
  return checkValue === value ? true : false
}

/*
The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

In effect: 89 = 8^1 + 9^2

The next number in having this property is 135.

See this property again: 135 = 1^1 + 3^2 + 5^3

We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.
*/
function sumDigPow(a, b) {
  // Your code here
  function isEureka(number){
    let count = 0
    let digitsArray = number.toString().split('')
        .map( numstring => +numstring )
        .map(num => {
          count = count + 1
          return num**count
        })
    const digitsSum = digitsArray.reduce( ( a, b ) => a + b, 0 )
    return digitsSum === number
  }
    let returnArray = []
    for(let i=a; i<b;i++){
      if(isEureka(i)){
        returnArray.push(i)
      }
    }
  return(returnArray)
}

