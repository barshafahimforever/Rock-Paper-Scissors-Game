let userScore = 0;
let comScore = 0;


const choices = document.querySelectorAll(".choice")

const msg = document.querySelector("#msg");

const comp_score = document.querySelector("#comp-score");
const user_score = document.querySelector("#user-score");

const comChoice = () => {
    const options = ["rock","paper","Scissors"];
    let rand = Math.floor(Math.random()*3);
    return options[rand];
};


const playGame = (userChoice) =>{       //on this line doubt
    console.log("user choice = ", userChoice);
    const computerChoice = comChoice();
    console.log("computer choosed =",computerChoice);

    if(userChoice === computerChoice){
        console.log("draw")
        msg.innerText = "game draw play again "
        msg.style.backgroundColor = "black";
    }else if((userChoice==="Scissors" & computerChoice==="rock") || (userChoice==="paper" & computerChoice==="Scissors")|| (userChoice==="rock" & computerChoice==="paper")){
        console.log("looser");
        msg.innerText = ` you choosed ${userChoice} and computer choosed ${computerChoice} you loosed`; 
        msg.style.backgroundColor = "red";
        comScore++;
        user_score.innerText = comScore;
        comp_score.innerText = userScore;
        
    }else if((userChoice==="Scissors" & computerChoice==="paper") || (userChoice==="paper" & computerChoice==="rock")|| (userChoice==="rock" & computerChoice==="Scissors")){
        console.log("winner");
        msg.innerText = ` you choosed ${userChoice} and computer choosed ${computerChoice} you won`;
        msg.style.backgroundColor = "green";
        userScore++;
        user_score.innerText = comScore;
        comp_score.innerText = userScore;
    }
    

};


choices.forEach((choice) => {
    // console.log(choice);
    const userChoice = choice.getAttribute("id");
    choice.addEventListener("click",() => {
        playGame(userChoice);   // doubt on this linie 
    });
});

