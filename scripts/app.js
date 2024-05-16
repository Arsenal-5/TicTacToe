let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

const players = [
    {name: "",
     symbol: "X"
},

{
    name: "",
    symbol: "O"
}
]

const playerConfigOverlayBtnElement = document.getElementById("config-overlay");
const backdropBtnElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");

const outputErrorElement = document.getElementById("error-config")
const areaGameElement = document.getElementById("active-game")
const outputErrorElement2 = document.getElementById("output-error")

const player1BtnElement = document.getElementById("edit-player-1-btn");
const player2BtnElement = document.getElementById("edit-player-2-btn");
const startNewGameButtonElement = document.getElementById("start-game-btn");

const cancelConfigButtonElement = document.getElementById("cancel-config-btn");
const gameFieldElements = document.querySelectorAll("#game-board li");
const activePlayerElement = document.getElementById("active-player-name");
const gameOverElement  = document.getElementById("game-over");
const gameBoardElement = document.getElementById("game-board");

player1BtnElement.addEventListener("click", openPlayerConfig);
player2BtnElement.addEventListener("click", openPlayerConfig);

cancelConfigButtonElement.addEventListener("click", closePlayerConfig);
backdropBtnElement.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig)

startNewGameButtonElement.addEventListener("click", startNewGame);

for (const gameFieldElement of gameFieldElements){

    gameFieldElement.addEventListener("click", selectGameField);
}

