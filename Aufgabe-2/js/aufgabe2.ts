namespace Aufgabe2{
    window.addEventListener("load", init);
    
    let playernumber: string[] = ["1","2","3","4"]
    let cardnumber: number[] = [5,6,7,8]
    let playernumberinputs: HTMLInputElement[] = [];
//    let cardnumberinputs: HTMLInputElement[] = [];
//    
    function init(_event: Event): void {
        createplayernumber();
//        createcardnumber();
    }
    
    
    
function createplayernumber(): void {
        for (let i = 0; i < playernumber.length; i++) {
            let label : HTMLLabelElement = document.createElement("label");
            label.appendChild(document.createTextNode(playernumber[i]));
            let input : HTMLInputElement = document.createElement("input");
            input.type = "number";
            input.name = playernumber[i];
            input.id = playernumber[i];
            input.defaultValue = "1";
            input.step = "1";
            input.min = "1";
            input.max = "4";
            label.appendChild(input);
            document.getElementById("playernumber").appendChild(label);
            playernumberinputs.push(input);
        }
    }

//function createcardnumber(): void {
//        for (let i = 0; i < flavors.length; i++) {
//            let label : HTMLLabelElement = document.createElement("label");
//            label.appendChild(document.createTextNode(flavors[i]));
//            let input : HTMLInputElement = document.createElement("input");
//            input.type = "number";
//            input.name = flavors[i]
//            input.id = flavors[i];
//            input.defaultValue = "0";
//            input.step = "1";
//            input.min = "0";
//            input.max = "10";
//            label.appendChild(input);
//            document.getElementById("flavor").appendChild(label);
//            flavorinputs.push(input);
//        }
//    }



}