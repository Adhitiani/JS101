//Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.

//Numerical score letter grade list:

/*90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F' */

function getGrade(score1, score2, score3) {
  let score = (score1 + score2 + score3) / 3;
  console.log(score);

  if (90 <= score && score <= 100) {
    return 'A';
  } else if (80 <= score && score < 90) {
    return 'B';
  } else if (70 <= score && score < 80) {
    return 'C';
  } else if (60 <= score && score < 70) {
    return 'D';
  } else {
    return 'F';
  }
};

console.log(getGrade(50, 50, 95));
console.log(getGrade(90, 50, 95));
