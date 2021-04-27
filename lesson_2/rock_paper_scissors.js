const readline = require('readline-sync');

const MAX_WINS = 5;
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

const USER_VALID_CHOICES = {
  r : 'rock',
  p : 'paper',
  s : 'scissors',
};

const WINNING_COMBOS = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper',
};

let roundScores = {
  user: 0,
  computer: 0,
  round: 0,
};

function prompt(message) {
  console.log(`${message}`);
}

function roundWinner(userChoice, computerChoice) {
  return WINNING_COMBOS[userChoice].includes(computerChoice);
}

function displayRoundWinner(userChoice, computerChoice) {
  prompt( `\n=> You chose ${userChoice}, computer chose ${computerChoice}`);

  if (roundWinner(userChoice, computerChoice)) {
    prompt('-------------- You win! --------------');
  } else if (userChoice === computerChoice) {
    prompt("------------ It's a tie! -------------");
  } else {
    prompt("---------- Computer wins! ------------");
  }

}

function countRoundScores(userChoice, computerChoice) {
  if (roundWinner(userChoice, computerChoice)) {
    roundScores.user += 1;
  } else if (roundWinner(computerChoice, userChoice)) {
    roundScores.computer += 1;
  }
  roundScores.round += 1;
}

function displayRoundScores() {
  prompt(`Round: ${roundScores.round} => Player: ${roundScores.user}, Computer: ${roundScores.computer}`);
  prompt('--------------------------------------');
}

function grandWinner() {
  return roundScores.user === MAX_WINS ||
     roundScores.computer === MAX_WINS;
}

function displayGrandWinner() {
  while (grandWinner()) {
    if (roundScores.user > roundScores.computer) {
      prompt("\n******* YOU WIN! ********");
      break;
    } else {
      prompt("\n******* YOU LOST!! ********");
      break;
    }
  }
}

function clearScores() {
  roundScores.user = 0;
  roundScores.computer = 0;
  roundScores.round = 0;
}

prompt("\n---- Welcome! Let's play Rock, Paper, and Scissors Game! -----");
prompt("--- Win 5 rounds before the computer does to win the match ---");

while (true) {
  //user input
  prompt('\n=> Choose the letter: "r" for rock, "p" for paper, or "s" for scissors');
  let choice = readline.question().toLowerCase();
  let userChoice = USER_VALID_CHOICES[choice];

  //user input validation
  while (choice !== 'r' && choice !== 'p' && choice !== 's') {
    prompt('=> Please enter "r" (for rock), "p" (for paper), or "s" (for scissors)');
    choice = readline.question().toLowerCase();
    userChoice = USER_VALID_CHOICES[choice];
  }

  //computer choice
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];


  displayRoundWinner(userChoice, computerChoice);
  countRoundScores(userChoice, computerChoice);
  displayRoundScores();

  grandWinner();
  displayGrandWinner();

  if (grandWinner()) {
    // ask for another match
    prompt('\n=> Do you want to play another match? (y/n)');
    let answer = readline.question().toLowerCase();

    //answer validation
    while (answer[0] !== 'n' && answer[0] !== 'y') {
      prompt('Please enter "y" or "n".');
      answer = readline.question().toLocaleLowerCase();
    }
    if (answer[0] !== 'y') break;

    clearScores();
    console.clear();
  }

}
