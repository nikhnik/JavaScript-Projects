const hands = [
    {
        name : "Rock",
        id : 1
    },
    {
        name : "Paper",
        id : 2
    },
    {
        name : "Scissor",
        id : 3
    }
]
var userScore = 0;
var computerScore = 0;
$("#rock").click(function () { 
    let number = 1;
    checkResult(number);
});

$("#paper").click(function () { 
    let number = 2;
    checkResult(number);
});

$("#scissor").click(function () { 
    let number = 3;
    checkResult(number);
});

function checkResult(number)
{
    var randomNumer = Math.floor(Math.random()*3)+1;
    let userResponse = hands[number-1].name;
    let computerResponse = hands[randomNumer-1].name;
    alert(userResponse)
    alert(computerResponse)
    let userWin = 0;
    let computerWin = 0;
    let tie = 0;
    if((userResponse == "Rock" &&(computerResponse == "Scissor")) || (userResponse == "Paper" &&(computerResponse == "Rock")) || (userResponse == "Scissor" &&(computerResponse == "Paper"))){
        userWin = 1;
        userScore++;
    }
    else if((userResponse == "Scissor" &&(computerResponse == "Rock")) || (userResponse == "Rock" &&(computerResponse == "Paper")) || (userResponse == "Paper" &&(computerResponse == "Scissor"))){
        computerWin = 1;
        computerScore++;
    }
    else{
        tie = 1;
    }

    if(userWin == 1){
        $("#result").text("You win! "+userResponse+" beats "+computerResponse);
    }
    else if(computerWin == 1){
        $("#result").text("You loose! "+computerResponse+" beats "+userResponse);
    }
    else if(tie==1){
        $("#result").text("It's a tie!");
    }

    $("#userScore").text(userScore);
    $("#computerScore").text(computerScore);
}