let gameseq=[];
let userseq=[];
let btns=["yellow","red","purple","green"];


let started=false;
let level=0;
let highscore=0;


let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
if(started==false){
    console.log("Game Started");
    started=true;
}

levelup();

});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200)
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200)


}
function levelup(){ 
    userseq=[];
    level++;
    if (highscore<level) {
        highscore=level;
        
    }
    h2.innerText=`Level ${level}`;

    let randidx=Math.floor(Math.random()*3);
    let randColor=btns[randidx];
    let randbtn=document.querySelector(`.${randColor}`);
//random btn choose
// console.log(randidx);
// console.log(randColor);
// console.log(randbtn);
gameseq.push(randColor);
console.log(gameseq);
gameflash(randbtn);
}


function checkans(idx){
    // console.log("curr level",level)

   

    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000)
        }

    }
    else{
        if (level>highscore) {
            highscore=level;
            
        }
      h2.innerHTML=`Game Over!Your score was <b>${level}</br> and highscore is <b>${highscore}</b> <br> Press any key to start.`; 
      document.querySelector("body").style.backgroundColor="red";
      setTimeout(function (){
        document.querySelector("body").style.backgroundColor="white";

      },150) 
      reset();
      
    }
}


function btnpress(){
   
    let btn=this;
    userflash(btn);

    userColor= btn.getAttribute("id");
    userseq.push(userColor);
    checkans(userseq.length-1); 
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}
