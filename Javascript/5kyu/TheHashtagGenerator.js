// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false



function generateHashtag (str) {
  let stripped = str.replace(/ /g, '')
  
  if( stripped.length >= 140 ||  stripped.length < 1){
    return false
  }
  
  let words = str.split(/\s+/)
  
  correctedWords = words.map( word => {
    return word.split('').map((character,index) =>{
      if(index === 0){ 
        return character.toUpperCase()
      }
      else{
        return character.toLowerCase()
      }
    })
    .join('')
  })

  return '#' + correctedWords.join('')
}