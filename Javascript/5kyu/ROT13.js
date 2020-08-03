
// How can you tell an extrovert from an introvert at NSA? Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

// I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it? According to Wikipedia, ROT13 (http://en.wikipedia.org/wiki/ROT13) is frequently used to obfuscate jokes on USENET.

// Hint: For this task you're only supposed to substitue characters. Not spaces, punctuation, numbers etc. Test examples:
function rot13(str) {
  const convertLetter = ( char ) => {
    const code = char.charCodeAt()
    if(
      code > 96 + 13 || 
      ( code >= 65 + 13  && code < 91 )
    ){
      return (String.fromCharCode( code - 13))
    }
    else {
      return String.fromCharCode(code + 13)
    }
  }
  
  const isLetter = ( char ) => char.replace(/[a-z]|[A-Z]/, '').length !== char.length 
  
  let returnVal = str
    .split('')
    .map((char) => isLetter(char) ? convertLetter(char) : char )
    .join('')
  console.log('string is '+ str, 'return is ' + returnVal)