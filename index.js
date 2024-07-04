
/*function oncclick(){
    alert("clicked");
}
for(var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",oncclick);
}
*/
function crash(){
   
    var audio=new Audio('./sounds/crash.mp3');
    audio.play();
}
function kickbass(){
   
    var audio=new Audio('./sounds/kick-bass.mp3');
    audio.play();
}
function snare(){
   
    var audio=new Audio('./sounds/snare.mp3');
    audio.play();
}
function tom1(){
   
    var audio=new Audio('./sounds/tom-1.mp3');
    audio.play();
}
function tom2(){
   
    var audio=new Audio('./sounds/tom-2.mp3');
    audio.play();
}
function tom3(){
   
    var audio=new Audio('./sounds/tom-3.mp3');
    audio.play();
}
function tom4(){
   
    var audio=new Audio('./sounds/tom-4.mp3');
    audio.play();
}




document.querySelector(".w").addEventListener("click",crash);
document.querySelector(".a").addEventListener("click",kickbass);
document.querySelector(".s").addEventListener("click",snare);
document.querySelector(".d").addEventListener("click",tom1);
document.querySelector(".j").addEventListener("click",tom2);
document.querySelector(".k").addEventListener("click",tom3);
document.querySelector(".l").addEventListener("click",tom4);

document.addEventListener("keydown",function(event){
    switch(event.key){
        case "w":
            crash();
            break;
        case "a":
            kickbass();
            break;
        case "s":
            snare();
            break;
        case "d":
            tom1();
            break;
        case "j":
            tom2();
            break;
        case "k":
            tom3();
            break;
        case "l":
            tom4();
            break;
        default:
            break;
    }

    });
    
    

/*
document.querySelector(".a").addEventListener("keydown",kickbass);
document.querySelector(".s").addEventListener("keydown",snare);
document.querySelector(".d").addEventListener("keydown",tom1);
document.querySelector(".j").addEventListener("keydown",tom2);
document.querySelector(".k").addEventListener("keydown",tom3);
document.querySelector(".l").addEventListener("keydown",tom4);



function cra(){
    var audio=new Audio('./sounds/crash.mp3');
    audio.play();
}
functionkb(){

}
document.querySelector(".w").addEventListener("keydown",cra);
*/