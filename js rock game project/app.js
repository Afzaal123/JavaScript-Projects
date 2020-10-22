
let playerChoice;
let cmpchoice;
let start=false;
let value=100;
let initialHealth=100;
let playerhealth=100;
let cmphealth=100;




// acessing html id's
const startGameBtn = document.getElementById('start-game-btn'); 
const image1Btn = document.getElementById('image-1');
const image2Btn = document.getElementById('image-2');
const image3Btn = document.getElementById('image-3');
const choosedImgBtn= document.getElementById('choosed-img');
const cmpImgBtn= document.getElementById('cmp-img');
const playerHealthBtn= document.getElementById('playerHealth');
const cmpHealthBtn= document.getElementById('cmpHealth');





startGameBtn.addEventListener('click',headingHandler);
// (image1Btn||image2Btn||image3Btn).addEventListener('click',cmpImgHandler);
image1Btn.addEventListener('click',playerImg1);
image2Btn.addEventListener('click',playerImg2);
image3Btn.addEventListener('click',playerImg3);





function headingHandler (){
document.getElementById("h1").innerHTML='choose rock, stone or paper';
start=true;
}


function playerImg1(){
if(start){
choosedImgBtn.src="images/download (11).jpg";
cmpImgHandler('r');}
}
function playerImg2(){
if(start){
choosedImgBtn.src="images/download (12).jpg";
cmpImgHandler('p');}
 }
function playerImg3(){
if(start){
choosedImgBtn.src="images/images (6).jpg";
cmpImgHandler('s');}
}


function cmpImgHandler(pchoice){
    
    let cal=Math.random();
    if (cal>.7){cmpImgBtn.src="images/download (11).jpg";
    cmpchoice='r';
    playerChoice=pchoice;
    getwinner(cmpchoice,playerChoice);}

    else if(cal<.3){cmpImgBtn.src="images/download (12).jpg";
    cmpchoice='p';
    playerChoice=pchoice;
    getwinner(cmpchoice,playerChoice);}

    else{cmpImgBtn.src="images/images (6).jpg";
    cmpchoice='s';
    playerChoice=pchoice;
    getwinner(cmpchoice,playerChoice);}

 
}

function getwinner(CMPCHOICE, PCHOICE){
    if((CMPCHOICE==='r'&& PCHOICE==='s')||(CMPCHOICE==='s'&& PCHOICE==='p')||
    (CMPCHOICE==='p'&& PCHOICE ==='r')){
     startGameBtn.innerHTML='YOU LOST!!!';
     getplayerHealth();
     
    }
     else if(CMPCHOICE===PCHOICE){
        startGameBtn.innerHTML='ITS DRAW!!!';
     }

     else {startGameBtn.innerHTML='YOU WON!!!';
     getCmpHealth();    
    }
    
    if(cmphealth<=0 && playerhealth>0){
        alert('Congratualtions you won this round');
        start=false; 
        startGameBtn.innerHTML='Restart Game';
        startGameBtn.addEventListener('click', Restart);     
    }

    else if(cmphealth>0 && playerhealth<=0)
    {alert('Sorry you lost this round. Try again');
    start=false; 
    startGameBtn.innerHTML='Restart game';
    startGameBtn.addEventListener('click', Restart);     
}
    
}

function getCmpHealth(){
  
 cmpHealthBtn.value=cmpHealthBtn.value-20;
 cmphealth-=20; 
}

function getplayerHealth(){

     playerHealthBtn.value=playerHealthBtn.value-20;
     playerhealth -=20;
}

function Restart(){
   
    start=true;
    playerHealthBtn.value= initialHealth;
    cmpHealthBtn.value = initialHealth;
    playerhealth= initialHealth;
    cmphealth = initialHealth;  
}

