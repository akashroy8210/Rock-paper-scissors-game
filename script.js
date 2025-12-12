let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".box");
const para=document.querySelector("footer");
const msg=document.querySelector("#msg");
const youCount=document.querySelector(".youCounting");
const compCount=document.querySelector(".compCounting");
const genCompChoice=()=>{
    // rock,paper,scissors
    const options=["rock", "paper" ,"scissors"];
    let index=Math.floor(Math.random()*3);
    return options[index];
}
const drawGame=()=>{
    msg.innerText="game was draw! Play Again";
     msg.style.backgroundColor="rgb(5, 27, 60)";
}
const showWinner=(userWin ,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        youCount.innerText=userScore;
        msg.innerText=`You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="Green";
    }else{
        compScore++;
        compCount.innerText=compScore;
        msg.innerText=`You lose! ${compChoice} beats yours ${userChoice}`;
        msg.style.backgroundColor="red";
        msg.style.color="white";
    }
}
const playGame=(userChoice)=>{
    console.log("userChoice=",userChoice);
    const compChoice=genCompChoice();
    console.log("CompChoice=",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper" ? false : true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors" ? false:true;
        }else if(userChoice==="scissors"){
            userWin=compChoice==="rock" ? false: true;
        };
        showWinner(userWin,userChoice,compChoice);
    }
};
choices.forEach((box)=>{
    box.addEventListener("click",()=>{
        const userChoice=box.getAttribute("id");
        playGame(userChoice);

    })
});
