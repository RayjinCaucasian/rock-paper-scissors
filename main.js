/// Global Variables
let localPlayerScore = 0;
let remotePlayerScore = 0;
let localScoreObject = document.querySelector('#local-player-score');
let remoteScoreObject = document.querySelector('#remote-player-score');
let roundNotificationObject = document.querySelector('#round-notification');

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

    case "paper":
      return moveType.PAPER;

    case "scissors":
      return moveType.SCISSORS;

    default:
      alert("invalid selection");
      return -1;
  }
}
function roundNotification(message) {
  roundNotificationObject.textContent = message;
}
//
function round(playerSelection) {
  let remotePick = remotePlay();
  let playerPick = convertMove(playerSelection)
  
  let picks = picksToString(playerPick, remotePick);

  if ((remotePick + 1) % 3 == playerPick) {
    roundNotification(`You Win! ${picks[0]} beats ${picks[1]}`);
    localPlayerScore += 1;
  } else if (remotePick == playerPick) {
    roundNotification(`Draw! Both picked ${picks[0]}`);
  } else {
    roundNotification(`You Lose! ${picks[1]} beats ${picks[0]}`);
    remotePlayerScore += 1;
  }
  updateScoreObjects();

  if(localPlayerScore === 5){
    roundNotification(`Congratulations, you won this game!`);
    winAnimation()
    playAgain();
  }
  if(remotePlayerScore === 5){
    roundNotification(`Too bad, you lost this game`);
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

