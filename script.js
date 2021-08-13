const A=document.getElementById("A");
const S=document.getElementById("S");
const D=document.getElementById("D");
const F=document.getElementById("F");
const G=document.getElementById("G");
const H=document.getElementById("H");
const J=document.getElementById("J");
const K=document.getElementById("K");
const L=document.getElementById("L");

const clap=document.getElementById("clap");
const hihat=document.getElementById("hihat");
const kick=document.getElementById("kick");
const openhat=document.getElementById("openhat");
const boom=document.getElementById("boom");
const ride=document.getElementById("ride");
const snare=document.getElementById("snare");
const tom=document.getElementById("tom");
const tink=document.getElementById("tink");

A.addEventListener("click",function(){
    clap.play();
});
S.addEventListener("click",function(){
    hihat.play();
   });
D.addEventListener("click",function(){
    kick.play();
   });
F.addEventListener("click",function(){
    openhat.play();
   });
G.addEventListener("click",function(){
    boom.play();
   });
H.addEventListener("click",function(){
    ride.play();
   });
J.addEventListener("click",function(){
    snare.play();
   });
K.addEventListener("click",function(){
    tom.play();
   });
L.addEventListener("click",function(){
    tink.play();
   });
// ------------------------------------------------
//    let datakey=(65,68)

//    onkeypress = function(e){
//     if(e.datakey == 8){
//         clap.play();
//     }

window.addEventListener("keydown",function(event){
let currentAudio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
if(currentAudio === null)
{
    return ""; 
}else {

    currentAudio.play();
}

})