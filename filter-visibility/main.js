const none = document.getElementById("none");
const blurr = document.getElementById("blur");
const brightness = document.getElementById("brightness");
const contrast = document.getElementById("contrast");
const gray = document.getElementById("grayscale");
const hue = document.getElementById("huerotate");
const invert = document.getElementById("invert");
const opacity = document.getElementById("opacity");
const saturate = document.getElementById("saturate");
const sepia = document.getElementById("sepia");
const shadow = document.getElementById("shadow");
const visible = document.getElementById("visible");
const hidden = document.getElementById("hidden");

const img = document.getElementById("img");

img.style.visibility = "hidden";

none.addEventListener("change", ()=>{
    img.style.filter = "none";
})

blurr.addEventListener("change", ()=>{
    img.style.filter = "blur(4px)";
});

brightness.addEventListener("change", ()=>{
    img.style.filter = "brightness(0.8)";
})

contrast.addEventListener("change", ()=>{
    img.style.filter = "contrast(140%)";
})

gray.addEventListener("change", ()=>{
    img.style.filter = "grayscale(40%)";
})

hue.addEventListener("change", ()=>{
    img.style.filter = "hue-rotate(180deg)";
})

invert.addEventListener("change", ()=>{
    img.style.filter = "invert(80%)";
})

opacity.addEventListener("change", ()=>{
    img.style.filter = "opacity(90%)";
})

saturate.addEventListener("change", ()=>{
    img.style.filter = "saturate(160%)";
})

sepia.addEventListener("change", ()=>{
    img.style.filter = "sepia(0.9)";
})

shadow.addEventListener("change", ()=>{
    img.style.filter = "drop-shadow(8px 8px 6px #e63f68)";
})

visible.addEventListener("change", ()=>{
    img.style.visibility = "visible";
})

hidden.addEventListener("change", ()=>{
    img.style.visibility = "hidden";
})