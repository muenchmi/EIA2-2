var Aufgabe3;
(function (Aufgabe3) {
    window.addEventListener("load", init);
    let getPlayerNumber;
    let getCardPair;
    let playerNumber;
    let cardPair;
    let numberCards;
    let createCards = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F", "G", "G", "H", "H", "I", "I", "J", "J", "K", "K", "L", "L", "M", "M", "N", "N", "O", "O", "P", "P", "Q", "Q", "R", "R", "S", "S", "T", "T", "U", "U", "V", "V", "W", "W", "X", "X", "Y", "Y", "Z", "Z"];
    let removeCard;
    let counter = 0;
    function init(_event) {
        do {
            getPlayerNumber = prompt("Bitte geben Sie hier die Spieleranzahl an (1-4 Spieler)", "");
            playerNumber = Number.parseInt(getPlayerNumber);
        } while (playerNumber < 1 || playerNumber > 4 || isNaN(playerNumber));
        do {
            getCardPair = prompt("Bitte geben Sie hier die Kartenpaare an (5-10 Paare)", "");
            cardPair = Number.parseInt(getCardPair);
        } while (cardPair < 5 || cardPair > 10 || isNaN(cardPair));
        numberCards = cardPair * 2;
        removeCard = createCards.length - cardPair;
        console.log(numberCards);
        createCards.splice(numberCards, removeCard);
        for (let i = 0; i < numberCards; i++) {
            createCard();
        }
        for (let i = 0; i < playerNumber; i++) {
            let p = document.createElement("p");
            let n = i + 1;
            let text = "Spieler" + " " + n + ":";
            p.innerText = text;
            document.getElementById("players").appendChild(p);
        }
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
})(Aufgabe3 || (Aufgabe3 = {}));
//# sourceMappingURL=aufgabe4.js.map