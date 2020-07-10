// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

// Here is my solution to this problem

function humanReadable(total_seconds) {
  function pad2(num){
    return num.toString().length > 1 
      ? num.toString() 
      : '0' + num.toString()
  }
  
  const hours = Math.floor( total_seconds / 3600 )
  const minutes = Math.floor( ( total_seconds - hours * 3600 ) / 60 ) 
  const seconds = Math.floor( ( total_seconds - hours * 3600 - minutes * 60 ) ) 
  
  return( pad2(hours) + ':' + pad2(minutes) + ':' + pad2(seconds))
}