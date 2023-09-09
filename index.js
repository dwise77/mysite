document.querySelector(".w").addEventListener("click", handleclick);
function handleclick() {
var audio = new Audio ("sounds/crash.mp3");
audio.play();
}
document.querySelector(".a").addEventListener("click" , pr);
function pr() {
    var audio = new Audio ("sounds/snare.mp3");
    audio.play();
}
document.querySelector(".s").addEventListener("click", ss);
function ss() {
    var audio = new Audio ("sounds/kick-bass.mp3");
    audio.play();
}
document.querySelector(".d").addEventListener("click", dd);
function dd() {
    var audio = new Audio ("sounds/tom-1.mp3");
    audio.play();
}
document.querySelector(".j").addEventListener("click", jj);
function jj() {
    var audio = new Audio ("sounds/tom-2.mp3");
    audio.play();
}
document.querySelector(".k").addEventListener("click", kk);
function kk() {
    var audio = new Audio ("sounds/tom-3.mp3");
    audio.play();
}
document.querySelector(".l").addEventListener("click", ll);
function ll() {
    var audio = new Audio ("sounds/tom-4.mp3");
    audio.play();
}

