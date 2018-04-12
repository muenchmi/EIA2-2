namespace Aufgabe2 { }

window.addEventListener("load", init);

function init(_event: Event): void {

    let playerNumber: number = 2;
    let cardPair: number = 4;
    let numberCards: number =  cardPair * 2 //erstelle die doppelte anzahl der Kartenpaare 
    let creatCards: string[] = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F", "G", "G", "H", "H", "I", "I", "J", "J", "K", "K", "L", "L", "M", "M", "N", "N", "O", "O", "P", "P", "Q", "Q", "R", "R", "S", "S", "T", "T", "U", "U", "V", "V", "W", "W", "X", "X", "Y", "Y", "Z", "Z"];
    let removeCard: number = creatCards.length - cardPair // bestimme die Zahl die beim splice entfernt werden soll

    creatCards.splice(numberCards, removeCard) 

    //shuffel

    for (let i: number = 0; i < numberCards; i++) {
       placeDiv()
    }


    function placeDiv(): void {
        let div: HTMLDivElement = document.createElement("div");
        div.setAttribute("class", "cards");
        document.body.appendChild(div);

    }
    
    



}



