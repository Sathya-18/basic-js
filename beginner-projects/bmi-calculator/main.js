let massIn = document.getElementById("num1");
let heightIn = document.getElementById("num2");
let calculate = document.getElementById("btn");
let result = document.getElementById("result");
let massunit = document.getElementById("mass");
let heightunit = document.getElementById("height");
let error = result.innerText;



function changeM(){
    if (massunit.value == "kg"){
        heightunit.value = "cm";
    }
    else if (massunit.value == "pounds"){
        heightunit.value = "inches";
    }
}

massunit.addEventListener("change", changeM);


function changeH(){
    if (heightunit.value == "cm"){
        massunit.value = "kg";
    }
    else if (heightunit.value == "inches"){
        massunit.value = "pounds";
    }
}

heightunit.addEventListener("change", changeH)

calculate.addEventListener("click", bmi);
 

function bmi () {

    var mass = massIn.value;
    var height = heightIn.value;

    if(massunit.value == "pounds"){
        mass = mass * 703;
    }else {
        height = height / 100;
    }
    
    var out = mass / (height ** 2);
    var outp = out.toFixed(2)

    
    if (outp <= 18.4){
        result.innerText = "Your BMI is " + outp + ". Which means you are underweight.";
    }
    else if (outp >=18.5 && out <25){
        result.innerText = "Your BMI is " + outp + ". Which means you are normal."
    }
    else if (outp >=25 && out <40){
        result.innerText = "Your BMI is " + outp + ". Which means you are overweight."
    }
    else if (outp >=40){
        result.innerText = "Your BMI is " + outp + ". Which means you are obese."
    }


    
    if (mass == 0 || height == 0){
        alert("Plese enter valid input value")
        result.innerText = error;
    }
    else if ( mass <0 || height <0){
        alert("Negative value not allowed")
        result.innerText = error;
    }
}

