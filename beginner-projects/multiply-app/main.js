// const num1 = Math.ceil(Math.random() * 10);
// const num2 = Math.ceil(Math.random() * 10);

// const questionEl = document.getElementById("question");

// const inputEl = document.getElementById("input");

// const formEl = document.getElementById("form");

// const scoreEl = document.getElementById("score");

// let score = JSON.parse(localStorage.getItem("score"));  

// if (!score) {
//     score = 0;
// }

// scoreEl.innerText = `score: ${score}`;


// questionEl.innerText = `What is ${num1} multiply by ${num2}?`;

// const correctAns = num1 * num2;

// formEl.addEventListener("submit", () => {
//     const userAns = +inputEl.value
//     if (userAns === correctAns) {
//         score++;
//         updateLocalStorage();
//     } else {
//         score--;
//         updateLocalStorage();
//     }
// });

// function updateLocalStorage() {
//     localStorage.setItem("score", JSON.stringify(score))
// }




const questionEl = document.getElementById("question");

const inputEl = document.getElementById("input");

const scoreEl = document.getElementById("score");

let remQs = document.getElementById("rem");

let start = document.getElementById("start");

let submit = document.getElementById("btn");

let quest = document.getElementById("questi");

let label = document.getElementById("label");

let result = document.getElementById("result");

let reset = document.getElementById("reset");


    questionEl.style.display = "none";
    remQs.style.display = "none";
    start.disabled = true;
    result.style.display = "none";
    scoreEl.style.display = "none";
    reset.style.display = "none";


var score = 0;

var no;

var ans;

quest.addEventListener("change", () => {
    start.disabled = false;
})

start.addEventListener("click", () => {
    inputEl.style.display = "block";
    submit.style.display = "block";
    questionEl.style.display = "block";
    start.style.display = "none";
    label.style.display = "none";
    quest.style.display = "none";
    remQs.style.display = "block";
    scoreEl.style.display = "block";
    no = quest.value;
    updateQues();
})

submit.addEventListener("click", () => {
    if (inputEl.value == ans || inputEl.value != ans && inputEl.value != "") {
        no--;
    }

    if (inputEl.value == ans) {
        score++
        score < 10 ? scoreEl.innerText = `score: 0${score}` : scoreEl.innerText = `score: ${score}`;
    } else if (inputEl.value == "") {
        alert("Enter answer");
        no;
    }

    if (no == 0) {
        disable()
        if (score < 10) {
            result.innerText = `Result : 0${score} out of ${quest.value}`
        } else {
            result.innerText = `Result : ${score} out of ${quest.value}`
        }

    }
    updateQues();

})

reset.addEventListener("click", () => {
    label.style.display="block";
    quest.style.display = "block";
    start.style.display="block";
    reset.style.display="none";
    result.style.display="none";
    quest.value=""
})

function disable() {
    inputEl.style.display = "none";
    questionEl.style.display = "none";
    submit.style.display = "none";
    remQs.style.display = "none";
    scoreEl.style.display = "none";
    result.style.display = "block";
    reset.style.display = "block";
}

function updateQues() {
    const num1 = Math.ceil(Math.random() * 10);
    const num2 = Math.ceil(Math.random() * 10);
    questionEl.innerText = `What is ${num1} multiply by ${num2}?`;
    no < 10 ? remQs.innerText = `Remaining Qs: 0${no}` : remQs.innerText = `Remaining Qs: ${no}`;
    ans = num1 * num2;
    inputEl.value = "";
}