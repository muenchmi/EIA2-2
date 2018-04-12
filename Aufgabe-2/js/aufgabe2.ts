namespace Aufgabe2 { }

window.addEventListener("load", init);

function init(_event: Event): void {

    let playerNumber: number = 2;
    let cardPair: number = 4;
    let creatCards: string[] = ["A","A","B","B","C","C","D","D","E","E","F","F","G","G","H","H","I","I","J","J","K","K","L","L","M","M","N","N","O","O","P","P","Q","Q","R","R","S","S","T","T","U","U","V","V","W","W","X","X","Y","Y","Z","Z"];
    let removeCard: number = creatCards.length - cardPair
    
    creatCards.splice(cardPair, removeCard)
    
    //shuffel
    
    for  (let i: number = 0; i < cardPair; i++){
        placeDiv ()
    
    
    
    
     function placeDiv( _x: number, _y: number, _width: number, _height: number): void {
        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div);

        let s: CSSStyleDeclaration = div.style;
        s.border = "thin solid black";
        s.position = "absolute";
        s.backgroundColor = _color;
        s.width = _width + "px";
        s.height = _height + "px";
        s.left = _x + "px";
        s.top = _y + "px";
    }
    
   

}



