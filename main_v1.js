const moveType = {
    ROCK: 0,
    PAPER: 1,
    SCISSORS: 2
}
let computerPlay = () => Math.floor(Math.random() * 3);

function getPlayerSelection() {
    let pick = prompt("Rock, Papper or Scissors").toLowerCase();   
    
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
 
function round(){
    let computerPick = computerPlay();
    let playerPick = -1;
do{
    playerPick = getPlayerSelection();
}
    while(playerPick > 2 || playerPick < 0);
      
let picks = picksToString(playerPick, computerPick);
      
if((computerPick+1) % 3 == playerPick){
    console.log(`You Win! ${picks[0]} beats ${picks[1]}`);
    return 1;

}else if(computerPick == playerPick) {
    console.log(`Draw! Both picked ${picks[1]}`);
    return 0;

}else {
    console.log(`You Lose! ${picks[1]} beats ${picks[0]}`);
    return -1;
    }
}
  
 function picksToString(playerPick, computerPick){
    let picks = [playerPick, computerPick];

    for(let i = 0; i < 2; i++){
        if(picks[i] == 0){
            picks[i] = "Rock";
        }else if(picks[i] == 1){
            picks[i] = "Paper";
        }else{
            picks[i] = "Scissors";
        }
    }
    return picks;
}
  
function game(){
    alert("Rock, Paper, Scissors: Best Of Five(5)");
    let wins = 0;
    let losses = 0;
    let draws = 0;
    
    for(let i = 0; i < 5; i++){
        let outcome = round();
        if(outcome == 1){
            wins++;
        }else if(outcome == -1){
            losses++;
        }else {
            draws++;
            i--;
        }
        console.log(`Wins: ${wins} \n Losses: ${losses} \n Draw: ${draws}`);
    }
    if(wins > losses){
        console.log("You Win This Game!");
    }else{
        console.log("You Lose This Game!");
    }
}
game()