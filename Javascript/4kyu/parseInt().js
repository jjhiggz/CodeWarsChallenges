function parseInt(string) {
  if(string === 'zero') return 0
  const splitBySpace = string.split(' ').filter( word => word !== 'and' )
  const singlesAndTeens = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten:10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
  }
  const dubz = {
    ten: 10,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
  }

  const powersOfTen = {
    hundred: 2,
    thousand: 3,
    million: 4,
  }

  let currentPower = 0
  let sum = 0
  const convertHyphenated = (string) => string.split('-').length > 1 ?
    singlesAndTeens[string.split('-')[1]]+ dubz[string.split('-')[0]]
  : singlesAndTeens[string.split('-')[0]]

  const exp = (number, powerOfTen) => number * 10**powerOfTen
  
  for(let i = 0; i < splitBySpace.length ; i++){
    console.log(i)
    const currentWord = splitBySpace[i]
    if ( powersOfTen.hasOwnProperty(currentWord) ){
      console.log('hit', i)
      currentPower = powersOfTen[currentWord]
      const substring = splitBySpace.slice(i + 1 , splitBySpace.length).join(' ')
      if(substring.split(' ').filter( char => char != '' ).length >= 1){
        sum = sum * 10**currentPower + parseInt( substring )
      } else {
        console.log(currentPower, sum, substring)
        sum = sum * 10**currentPower
      }
      console.log('final', sum, i)
      break
    } 
    else {
      sum += exp(convertHyphenated(currentWord),currentPower)
      console.log('hit else', i, currentWord, convertHyphenated(currentWord),sum)
    }

  }
  return sum
}

let samples = [ 
  'one', 
  'twenty',
  'ninety-nine',
  'nine hundred ninety-nine',
  'one thousand eighty-four',
  'thirty-five thousand',
  'one hundred',
  'six hundred sixty-six thousand six hundred sixty-six']
console.log(parseInt(samples[7]))