const textEl = document.getElementById("textarea");
const totalEl = document.getElementById("totalChar");
const remainEl = document.getElementById("remainingChar");

textEl.addEventListener('keyup', () => {
    totalEl.innerText = textEl.value.length;
    remainEl.innerText = textEl.getAttribute("maxlength") - textEl.value.length;
})


