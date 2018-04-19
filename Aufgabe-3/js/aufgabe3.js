var Aufgabe2;
(function (Aufgabe2) {
    window.addEventListener("load", init);
    function init(_event) {
        let getPlayerNumber;
        let getCardPair;
        let playerNumber;
        let cardPair;
        let numberCards;
        let creatCards = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F", "G", "G", "H", "H", "I", "I", "J", "J", "K", "K", "L", "L", "M", "M", "N", "N", "O", "O", "P", "P", "Q", "Q", "R", "R", "S", "S", "T", "T", "U", "U", "V", "V", "W", "W", "X", "X", "Y", "Y", "Z", "Z"];
        let removeCard; // bestimme die Zahl die beim splice entfernt werden soll
        getPlayerNumber = prompt("Bitte geben Sie hier die Spieleranzahl an (1-4 Spieler)", "");
        getCardPair = prompt("Bitte geben Sie hier die Kartenpaare an (5-10 Paare)", "");
        playerNumber = Number.parseInt(getPlayerNumber);
        cardPair = Number.parseInt(getCardPair);
        numberCards = cardPair * 2;
        removeCard = creatCards.length - cardPair;
        console.log(numberCards);
        creatCards.splice(numberCards, removeCard); //nimm die unn�tigen Buchstaben aus dem array
        //Anzahl der Karten im Game Div
        for (let i = 0; i < numberCards; i++) {
            placeDiv();
        }
        //Anzahl der Spieler im Players  
        for (let i = 0; i < playerNumber; i++) {
            let p = document.createElement("p");
            let n = i + 1;
            let text = "Spieler" + " " + n + ":";
            p.innerText = text;
            document.getElementById("players").appendChild(p);
        }
        function placeDiv() {
            let random = creatCards[Math.floor(Math.random() * creatCards.length)]; //greife eine random Buchstabe aus dem array
            let position = creatCards.indexOf(random); //finde die Position des Buchstabens herraus
            let randomNumber = Math.random();
            let div = document.createElement("div");
            div.innerText = random;
            div.addEventListener("click", function () {
                let counter = 0;
                let clicked = event.target;
                let firstGuess = 0;
                let secondGuess = 0;
                if (div.classList.contains("selected") || div.classList.contains("match")) {
                    return;
                }
                if (counter < 2) {
                    counter++;
                    if (counter == 1) {
                        div.classList.add("selected");
                    }
                    else {
                        div.classList.add("selected");
                    }
                    if (firstGuess && secondGuess) {
                    }
                }
            });
            if (randomNumber < 0.6) {
                div.setAttribute("class", "hidden");
            }
            if (randomNumber > 0.6 && randomNumber < 0.8) {
                div.setAttribute("class", "open");
                div.innerText = random;
            }
            else if (randomNumber > 0.8) {
                div.setAttribute("class", "taken");
            }
            document.getElementById("game").appendChild(div);
            creatCards.splice(position, 1);
        }
    }
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=aufgabe3.js.map