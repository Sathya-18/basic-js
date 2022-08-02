const btnEl = document.getElementById("btn");
const txtEl = document.getElementById("txt");
let a = 0;
btnEl.addEventListener('click',  () => {
    if (a == 0) {
        btnEl.style.backgroundColor = 'rgb(228, 93, 43)';
        txtEl.innerText = "My text";
        a = 1;
    }else if(a==1){
        btnEl.style.backgroundColor = 'rgb(253, 167, 6)';
        txtEl.innerText = ""; 
        a=0;
    }
})






