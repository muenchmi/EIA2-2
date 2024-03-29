namespace Aufgabe3 {

    window.addEventListener("load", init);

    let getPlayerNumber: string;
    let getCardPair: string;
    let playerNumber: number;
    let cardPair: number;
    let numberCards: number;
    let createCards: string[] = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F", "G", "G", "H", "H", "I", "I", "J", "J", "K", "K", "L", "L", "M", "M", "N", "N", "O", "O", "P", "P", "Q", "Q", "R", "R", "S", "S", "T", "T", "U", "U", "V", "V", "W", "W", "X", "X", "Y", "Y", "Z", "Z"];
    let removeCard: number;

    let counter: number = 0;

    function init(_event: Event): void {

        do {
            getPlayerNumber = prompt("Bitte geben Sie hier die Spieleranzahl an (1-4 Spieler)", "");
            playerNumber = Number.parseInt(getPlayerNumber);
        }
        while (playerNumber < 1 || playerNumber > 4 || isNaN(playerNumber));

        do {
            getCardPair = prompt("Bitte geben Sie hier die Kartenpaare an (5-10 Paare)", "");
            cardPair = Number.parseInt(getCardPair);
        }

        while (cardPair < 5 || cardPair > 10 || isNaN(cardPair));

        numberCards = cardPair * 2;
        removeCard = createCards.length - cardPair;
        console.log(numberCards);
        createCards.splice(numberCards, removeCard);

        for (let i: number = 0; i < numberCards; i++) {
            createCard();
        }

        for (let i: number = 0; i < playerNumber; i++) {
            let p: HTMLParagraphElement = document.createElement("p");
            let n: number = i + 1;
            let text: string = "Spieler" + " " + n + ":";
            p.innerText = text;
            document.getElementById("players").appendChild(p);

        }
    }

    function createCard(): void {
        let random: string = createCards[Math.floor(Math.random() * createCards.length)];
        let position: number = createCards.indexOf(random);

        let div: HTMLDivElement = document.createElement("div");

        div.setAttribute("class", "hidden");
        div.innerText = random;
        div.addEventListener("click", cardClicked);
        document.getElementById("game").appendChild(div);
        createCards.splice(position, 1);
    }

    function cardClicked(event: Event): void {
        let clicked: HTMLElement = <HTMLElement>event.target;

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

    function compareCards(): void {
        let firstGuess: any = document.getElementsByClassName("open")[0];
        let secondGuess: any = document.getElementsByClassName("open")[1];

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

    function fin(): void {
        let hiddencards: any = document.getElementsByClassName("hidden");
        if (hiddencards.length == 0) {
            alert("Gut gemacht! Du hast das Spiel beendet.");
        }
    }

}
















