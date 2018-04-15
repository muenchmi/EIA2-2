namespace Aufgabe2 {

    window.addEventListener("load", init);

    function init(_event: Event): void {


        let getPlayerNumber: string;
        let getCardPair: string;
        let playerNumber: number;
        let cardPair: number;
        let numberCards: number; 
        let creatCards: string[] = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F", "G", "G", "H", "H", "I", "I", "J", "J", "K", "K", "L", "L", "M", "M", "N", "N", "O", "O", "P", "P", "Q", "Q", "R", "R", "S", "S", "T", "T", "U", "U", "V", "V", "W", "W", "X", "X", "Y", "Y", "Z", "Z"];
        let removeCard: number; // bestimme die Zahl die beim splice entfernt werden soll


        getPlayerNumber = prompt("Bitte geben Sie hier die Spieleranzahl an (1-4 Spieler)", "");
        getCardPair = prompt("Bitte geben Sie hier die Kartenpaare an (5-10 Paare)", "");

        playerNumber = Number.parseInt(getPlayerNumber)
        cardPair = Number.parseInt(getCardPair)

        numberCards = cardPair * 2; 
        removeCard = creatCards.length - cardPair;
        console.log(numberCards)
        creatCards.splice(numberCards, removeCard) //nimm die unnötigen Buchstaben aus dem array



        //Anzahl der Karten im Game Div
        for (let i: number = 0; i < numberCards; i++) {

            placeDiv()

        }

        //Anzahl der Spieler im Players  

        for (let i: number = 0; i < playerNumber; i++) {
            let p = document.createElement("p");
            let n = i + 1
            let text: string = "Spieler" + " " + n + ":";
            p.innerText = text;
            document.getElementById("players").appendChild(p);
        }

        function placeDiv(): void {
            let random: string = creatCards[Math.floor(Math.random() * creatCards.length)]; //greife eine random Buchstabe aus dem array
            let position: number = creatCards.indexOf(random); //finde die Position des Buchstabens herraus



            let randomNumber: number = Math.random();

            if (randomNumber < 0.6) { //hidden
                let div: HTMLDivElement = document.createElement("div");
                div.setAttribute("class", random);
                let s: CSSStyleDeclaration = div.style;
                s.border = "thin solid black";
                s.backgroundColor = "black";

                document.getElementById("game").appendChild(div);
            }

            if (randomNumber > 0.6 && randomNumber < 0.8) { //open
                let div: HTMLDivElement = document.createElement("div");
                div.setAttribute("class", random);
                div.innerText = random;
                let s: CSSStyleDeclaration = div.style;
                s.border = "thin solid black";
                document.getElementById("game").appendChild(div);
            }
            else if (randomNumber > 0.8) { //taken
                let div: HTMLDivElement = document.createElement("div");
                div.setAttribute("class", random);
                let s: CSSStyleDeclaration = div.style;

                document.getElementById("game").appendChild(div);
            }

            creatCards.splice(position, 1);

        }





    }


}






