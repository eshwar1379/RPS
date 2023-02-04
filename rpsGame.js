let getComputerChoice = function() {
    let str = ["rock","paper","scissors"];
    let x = Math.floor(Math.random()*3);
    return str[x];
}
let getPlayerChoice = function() {
    return prompt("Enter your choice( It should be either \"rock\",\"paper\",\"scissor\"): ").toLowerCase();
}
let winner = function(playerChoice,computerChoice){
    if(playerChoice===computerChoice){
        return 0;
    }
    else if(playerChoice==="paper"){
        if(computerChoice==="rock")
            return 1;
        else
            return 2;
    }
    else if(playerChoice==="rock"){
        if(computerChoice==="scissors")
            return 1;
        else
            return 2;
    }
    else if(playerChoice==="scissors"){
        if(computerChoice==="paper")
            return 1;
        else
            return 2;
    }
}
let game = function(){
    let player=0,comp=0;    
    for(let i=0;i<5;i++){
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        let x = winner(playerChoice,computerChoice);
        if(x===0){
            console.log("It's a draw");
        }
        else if(x===1){
            player++;
            console.log("You won this round!!!");
        }
        else{
            comp++;
            console.log("You lost this round");
        }
    }
    if(player===comp)
        console.log("No one win this match");
    else if(player>comp)
        console.log("Hurray! You won the match");
    else    
        console.log("Better luck next time, you lost the match");
}