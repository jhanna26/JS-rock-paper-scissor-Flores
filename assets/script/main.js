const playerOption = document.querySelector("#playerOption");
const computerOption = document.querySelector("#computerOption");
const resultText = document.querySelector("#resultTxt");
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');

let rockBtn = document.querySelector("#rockBtn");
let paperBtn = document.querySelector("#paperBtn");
let scissorBtn = document.querySelector("#scissorBtn");


let player;
let computer;
let result;
let pScore = 0;
let cScore = 0;

rockBtn.addEventListener("click", () => {
        player = rockBtn.textContent;
        computerTurn();
        playerOption.textContent = `Player: ${player}`;
        computerOption.textContent = `Computer: ${computer}`;
        resultText.textContent = checkWinner();
        Score();
      
});

paperBtn.addEventListener("click", () => {
        player = paperBtn.textContent;
        computerTurn();
        playerOption.textContent = `Player: ${player}`;
        computerOption.textContent = `Computer: ${computer}`;
        resultText.textContent = checkWinner();
        Score();
      
});

scissorBtn.addEventListener("click", () => {
        player = scissorBtn.textContent;
        computerTurn();
        playerOption.textContent = `Player: ${player}`;
        computerOption.textContent = `Computer: ${computer}`;
        resultText.textContent = checkWinner();
        Score();
       
});

 

function computerTurn(){
        const randNum = Math.floor(Math.random()*3)+1;


        switch(randNum){
                case 1 :
                        computer = "Rock";
                        break;
                case 2 :
                        computer = "Paper";
                        break;
                case 3 :
                        computer = "Scissor";
                        break           
        }
        
}
function checkWinner(){
        if(player == computer){
                return "Draw";
                
        }
        else if (player == "Rock"){
                return (computer == "Paper") ? "You Lose!" : "You Win!" ;
        }
       
        else if (player == "Paper"){
                return (computer == "Scissor") ? "You Lose!" : "You Win!";
        }
        else if(player == "Scissor"){
                return (computer == "Rock") ? "You Lose!" : "You Win!";
        }


}

function Score(){
        if (resultText.textContent == "You Win!"){
                pScore++;
                playerScore.innerHTML = pScore;
                computerScore.innerHTML = cScore;
                console.log("hello"+ pScore);
        }
         else if (resultText.textContent == "You Lose!"){
                cScore++;
                computerScore.innerHTML = cScore;
                playerScore.innerHTML = pScore;
                console.log("hi"+ cScore);
         }
         else if(resultText.textContent =="Draw"){
                playerScore.innerHTML = pScore;
                computerScore.innerHTML = cScore;
         }
}


