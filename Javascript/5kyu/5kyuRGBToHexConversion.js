function rbgToHex(r, g, b){
  function numToHex(num){
    let sixteens = 0
    let ones = 0
    let newNum = num
    while ( newNum >= 16 && sixteens < 15){
      console.log(sixteens)
      sixteens+= 1
      newNum = newNum - 16
    }
    while ( newNum > 0  && ones < 15 ){
      ones++
      newNum -= 1
    }
    function numberToLetter(number){
      if( number < 10 ) return number.toString()
      else return {
        10: "A",
        11: "B",
        12: "C",
        13: "D",
        14: "E",
        15: "F",
      }[number]
    }
    return  numberToLetter(sixteens) + numberToLetter(ones)
  }
  return numToHex(r) + numToHex(g) + numToHex(b) 
}


