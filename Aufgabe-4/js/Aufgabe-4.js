var Aufgabe4;
(function (Aufgabe4) {
    let getPlayerNumber;
    let getCardPair;
    let playerNumber;
    let cardPair;
    let numberCards;
    let createGame;
    let removeCard;
    let amount = 1;
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
    let specialButton = document.getElementById("special");
    let abcButton = document.getElementById("ABC");
    let numberButton = document.getElementById("123");
    specialButton.addEventListener("click", specialInput);
    abcButton.addEventListener("click", abcInput);
    numberButton.addEventListener("click", numberInput);
    function specialInput() {
        if (amount == 1) {
            let input = document.createElement("input");
            input.type = "number";
            input.min = "1";
            input.id = "specialinput";
            input.max = Aufgabe4.arrayCards["special"].length;
            document.getElementById("cards").appendChild(input);
            amount++;
        }
        else {
            removeinput();
            amount = 1;
        }
    }
    function removeinput() {
        let input = document.getElementsByTagName("input")[0];
        input.value = "0";
        document.getElementById("cards").removeChild(input);
    }
    function abcInput() {
        if (amount == 1) {
            let input = document.createElement("input");
            input.type = "number";
            input.min = "1";
            input.id = "ABCinput";
            input.max = Aufgabe4.arrayCards["ABC"].length;
            document.getElementById("cards").appendChild(input);
            amount++;
        }
        else {
            removeinput();
            amount = 1;
        }
    }
    function numberInput() {
        if (amount == 1) {
            let input = document.createElement("input");
            input.type = "number";
            input.min = "1";
            input.id = "numberinput";
            input.max = Aufgabe4.arrayCards["numbers"].length;
            document.getElementById("cards").appendChild(input);
            amount++;
        }
        else {
            removeinput();
            amount = 1;
        }
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
        console.log(inputvalue3);
        let specialinput = document.getElementById("specialinput");
        let abcinput = document.getElementById("ABCinput");
        let numberinput = document.getElementById("numberinput");
        if (specialinput.value == undefined && abcinput.value == undefined) {
            cardNamevalue1 = "0";
            cardNamevalue2 = "0";
            cardNamevalue3 = numberinput.value;
        }
        else if (numberinput.value == undefined && abcinput.value == undefined) {
            cardNamevalue1 = specialinput.value;
            cardNamevalue2 = "0";
            cardNamevalue3 = "0";
        }
        else if (numberinput.value == undefined && specialinput.value == undefined) {
            cardNamevalue1 = "0";
            cardNamevalue2 = abcinput.value;
            cardNamevalue3 = "0";
        }
        let specialCardPair = Number.parseInt(cardNamevalue1);
        let abcCardPair = Number.parseInt(cardNamevalue2);
        let numberCardPair = Number.parseInt(cardNamevalue3);
        if (abcCardPair == 0 && numberCardPair == 0) {
            cardPair = specialCardPair;
            createGame = Aufgabe4.arrayCards["special"].content;
        }
        else if (specialCardPair == 0 && numberCardPair == 0) {
            cardPair = abcCardPair;
            createGame = Aufgabe4.arrayCards["ABC"].content;
        }
        else if (specialCardPair == 0 && abcCardPair == 0) {
            cardPair = numberCardPair;
            createGame = Aufgabe4.arrayCards["numbers"].content;
        }
        numberCards = cardPair * 2;
        removeCard = createGame.length - cardPair;
        console.log(numberCards);
        createGame.splice(numberCards, removeCard);
        for (let i = 0; i < numberCards; i++) {
            createCard();
        }
        let hideFieldset1 = document.getElementsByTagName("fieldset")[0];
        let hideFieldset2 = document.getElementsByTagName("fieldset")[1];
        let showHeader = document.getElementsByTagName("header")[0];
        showHeader.setAttribute("class", "open2");
        hideFieldset1.setAttribute("class", "hidden3");
        hideFieldset2.setAttribute("class", "hidden3");
        specialinput.setAttribute("class", "hidden2");
        abcinput.setAttribute("class", "hidden2");
        startGame.setAttribute("class", "hidden3");
        player1input.setAttribute("class", "hidden2");
        player2input.setAttribute("class", "hidden2");
        player3input.setAttribute("class", "hidden2");
        player4input.setAttribute("class", "hidden2");
        numberinput.setAttribute("class", "hidden2");
    }
    let counter = 0;
    function player1Input() {
        player1input.setAttribute("class", "open2");
        player2input.setAttribute("class", "hidden2");
        player3input.setAttribute("class", "hidden2");
        player4input.setAttribute("class", "hidden2");
    }
    function player2Input() {
        player1input.setAttribute("class", "open2");
        player2input.setAttribute("class", "open2");
        player3input.setAttribute("class", "hidden2");
        player4input.setAttribute("class", "hidden2");
    }
    function player3Input() {
        player1input.setAttribute("class", "open2");
        player2input.setAttribute("class", "open2");
        player3input.setAttribute("class", "open2");
        player4input.setAttribute("class", "hidden2");
    }
    function player4Input() {
        player1input.setAttribute("class", "open2");
        player2input.setAttribute("class", "open2");
        player3input.setAttribute("class", "open2");
        player4input.setAttribute("class", "open2");
    }
    function createCard() {
        let random = createGame[Math.floor(Math.random() * createGame.length)];
        let position = createGame.indexOf(random);
        let div = document.createElement("div");
        div.setAttribute("class", "hidden");
        div.innerText = random;
        div.addEventListener("click", cardClicked);
        document.getElementById("game").appendChild(div);
        createGame.splice(position, 1);
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
//# sourceMappingURL=Aufgabe-4.js.map