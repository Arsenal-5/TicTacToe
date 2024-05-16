function startNewGame(){
    if(players[0].name == "" || players[1].name == ""){
        outputErrorElement2.innerText = "Please set custom name for both players";
        outputErrorElement2.style.display = "block";
        return;
    }
    areaGameElement.style.display = "block";
    outputErrorElement2.style.display = "none";

    resetGameStatus();

    activePlayerElement.textContent = players[activePlayer].name;
}

function resetGameStatus(){
  activePlayer = 0;
  currentRound = 1;
  gameIsOver = false;

  gameOverElement.firstElementChild.innerHTML = "You won, <span id=\"winner-name\">Player Name</span>!"
  gameOverElement.style.display = "none";

  let listIndex = 0;
  for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
      gameData[i][j] = 0;
      const gameBoardItemElement = gameBoardElement.children[listIndex];
      gameBoardItemElement.textContent = "";
      gameBoardItemElement.classList.remove("disabled")
      listIndex++;
      
    }
  }

}

function switchPlayer(){
    if (activePlayer === 0){
        activePlayer = 1;
    }
    else {
        activePlayer = 0;
    }
    activePlayerElement.textContent = players[activePlayer].name;
}

function checkGameOver(){
    for (let i = 0; i < 3; i++){
        // Row check
        if (
            gameData[i][0] > 0 &&
            gameData[i][0] === gameData[i][1] &&
            gameData[i][1] === gameData[i][2]
          ) {
            return gameData[i][0];
          }
          // Column Check
          if (
            gameData[0][i] > 0 &&
            gameData[0][i] === gameData[1][i] &&
            gameData[1][i] === gameData[2][i]
          ) {
            return gameData[0][i];
          }


          // Diagonal check top left to bottom right
          if (
            gameData[0][0] > 0 &&
            gameData[0][0] === gameData[1][1] &&
            gameData[1][1] === gameData[2][2]
          ) {
            return gameData[0][0];
          }

          // Diagonal check bottom left to top right
          if (
            gameData[2][0] > 0 &&
            gameData[2][0] === gameData[1][1] &&
            gameData[1][1] === gameData[0][2]
          ) {
            return gameData[2][0];
          }
          if(currentRound === 9){
            return -1;
          }
      
    }
    return 0; //neither win nor draw
    
}

function selectGameField(event){
  if(gameIsOver){
    return
  }
    const selectedField = event.target;

    const selectedColumn = selectedField.dataset.col - 1; // non need to add +, it understand
    const selectedRow = selectedField.dataset.row - 1;

    if(gameData[selectedRow][selectedColumn] > 0){
        alert("Value already selected, please try another field");
        return;
    }

    selectedField.textContent = players[activePlayer].symbol;
    event.target.classList.add("disabled");

    gameData[selectedRow][selectedColumn] = activePlayer + 1;
    
    const winnerId = checkGameOver();

    if(!winnerId == 0){
      endGame(winnerId);
    }

    currentRound ++;
    // console.log(winnerId);

    switchPlayer();
}

function endGame(winnerId){

  if(winnerId > 0){
    const winnerName = players[winnerId -1].name
    gameOverElement.firstElementChild.firstElementChild.textContent = winnerName;
  }else {
    gameOverElement.firstElementChild.textContent = 'It\'s a draw';
  }
  gameIsOver = true;

  gameOverElement.style.display = "block";
}