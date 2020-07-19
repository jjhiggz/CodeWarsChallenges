// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

Function pow = (int x, int n) {
  // made since dart doesn't have a built in power function
  // there are libraries that do exactly this, specificaly math.pow, but
  // codeware woudn't let you import that on this challenge

  int returnExp = n == 0 ? 1 : x;
  for (int i = 1; i < n; i++) {
    returnExp *= x;
  }
  return returnExp;
};

int binaryArrayToNumber(List<int> arr) {
  int binaryReturn = 0;

  for (int i = 1; i <= arr.length; i++) {
    binaryReturn += arr[arr.length - i] * pow(2, i - 1);
  }

  if (arr.length == 1) {
    return arr[0];
  }

  return binaryReturn;
}

// the testing on this problem is actually insufficient. It never checks the variablitly  of the array size despite the fact that it is specified that the array can have more than 4 elements, also
// The randomly generated arrays did not account for the edge case scenarios so I added some testing which can be seen down below

// import "package:test/test.dart";
// import "package:solution/solution.dart";

// void main() {
//   group('Fixed tests', () {
//     test("Testing for [0, 0, 0, 1]", () => expect(binaryArrayToNumber([0, 0, 0, 1]), equals(1)));
//     test("Testing for [0, 0, 1, 0]", () => expect(binaryArrayToNumber([0, 0, 1, 0]), equals(2)));
//     test("Testing for [1, 1, 1, 1]", () => expect(binaryArrayToNumber([1, 1, 1, 1]), equals(15)));
//     test("Testing for [0, 1, 1, 0]", () => expect(binaryArrayToNumber([0, 1, 1, 0]), equals(6)));
//     after this point I wrote my custom tests
//     test("Testing for [1,0, 1, 1, 0]", () => expect(binaryArrayToNumber([1, 0, 1, 1, 0]), equals(22)));
//     test("Testing for [0]", () => expect(binaryArrayToNumber([0]), equals(0)));
//     test("Testing for [0]", () => expect(binaryArrayToNumber([1]), equals(1)));
//   });
// }
