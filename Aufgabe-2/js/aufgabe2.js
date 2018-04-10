var Aufgabe2;
(function (Aufgabe2) {
    window.addEventListener("load", init);
    let playernumber = ["1", "2", "3", "4"];
    let cardnumber = [5, 6, 7, 8];
    let playernumberinputs = [];
    //    let cardnumberinputs: HTMLInputElement[] = [];
    //    
    function init(_event) {
        createplayernumber();
        //        createcardnumber();
    }
    function createplayernumber() {
        for (let i = 0; i < playernumber.length; i++) {
            let label = document.createElement("label");
            label.appendChild(document.createTextNode(playernumber[i]));
            let input = document.createElement("input");
            input.type = "number";
            input.name = playernumber[i];
            input.id = playernumber[i];
            input.defaultValue = "1";
            input.step = "1";
            input.min = "1";
            input.max = "4";
            label.appendChild(input);
            document.getElementById("flavor").appendChild(label);
            playernumberinputs.push(input);
        }
    }
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=aufgabe2.js.map