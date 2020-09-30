function calculateBmi(){
  // where the logic goes
  let name_input = document.querySelector("#name"),
      weight_input = document.querySelector("#weight"),
      height_input = document.querySelector("#height");
  
  
  let name = name_input.value,
      weight = weight_input.value,
      height = height_input.value;
  
  let bmi = weight / (height * height);
  
  console.log(bmi)
  
  document.getElementById("result").innerHTML = name + " your BMI is " + bmi.toFixed(2);
  
  name_input.value = "";
  weight_input.value = "";
  height_input.value = "";
  
}


// javascript map function
// map, reduce, filter, forEach, push, slice, splice

//calculateBmi();





//let element = document.getElementById("h1");
//
//console.log(element)
//
//element.innerHTML = "<a href='https://google.com' >Google</a>";
//element.innerText = "Amazon";




// difference let and const
// es6 ecma script 6