
// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// nextBigger(num: 12)   // returns 21
// nextBigger(num: 513)  // returns 531
// nextBigger(num: 2017) // returns 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1
// nextBigger(num: 9)   // returns nil
// nextBigger(num: 111) // returns nil
// nextBigger(num: 531) // returns nil




function nextBigger(n){
  nArray = n.toString().split('')
  console.log('n',n)
  let testArray = []
  if( nArray.length <= 1 ){return -1} 
  if( nArray.length <= 2){
    if(nArray[0] < nArray[1]){
      return +(nArray[1] + nArray[0])
    }
  }
  for(let i = 1; i < nArray.length + 1; i++ ){
  
    testArray =  nArray.slice( nArray.length - i )
    let testMapping = Array.from(Array(10), ()=>0)
    testArray.forEach(number => testMapping[number] = testMapping[number] + 1)
    if(testArray[0] <= Math.max(...testArray.slice(1))){
      //replace testArray[0] with the next biggest number
      let newFirstNumber = testArray.slice(1)
        .sort((a,b)=>a-b)
        .find(number => number > testArray[0])

      testMapping[newFirstNumber] -= 1
      let newEnding = testMapping.reduce((acc, elem, index) => {
        return acc.concat(...Array.from(Array(elem), ()=>index))
      },[])
      let shortenedInput = nA4kyirray.slice(0, -i)
      if(+[...shortenedInput, newFirstNumber, ...newEnding].join('') > n){
        return +[...shortenedInput, newFirstNumber, ...newEnding].join('')
      }
    }
  }
  
  return -1
  
}