let txtEl = document.querySelectorAll(".txt");
let btnEl = document.querySelectorAll(".btn");

const colors = ['red', 'green', 'brown', 'blue'];
let flag = 0;

function hideTexts(txt) {
    txt.style.display = "none"
}

txtEl.forEach(hideTexts)

btnEl.forEach((btn) => {
    btn.addEventListener("click", changeColor)
});

function changeColor() {
    var box = this.nextElementSibling;
    box.style.display = "block"
    box.style.color = colors[this.nextElementSibling.flag];
    this.nextElementSibling.flag++

    if (this.nextElementSibling.flag == colors.length+1) {
        box.style.display = "none"

        this.nextElementSibling.flag = 0;
    }
}

txtEl.forEach(addFlag);

function addFlag(text) {
    text.flag = 0;
}


// function changeColor(){
//     var box = this.parentNode;
//     var txt = box.querySelector('p');
//     if (txt.style.display === "none"){
//         txt.style.display = "block";
//         txt.style.color = colors[flag];
//         flag++;
//         if(flag == colors.length){
//          flag=0;
//         }
//     }else{
//         txt.style.display = "none";
//     }
// }


// function changeColor() {
//     var box = this.parentNode;
//     var txt = box.querySelector('p');
//     txt.style.color = colors[flag];
//     flag++;
//     if(flag == colors.length){
//         flag=0;
//     }
// }





