// BMI = body mass index; weight / (height * height);

/*
  1. store Mark and Bobs weight and height in a variable
  2. calculate their BMI
  3. console log both BMI values
*/

// string, boolean, number, 
// object, array

// for loops, functions, DOM manupilation

var mark_height = 1.75;
var mark_weight = 55;
var mark_bmi = mark_weight / (mark_height * mark_height);

// if (mark_bmi < 18.5) {
//   console.log("You are underweight, your Bmi is", mark_bmi);
// } else if (mark_bmi >= 18.5 && mark_bmi < 25) {
//   console.log("You are normal, your Bmi is", mark_bmi);
// } else if (mark_bmi >= 25 && mark_bmi < 30) {
//   console.log("You are overweight, your Bmi is", mark_bmi);
// } else {
//   console.log("You are obese, your Bmi is", mark_bmi);
// }

// truthy and falsy, ==, === 

var a = "1";
var b = "1";

if (a === b) {
  console.log("it is true");
} else {
  console.log("it is false");
}





if (2 == 2 && 3 == 4) {
  // true
} else {
  //false
}

/*
  if (condition) {
    // if true
  } else {
    // if false
  }
*/

var student_age = 18;

// if (student_age >= 18) {
//   console.log("You can Vote");
// } else {
//   console.log("Come back later");
// }