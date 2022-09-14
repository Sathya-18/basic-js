var nav = document.getElementById('nav');

var btn = document.getElementById('btn');

btn.addEventListener('click', ()=>{
    nav.classList.toggle('show');
    btn.classList.toggle('rot')
})