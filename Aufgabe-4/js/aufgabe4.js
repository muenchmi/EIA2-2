var Aufgabe4;
(function (Aufgabe4) {
    window.addEventListener("load", init);
    function init(_event) { }
    let getPlayerNumber;
    let getCardPair;
    let playerNumber;
    let cardPair;
    let numberCards;
    let createCards;
    let removeCard;
    let cardNamevalue1;
    let cardNamevalue2;
    let cardNamevalue3;
    let player1Button = document.getElementById("Spieler1");
    let player2Button = document.getElementById("Spieler2");
    let player3Button = document.getElementById("Spieler3");
    let player4Button = document.getElementById("Spieler4");
    let player1input = document.getElementById("spielerinput1");
    let player2input = document.getElementById("spielerinput2");
    let player3input = document.getElementById("spielerinput3");
    let player4input = document.getElementById("spielerinput4");
    player1Button.addEventListener("click", player1Input);
    player2Button.addEventListener("click", player2Input);
    player3Button.addEventListener("click", player3Input);
    player4Button.addEventListener("click", player4Input);
    let animaleButton = document.getElementById("Tiere");
    let abcButton = document.getElementById("ABC");
    let numberButton = document.getElementById("123");
    let animalinput = document.getElementById("animalinput");
    let abcinput = document.getElementById("ABCinput");
    let numberinput = document.getElementById("numberinput");
    animaleButton.addEventListener("click", animalInput);
    abcButton.addEventListener("click", abcInput);
    numberButton.addEventListener("click", numberInput);
    function animalInput() {
        animalinput.setAttribute("class", "open2");
    }
    function abcInput() {
        abcinput.setAttribute("class", "open2");
    }
    function numberInput() {
        numberinput.setAttribute("class", "open2");
    }
    let startGame = document.getElementById("startgame");
    startGame.addEventListener("click", gameStart);
    function gameStart() {
        let inputvalue1 = player1input.value;
        let inputvalue2 = player2input.value;
        let inputvalue3 = player3input.value;
        let inputvalue4 = player4input.value;
        let player1 = document.getElementById("player1");
        let player2 = document.getElementById("player2");
        let player3 = document.getElementById("player3");
        let player4 = document.getElementById("player4");
        player1.innerText = inputvalue1;
        player2.innerText = inputvalue2;
        player3.innerText = inputvalue3;
        player4.innerText = inputvalue4;
        cardNamevalue1 = animalinput.value;
        cardNamevalue2 = abcinput.value;
        cardNamevalue3 = numberinput.value;
        let animalCardPair = Number.parseInt(cardNamevalue1);
        let abcCardPair = Number.parseInt(cardNamevalue2);
        let numberCardPair = Number.parseInt(cardNamevalue3);
        if (abcCardPair == 0 && numberCardPair == 0) {
            cardPair = animalCardPair;
            createCards = Aufgabe4.Tiere.name;
        }
        else if (animalCardPair == 0 && numberCardPair == 0) {
            cardPair = abcCardPair;
            createCards = Aufgabe4.ABC.name;
        }
        else if (animalCardPair == 0 && abcCardPair == 0) {
            cardPair = numberCardPair;
            createCards = Aufgabe4.Zahlen.name;
        }
        numberCards = cardPair * 2;
        removeCard = createCards.length - cardPair;
        console.log(numberCards);
        createCards.splice(numberCards, removeCard);
        for (let i = 0; i < numberCards; i++) {
            createCard();
        }
        let hideFieldset1 = document.getElementsByTagName("fieldset")[0];
        let hideFieldset2 = document.getElementsByTagName("fieldset")[1];
        hideFieldset1.setAttribute("class", "hidden2");
        hideFieldset2.setAttribute("class", "hidden2");
        animalinput.setAttribute("class", "hidden2");
        abcinput.setAttribute("class", "hidden2");
        startGame.setAttribute("class", "hidden2");
        player1input.setAttribute("class", "hidden2");
        player2input.setAttribute("class", "hidden2");
        player3input.setAttribute("class", "hidden2");
        numberinput.setAttribute("class", "hidden2");
    }
    let counter = 0;
    function player1Input(_e) {
        player1input.setAttribute("class", "open2");
        let playerName = document.getElementsByTagName("input")[4];
        let playerNamevalue1 = playerName.value;
        return playerNamevalue1;
    }
    function player2Input(_event) {
        player2input.setAttribute("class", "open2");
        let playerName = document.getElementsByTagName("input")[5];
        let playerNamevalue2 = playerName.value;
        return playerNamevalue2;
    }
    function player3Input(_event) {
        player3input.setAttribute("class", "open2");
        let playerName = document.getElementsByTagName("input")[6];
        let playerNamevalue3 = playerName.value;
        return playerNamevalue3;
    }
    function player4Input(_event) {
        player4input.setAttribute("class", "open2");
        let playerName = document.getElementsByTagName("input")[7];
        let playerNamevalue4 = playerName.value;
        return playerNamevalue4;
    }
    function createCard() {
        let random = createCards[Math.floor(Math.random() * createCards.length)];
        let position = createCards.indexOf(random);
        let div = document.createElement("div");
        div.setAttribute("class", "hidden");
        div.innerText = random;
        div.addEventListener("click", cardClicked);
        document.getElementById("game").appendChild(div);
        createCards.splice(position, 1);
    }
    function cardClicked(event) {
        let clicked = event.target;
        if (counter < 2) {
            counter++;
            if (counter == 1) {
                clicked.setAttribute("class", "open");
            }
            else {
                if (clicked.classList.contains("open") || clicked.classList.contains("taken")) {
                    counter = 1;
                }
                else {
                    clicked.setAttribute("class", "open");
                    setTimeout(compareCards, 2000);
                }
            }
        }
    }
    function compareCards() {
        let firstGuess = document.getElementsByClassName("open")[0];
        let secondGuess = document.getElementsByClassName("open")[1];
        console.log(firstGuess);
        console.log(secondGuess);
        if (firstGuess.innerHTML == secondGuess.innerHTML) {
            firstGuess.setAttribute("class", "taken");
            secondGuess.setAttribute("class", "taken");
            counter = 0;
        }
        else {
            firstGuess.setAttribute("class", "hidden");
            secondGuess.setAttribute("class", "hidden");
            counter = 0;
        }
        fin();
    }
    function fin() {
        let hiddencards = document.getElementsByClassName("hidden");
        if (hiddencards.length == 0) {
            alert("Gut gemacht! Du hast das Spiel beendet.");
        }
    }
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=aufgabe4.js.map