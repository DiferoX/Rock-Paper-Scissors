let computerRPS = ["Rock", "Paper", "Scissors"];
let computerSelection = "";
let playerSelection = "";
let win = 0;

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
  if (playRound(playerSelection, computerSelection) === "You Win!, Rock beats Scissors" || playRound(playerSelection, computerSelection) === "You Win!, Paper beats Rock" || playRound(playerSelection, computerSelection) === "You Win!, Scissors beats Paper")
  {
    return "1";
  }
  else
  {
    return "0";
  }
}


for (let i=1; i<=5; i++)
{
  //Loop while player type the correct answer
  do
  {
    playerSelection = prompt("Rock - Paper - Scissors").toLowerCase();  

  } while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors");

  computerSelection = computerRPS[computerPlay()];

  console.log ("Round " + i);
  console.log ("Player 1 " + playerSelection);
  console.log ("Player 2 " + computerSelection);

  console.log (playRound(playerSelection, computerSelection));

  win += parseInt (game(playerSelection, computerSelection));

  console.log ("You win " + win + " round");
}

if (win < 3)
{
  alert("You Lose!");
}
else
{
  alert ("You Win!");
}