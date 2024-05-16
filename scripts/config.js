function openPlayerConfig(event){
    editedPlayer = +event.target.dataset.playerid;
    playerConfigOverlayBtnElement.style.display = "block";
    backdropBtnElement.style.display = "block";
}

function closePlayerConfig(){
    playerConfigOverlayBtnElement.style.display = "none";
    backdropBtnElement.style.display = "none";
    formElement.firstElementChild.classList.remove("error");
    outputErrorElement.textContent = "";
    formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get("playername").trim();

    if(!enteredPlayerName){
        event.target.firstElementChild.classList.add("error");
        outputErrorElement.textContent = "Please input a valid name!";
        return;
    }

    const updatedPlayerElement = document.getElementById("player-" + editedPlayer + "-data");
    updatedPlayerElement.children[1].textContent = enteredPlayerName;  

    players[editedPlayer - 1].name = enteredPlayerName;

    closePlayerConfig();

} 