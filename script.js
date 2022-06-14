let array=["Paper","Scissors","Rock"];
let userChoice = null;
let playerValue = 0;
let computerValue = 0;
let isChossed = false;
let playerChoiceElement = document.getElementById("playerChoice");
let computerChoiceElement= document.getElementById("computerChoice");
let resultElement=document.getElementById("result");
let playerScoreElement=document.getElementById("playerValue");
let computerScoreElement=document.getElementById("computerValue");
let buttonPaperElement=document.getElementById("paper");
let buttonScissorsElement=document.getElementById("scissors");
let buttonRockElements=document.getElementById("rock");
let imagesElements=document.getElementsByClassName("images");
let array1=["water","fire","wood"];
let WonElement=document.getElementById("Won");
let LostElement=document.getElementById("Lost");





let isFire=false;

function setUserChoice(type) {
    if(type === "Paper"){
        if(imagesElements[0].style.display ==="none"){
            type="water";
        }
    }
    else if(type === "Rock"){
        if(imagesElements[2].style.display === "none"){
            type="fire";
        }
    }
    else if(type === "Scissors"){
        if(imagesElements[4].style.display === "none"){
            type = "wood";
        }
    }
    userChoice=type;
    playerChoiceElement.innerHTML= type;
    computerChoiceElement.innerHTML= "";
    resultElement.innerHTML="";
    test();
}
function playAgain(){
    computerChoiceElement.innerHTML= "";
    resultElement.innerHTML="";
    playerChoiceElement.innerHTML= "";
    playerValue=0;
    computerValue=0;
    userChoice=null;
    isChossed= false;
    playerScoreElement.innerHTML="0";
    computerScoreElement.innerHTML="0";
    WonElement.style.display="none";
    LostElement.style.display="none";

}
function randomChoice(arr){
    return arr[Math.floor(Math.random()*arr.length)];
}



async function test(){
    if (isChossed === true) {
        return;
    }
    isChossed = true;
    await sleep(3000);
    let computer="";
    if(array.includes(userChoice)){
    computer = randomChoice(array);
    computerChoiceElement.innerHTML= computer;
    }
    else{
        computer= randomChoice(array1);
        computerChoiceElement.innerHTML= computer;
        
    }
    if(whoWon(userChoice,computer)== 0){
        WonElement.style.display="none";
        LostElement.style.display="none";
    }
    else if(whoWon(userChoice,computer)==1){
        playerScoreElement.innerHTML = ""+(++playerValue);
        LostElement.style.display="none";
        WonElement.style.display="block";
    }
    else if(whoWon(userChoice,computer) == -1){
        computerScoreElement.innerHTML = ""+(++computerValue);
        LostElement.style.display= "block";
        WonElement.style.display= "none";   
    }
    
    
    isChossed =false;

}

function whoWon(userChoice,computer){
    if(array.includes(userChoice)){
        if(userChoice === computer) {
            resultElement.innerHTML = "draw";
            return 0;
         } 
         else if(userChoice==="Paper" && computer==="Rock"){
             return 1;
         }
         else if(userChoice==="Paper" && computer==="Scissors"){
             return -1;
         }
         else if(userChoice==="Scissors" && computer==="Rock"){
             return -1;
         }
         else if(userChoice==="Scissors" && computer==="Paper"){
             return 1;
         }
         else if(userChoice==="Rock" && computer==="Paper"){
             return -1;
         }
         else if(userChoice==="Rock" && computer==="Scissors"){
             return 1;
         }

    }
    else if(array1.includes(userChoice)){
        if(userChoice === computer) {
            resultElement.innerHTML = "draw";
            return 0;
         } else if(userChoice==="water" && computer==="fire"){
             playerScoreElement.innerHTML = ""+(++playerValue);
             return 1;
         }
         else if(userChoice==="water" && computer==="wood"){
             computerScoreElement.innerHTML = ""+(++computerValue);
             return -1;
         }
         else if(userChoice==="wood" && computer==="fire"){
             computerScoreElement.innerHTML = ""+(++computerValue);
             return -1;
         }
         else if(userChoice==="wood" && computer==="water"){
             playerScoreElement.innerHTML = ""+(++playerValue);
             return 1;
         }
         else if(userChoice==="fire" && computer==="water"){
             computerScoreElement.innerHTML = ""+(++computerValue);
             return -1;
         }
         else if(userChoice==="fire" && computer==="wood"){
             playerScoreElement.innerHTML = ""+(++playerValue);
             return 1;
         }
    }
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }
 function changeView(){
    Array.prototype.forEach.call(imagesElements, element => {
        
            if(element.style.display === "none"){
                element.style.display="block";    
            }
            else{
            element.style.display="none";
            
            }
            WonElement.style.display="none";
            LostElement.style.display="none";
      });
      console.log(imagesElements);
    
 }
