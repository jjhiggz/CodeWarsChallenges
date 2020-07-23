// Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

// 1st (1)   2nd (3)    3rd (6)
// *          **        ***
//            *         **
//                      *
// You need to return the nth triangular number. You should return 0 for out of range values:

//   triangular(0)==0,
//   triangular(2)==3,
//   triangular(3)==6,
//   triangular(-10)==0

// My solition takes advantage of the fact that it is a triangular series
// The number of terms in a triangular series is best figured out graphically by multiplying one by 2
// o
// oo
// ooo

// becomes

// oxxx
// ooxx
// ooox

// now its just a n+1 by n rectangle, which should have (n+1)*n dots, divide that by two and you have your answer

// Here is my solution

triangular(int n) {
  // see https://www.mathsisfun.com/algebra/triangular-numbers.html
  // retuns number of terms in a triangular series
  return n * (n + 1) / 2;
}
