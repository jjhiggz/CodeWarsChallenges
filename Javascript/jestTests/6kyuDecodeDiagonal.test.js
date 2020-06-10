const decodeDiagonal = require('../6kyu/6kyuDecodeDiagonal.js')
var grid = ( 
  "C \n" +
  "D o F C A E A s ! \n" +
  "G H d E L A r \n" +
  "L M N e P a F \n" +
  "X Z R P W"
  );

test('converts string grid into array of arrays', () => {
  expect(decodeDiagonal(grid)).toBe('CodeWars')
})