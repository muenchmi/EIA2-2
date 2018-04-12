window.addEventListener("load", init);
function init(_event) {
    let playerNumber = 2;
    let cardPair = 4;
    let numberCards = cardPair * 2; //erstelle die doppelte anzahl der Kartenpaare 
    let creatCards = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F", "G", "G", "H", "H", "I", "I", "J", "J", "K", "K", "L", "L", "M", "M", "N", "N", "O", "O", "P", "P", "Q", "Q", "R", "R", "S", "S", "T", "T", "U", "U", "V", "V", "W", "W", "X", "X", "Y", "Y", "Z", "Z"];
    let removeCard = creatCards.length - cardPair; // bestimme die Zahl die beim splice entfernt werden soll
    creatCards.splice(numberCards, removeCard);
    //shuffel
    for (let i = 0; i < numberCards; i++) {
        placeDiv();
    }
    function placeDiv() {
        let div = document.createElement("div");
        div.setAttribute("class", "cards");
        document.body.appendChild(div);
    }
}
//# sourceMappingURL=aufgabe2.js.map