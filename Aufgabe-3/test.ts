
var AnzahlPlayer: number;
var AnzahlKartenpaare: number;
var cards: number[];
var scores: number[];
var playersNumberTurn: number;
var cardsOpen: number;
var firstCardNumber: number;
var secondCardNumber: number;
var firstCardId: string;
var secondCardId: string;
var inputField: HTMLDivElement;
window.addEventListener("load", initInput);

function initInput() {
    console.log("initInput");
    var _body: HTMLElement = document.getElementsByTagName("body")[0];
   
    var title = document.createElement('div');
    title.id = "title";
    title.innerHTML = "Memory";
    _body.appendChild(title);


    
    inputField = document.createElement('div');
    inputField.id = "inputField";
    
    var AnzahlSpieler: HTMLElement = document.createElement('div');
    AnzahlSpieler.id="anzahlspieler";

    var AnzahlSpielerLabel: HTMLElement = document.createElement('label');
    AnzahlSpielerLabel.innerHTML = "Anzahl Spieler:";

    var inputAnzahlSpieler: HTMLSelectElement = document.createElement('select');
    inputAnzahlSpieler.innerHTML = '<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option>'
    inputAnzahlSpieler.selectedIndex = 1;

    inputAnzahlSpieler.id = "inputAnzahlSpieler";

   
    var AnzahlKartenpaare: HTMLElement = document.createElement('div');
    AnzahlKartenpaare.id = "anzahlkartenpaare";

    var AnzahlKartenpaareLabel: HTMLElement = document.createElement('label');
    AnzahlKartenpaareLabel.innerHTML = "Anzahl Kartenpaare:";


    var inputAnzahlKartenpaare = document.createElement('div');
    inputAnzahlKartenpaare.innerHTML = '<input type="number" name="inputAnzahlKartenpaare" min=5 id="inputAnzahlKartenpaare" value=5>';
    inputAnzahlKartenpaare.addEventListener("change", checkvalue);

    
    var button = document.createElement("BUTTON");       
    button.id="okbutton";
    var buttonText = document.createTextNode("Start");       
    button.appendChild(buttonText);                                
    button.addEventListener("click", initGame)
   
    AnzahlSpieler.appendChild(AnzahlSpielerLabel);
    AnzahlSpieler.appendChild(inputAnzahlSpieler);

    AnzahlKartenpaare.appendChild(AnzahlKartenpaareLabel);
    AnzahlKartenpaare.appendChild(inputAnzahlKartenpaare);

    inputField.appendChild(AnzahlSpieler);
    inputField.appendChild(AnzahlKartenpaare);
    inputField.appendChild(button);

    _body.appendChild(inputField);

}


function initGame() {
    
    AnzahlKartenpaare = parseInt((<HTMLInputElement>document.getElementById("inputAnzahlKartenpaare")).value);
    AnzahlPlayer = parseInt((<HTMLInputElement>document.getElementById("inputAnzahlSpieler")).value);

 
    inputField.remove();

    console.log("initGame");

    var _body: HTMLElement = document.getElementsByTagName("body")[0];
 
    cardsOpen = 0;
    cards = [];
    scores = [];
    playersNumberTurn = 1;


    var scoreField: HTMLDivElement = document.createElement('div');
    scoreField.id = "scorefield";
    var turn: HTMLDivElement = document.createElement('div');
    turn.className += " gui";
    turn.id = "turn";
    turn.innerHTML = "Turn: Player1";
    scoreField.appendChild(turn);

    for (var i: number = 1; i <= AnzahlPlayer; i++) {
        scores.push(0);
        var score: HTMLDivElement = document.createElement('div');
        score.id = "scorePlayer" + i;
        score.className = "score gui";
        score.innerHTML = "Player" + i + " :0";
        scoreField.appendChild(score);
    }


    for (var i: number = 0; i < AnzahlKartenpaare; i++) {
        cards.push(i);
        cards.push(i);
    }
    cards = shuffle(cards);
    var cardField: HTMLDivElement = document.createElement('div');
    cardField.id = "cardfield";
    

    for (var i: number = 0; i < cards.length; i++) {
        var card: HTMLDivElement = document.createElement('div');
        card.innerHTML = "";
        card.className += "card ";
        if ((i) % Math.floor(Math.sqrt(AnzahlKartenpaare * 2)) == 0) {
            card.style.clear = "both";
        }
        card.id = i.toString();
        card.addEventListener("click", cardClicked);
        cardField.appendChild(card);
    }
    _body.appendChild(scoreField);
    _body.appendChild(cardField);

}
function checkvalue(event: Event) {
    var input = <HTMLInputElement>event.target;
    var val: number = parseInt(input.value);
    if (val < 5) {
        input.value = "5";
    }
}

function cardClicked(event: Event) {
    var card: HTMLElement = <HTMLElement>event.target;

  
    if (card.innerHTML == "") {
       
        if (cardsOpen == 0) {
           
            card.innerHTML = cards[card.id];
            firstCardNumber = cards[card.id];
            firstCardId = card.id;
            cardsOpen = 1;
        }
        
        else if (cardsOpen == 1) {
           
            card.innerHTML = cards[card.id];
            secondCardNumber = cards[card.id];
            secondCardId = card.id;
            
            if (firstCardNumber == secondCardNumber) {
               
                var entfernteListenerKartenIndexes: number[] = []
                var allCards = document.getElementsByClassName("card");
                for (var i = 0; i < allCards.length; i++) {
                    if (!(allCards.item(i).classList.contains("found"))) {
                      
                        allCards.item(i).removeEventListener("click", cardClicked);
                        entfernteListenerKartenIndexes.push(i);

                    }

                }
                setTimeout(function() {
                  
                    for (var i = 0; i < entfernteListenerKartenIndexes.length; i++) {
                        allCards.item(entfernteListenerKartenIndexes[i]).addEventListener("click", cardClicked);
                    }

                    
                    document.getElementById(firstCardId).classList.add("found");
                    document.getElementById(firstCardId).removeEventListener("click", cardClicked);
                    document.getElementById(secondCardId).classList.add("found");
                    document.getElementById(secondCardId).removeEventListener("click", cardClicked);

                  
                    scores[playersNumberTurn - 1]++;
                    document.getElementById("scorePlayer" + playersNumberTurn).innerHTML = "Player" + playersNumberTurn.toString() + ": " + scores[playersNumberTurn - 1].toString();
                    cardsOpen = 0;
                }, 1000);



            }
            else {
               

                playersNumberTurn++;
                if (playersNumberTurn > AnzahlPlayer) {
                    playersNumberTurn = 1;
                }
                document.getElementById("turn").innerHTML = "Turn: Player" + playersNumberTurn;
                cardsOpen = 2
            }

        }
        else if (cardsOpen == 2) {
            
            document.getElementById(firstCardId).innerHTML = "";
            document.getElementById(secondCardId).innerHTML = "";

            card.innerHTML = cards[card.id];
            firstCardNumber = cards[card.id];
            firstCardId = card.id;
            cardsOpen = 1;
        } 

    }


}


function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;