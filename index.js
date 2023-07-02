
function roller(){
var dice = ["./images/dice1.png",
"./images/dice1.png",
"./images/dice2.png",
"./images/dice3.png",
"./images/dice4.png",
"./images/dice4.png",
"./images/dice5.png",
"./images/dice6.png"]; 

var diceroll = Math.floor(Math.random()*6)+1;
var diceroll2 = Math.floor(Math.random()*6)+1;
img = document.getElementById("first")
img.src = dice[diceroll];
img = document.getElementById("second")
img.src = dice[diceroll2];
if (diceroll > diceroll2){
    document.querySelector(".player1").src = "./images/flag.png";
    document.querySelector(".player2").src = "";
    document.querySelector(".win").innerHTML = document.querySelector(".playern1").innerText+ " win" ;
}
else if(diceroll == diceroll2){
    document.querySelector(".win").innerHTML = "Draw";
}  
else{
    document.querySelector(".player2").src = "./images/flag.png";
    document.querySelector(".player1").src = "";
    document.querySelector(".win").innerHTML = document.querySelector(".playern2").innerText+ " win" ;
}


}

function openDiv(){
    let get = document.querySelector('#div')
    get.style.display = 'block'
   }
function closeDiv(){
    let get = document.querySelector('#div')
    get.style.display = 'none'
   }   




   function setPlayerName () {
    var playerNameDiv = document.querySelector(".playern1");
    
    playerNameDiv.innerHTML = document.getElementById('playerNameInput').value;
    
    // hide input field and button
    document.getElementById('divSetPlayerName').style.display = 'none';
  }
  function setPlayerName2 () {
    var playerNameDiv = document.querySelector(".playern2");
    
    playerNameDiv.innerHTML = document.getElementById('playerNameInput2').value;
    
    // hide input field and button
    document.getElementById('divSetPlayerName2').style.display = 'none';
  }
