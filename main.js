/// Global Variables
let localPlayerScore = 0;
let remotePlayerScore = 0;
let localScoreObject = document.querySelector('#local-player-score');
let remoteScoreObject = document.querySelector('#remote-player-score');

const moveType = {
  ROCK: 0,
  PAPER: 1,
  SCISSORS: 2,
};

//Maps all move buttons to playerMove();
Array.from(document.querySelectorAll('.move-btn')).forEach(e => e.addEventListener('click', function(e){
  playerMove(this.id);
  })
)

/// Functions
function updateScoreObjects(){
  localScoreObject.textContent = localPlayerScore;
  remoteScoreObject.textContent = remotePlayerScore;
}
function remotePlay() {
  return Math.floor(Math.random() * 3);
}

function playerMove(moveID){
  round(moveID);
}

function winAnimation(){
  console.log(`Win animation`);
}

function loseAnimation(){
  console.log( `Lose Animation`);
}

function playAgain(){
  console.log( `resetting`)
  localPlayerScore = 0;
  remotePlayerScore = 0;
  updateScoreObjects();
  // load button to reset game board
}

function convertMove(pick) {

  switch (pick) {
    case "rock":
      return moveType.ROCK;
      break;

    case "paper":
      return moveType.PAPER;
      break;

    case "scissors":
      return moveType.SCISSORS;
      break;

    default:
      alert("invalid selection");
      return -1;
  }
}

function round(playerSelection) {
  let remotePick = remotePlay();
  let playerPick = convertMove(playerSelection)
  
  let picks = picksToString(playerPick, remotePick);

  if ((remotePick + 1) % 3 == playerPick) {
    console.log(`You Win! ${picks[0]} beats ${picks[1]}`);
    localPlayerScore += 1;
  } else if (remotePick == playerPick) {
    console.log(`Draw! Both picked ${picks[1]}`);
  } else {
    console.log(`You Lose! ${picks[1]} beats ${picks[0]}`);
    remotePlayerScore += 1;
  }
  console.log(`Local ${localPlayerScore} : Remote ${remotePlayerScore}`)
  updateScoreObjects();

  if(localPlayerScore === 5){
    console.log(`You win`);
    winAnimation()
    playAgain();
  }
  if(remotePlayerScore === 5){
    console.log(`You lose`);
    loseAnimation();
    playAgain();
  }
}

function picksToString(playerPick, remotePick) {
  let picks = [playerPick, remotePick];

  for (let i = 0; i < 2; i++) {
    if (picks[i] == 0) {
      picks[i] = "Rock";
    } else if (picks[i] == 1) {
      picks[i] = "Paper";
    } else {
      picks[i] = "Scissors";
    }
  }
  return picks;
}

