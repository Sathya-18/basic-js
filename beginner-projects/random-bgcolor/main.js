let body = document.getElementById("body");
let button = document.getElementById("btn");
const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

function bgChange(){
    let hex = '#'

    for (let i = 0; i < 6; i++){
        const index = Math.floor(Math.random()*hexValues.length)
        hex = hex + hexValues[index]
}
    body.style.backgroundColor = hex;
}

button.addEventListener('click', bgChange)