function calculateBMI (){
   const unit = document.getElementById("unit").value;
   const weight = parseFloat(document.getElementById("weight").value);
   const height = parseFloat(document.getElementById("height").value);
   const body = document.querySelector("body")
   
    //check if the user inputs are valid
   if (isNaN (weight) || isNaN(height) && (weight <= 0 )|| (height <= 0) ) {
    alert("Enter a valid Value");
    return
   }
   let bmi;
// Good job 
// now create an if statement that checks if the user selected metric or imperia

  if (unit === "metric"){
    bmi =  (weight / (height / 100) ** 2);

  } else{
    bmi =  (weight / (height ** 2)) * 703; 
  }
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `Your Bmi is: ${bmi.toFixed(2)}`;
// now check the bmi and assign each to the right bmi 
   if (bmi < 18.5){
    resultElement.innerHTML += "<br /> Underweight <br> Eat Healthier"
body.setAttribute("style","background-color:#ffc0cb")

   }else if(bmi >= 18.5 && bmi <= 24.5) {

    resultElement.innerHTML += "<br /> Normal Weight <br> Keep it up";
    body.setAttribute("style", "background-color: #28a745")
   } else if (bmi >= 24.5 && bmi <= 29.9){

    resultElement.innerHTML += "<br /> Overweight <br> Hey!! Slow Down on those Calories";
    body.setAttribute("style", "background-color: #ffa07a");
   
   } else{
    resultElement.innerHTML += "<br /> Obesity <br> Seek Medical Help!!"
    body.setAttribute("style", "background-color: #dc3545", )
   }

 }














