let computerRPS = ["Rock", "Paper", "Scissors"];
let computerSelection = "";
let playerSelection = "";
let win = 0;
let lose = 0;

function computerPlay()
{
  return Math.floor(Math.random() * computerRPS.length);
}

function playRound(playerSelection, computerSelection)
{
  switch (playerSelection)
  {
    case "rock":
      switch (computerSelection)
      {
        case "Rock":
          return "There is no winner";
          break;
        case "Paper":
          return "You Lose!, Paper beats Rock";
          break;
        case "Scissors":
          return "You Win!, Rock beats Scissors";
          break;
      }
      break;

    case "paper":
      switch (computerSelection)
      {
        case "Paper":
          return "There is no winner";
          break;
        case "Rock":
          return "You Win!, Paper beats Rock";
          break;
        case "Scissors":
          return "You Lose!, Scissors beats Paper";
          break;
      }
      break;

    case "scissors":
      switch (computerSelection)
      {
        case "Scissors":
          return "There is no winner";
          break;
        case "Rock":
          return "You Lose!, Rock beats Scissors";
          break;
        case "Paper":
          return "You Win!, Scissors beats Paper";
          break;
      }
      break;
  }
}

function game (playerSelection, computerSelection)
{
  if (playRound(playerSelection, computerSelection) === "There is no winner")
  {
    return;
  }
  else if (playRound(playerSelection, computerSelection) === "You Win!, Rock beats Scissors" || playRound(playerSelection, computerSelection) === "You Win!, Paper beats Rock" || playRound(playerSelection, computerSelection) === "You Win!, Scissors beats Paper")
  {
    win += 1;
    if (win === 5)
    {
      let imgW = document.getElementsByClassName('imgWin');
      imgW[0].src = 'images/Win.png';
    }
    return win;
  }
  else
  {
    lose += 1;
    if (lose === 5)
    {
      let imgL = document.getElementsByClassName('imgLose');
      imgL[0].src = 'images/Lose.png';
    }
    return lose;
  }
}

function text()
{
  let answComp = document.getElementsByClassName('answComp');
  switch (computerSelection)
  {
    case 'Rock':
      answComp[0].src = 'images/Rock.png';
      break;
    case 'Paper':
      answComp[0].src = 'images/Paper.png';
      break;
    case 'Scissors':
      answComp[0].src = 'images/Scissors.png';
      break;
  }

  let infoHead = document.getElementsByClassName('infoHead');
  let info = playRound(playerSelection, computerSelection);
  infoHead[0].textContent = info;

  game(playerSelection, computerSelection)

  let scorePlayer = document.getElementsByClassName('scorePlayer');
  scorePlayer[0].textContent = win;
  let scoreComp = document.getElementsByClassName('scoreComp');
  scoreComp[0].textContent = lose;
  
}


let btnR = document.getElementsByClassName('buttonRock');

btnR[0].addEventListener('click', function() 
{
  playerSelection = "rock";
  computerSelection = computerRPS[computerPlay()];

  let answPlayer = document.getElementsByClassName('answPlayer');
  answPlayer[0].src = 'images/Rock.png';

  text();

});

let btnP = document.getElementsByClassName('buttonPaper');

btnP[0].addEventListener('click', function() 
{
  playerSelection = "paper";
  computerSelection = computerRPS[computerPlay()];

  let answPlayer = document.getElementsByClassName('answPlayer');
  answPlayer[0].src = 'images/Paper.png';

  text();

});

let btnS = document.getElementsByClassName('buttonScissors');

btnS[0].addEventListener('click', function() 
{
  playerSelection = "scissors";
  computerSelection = computerRPS[computerPlay()];

  let answPlayer = document.getElementsByClassName('answPlayer');
  answPlayer[0].src = 'images/Scissors.png';

  text();

});
