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
    return win;
  }
  else
  {
    lose += 1;
    return lose;
  }
}

function text()
{
  let answComp = document.getElementsByClassName('answComp');
  answComp[0].textContent = computerSelection;

  let infoHead = document.getElementsByClassName('infoHead');
  let info = playRound(playerSelection, computerSelection);
  infoHead[0].textContent = info;

  //win += parseInt (game(playerSelection, computerSelection));
  game(playerSelection, computerSelection)

  let scorePlayer = document.getElementsByClassName('scorePlayer');
  scorePlayer[0].textContent = win;
  let scoreComp = document.getElementsByClassName('scoreComp');
  scoreComp[0].textContent = lose;
  
}

/*
for (let i=1; i<=5; i++)
{
  //Loop while player type the correct answer
  do
  {
    playerSelection = prompt("Rock - Paper - Scissors").toLowerCase();  

  } while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors");
  */

  //let content = document.getElementsByClassName('buttonRPS');



    let btnR = document.getElementsByClassName('buttonRock');

    btnR[0].addEventListener('click', function() 
    {
      playerSelection = "rock";
      computerSelection = computerRPS[computerPlay()];

      let answPlayer = document.getElementsByClassName('answPlayer');
      answPlayer[0].textContent = "Rock";

      text();

    });

    let btnP = document.getElementsByClassName('buttonPaper');

    btnP[0].addEventListener('click', function() 
    {
      playerSelection = "paper";
      computerSelection = computerRPS[computerPlay()];

      let answPlayer = document.getElementsByClassName('answPlayer');
      answPlayer[0].textContent = "Paper";

      text();

    });

    let btnS = document.getElementsByClassName('buttonScissors');

    btnS[0].addEventListener('click', function() 
    {
      playerSelection = "scissors";
      computerSelection = computerRPS[computerPlay()];

      let answPlayer = document.getElementsByClassName('answPlayer');
      answPlayer[0].textContent = "Scissors";

      text();

    });


/*
  computerSelection = computerRPS[computerPlay()];

  //console.log ("Round " + i);
  console.log ("Player 1 " + playerSelection);
  console.log ("Player 2 " + computerSelection);

  console.log (playRound(playerSelection, computerSelection));

  win += parseInt (game(playerSelection, computerSelection));

  console.log ("You win " + win + " round");
//}
/*
if (win < 3)
{
  alert("You Lose!");
}
else
{
  alert ("You Win!");
}*/