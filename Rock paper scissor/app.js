let userScore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")

const userScorePara=document.querySelector("#user-score");
const compscorePara=document.querySelector("#comp-score");

//user Choices
choices.forEach((choice)=>{ 
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});



//take users choice and computers choice
const playGame=(userChoice)=>
{
    // console.log("user choice",userChoice);

    //Generate computers choice
    const compChoice=genCompChoice();
    // console.log("comp choice =",compChoice);

    if(userChoice==compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //scisssor,paper
            userWin=compChoice==="paper"?false:true;
        }
        //rock,scissor
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            //rock,paper
            userWin=compChoice==="rock"?false:true;
        }
            showWinner(userWin,userChoice,compChoice)
    }
}

//Computer generating random outcomes
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

//fuction to show win and loose on screen
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("        You Win !");
        msg.innerText=`You Won! 😁 Your ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscorePara.innerText = compscore;
        console.log("        You loose");
        msg.innerText=`You Lost! ☹️ ${compChoice} beats your ${userChoice} `;
        msg.style.backgroundColor="red";
    }
}
const drawGame=()=>{
    console.log("     Game was draw");
    msg.innerText="Game was Draw 😅."
    msg.style.backgroundColor="#081b31";
}

