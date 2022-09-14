let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let color = ['red', 'yellow', 'green', 'brown']
// btn1.i = 0;
// btn2.i = 0;

function action() {
    btn1.i = 0;
    btn2.style.backgroundColor = color[btn2.i];
    btn2.i++;
    btn1.style = "none";
    if (btn2.i==color.length){
        btn2.i=0;
    }
}
btn1.addEventListener('click', action);

function action2() {
    btn2.i = 0;
    btn1.style.backgroundColor = color[btn1.i];
    btn1.i++;
    btn2.style = "none"
    if (btn1.i==color.length){
        btn1.i=0;
    }
}


btn2.addEventListener('click', action2);


