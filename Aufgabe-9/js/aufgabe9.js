var Aufgabe9;
(function (Aufgabe9) {
    window.addEventListener("load", init);
    let bubblenumber = 8;
    let fishnumber = 7;
    function init(_event) {
        Aufgabe9.canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe9.canvas.width = 1500;
        Aufgabe9.canvas.height = 1100;
        Aufgabe9.crc2 = Aufgabe9.canvas.getContext("2d");
        Aufgabe9.drawWater(Aufgabe9.canvas.width, Aufgabe9.canvas.height);
        Aufgabe9.drawSeaweed(Aufgabe9.canvas.width, Aufgabe9.canvas.height);
        Aufgabe9.drawSand(Aufgabe9.canvas.width, Aufgabe9.canvas.height);
        Aufgabe9.drawStones(Aufgabe9.canvas.width, Aufgabe9.canvas.height);
        Aufgabe9.drawSeashell(Aufgabe9.canvas.width, Aufgabe9.canvas.height);
        //      RANDOM BUBBLE
        for (let i = 0; i < bubblenumber; i++) {
            let randomBubbles = Math.floor((Math.random() * 2) + 0);
            let x = Math.floor((Math.random() * (Aufgabe9.canvas.width / 2 - 350)) + 100);
            let y = Math.floor((Math.random() * (Aufgabe9.canvas.height - 500)) + 50);
            switch (randomBubbles) {
                case 0:
                    Aufgabe9.drawsmallBubble(x, y);
                    break;
                case 1:
                    Aufgabe9.drawBubble(x, y);
                    break;
            }
        }
        //RANDOM FISH
        for (let i = 0; i < fishnumber; i++) {
            let randomFishs = Math.floor((Math.random() * 2) + 0);
            let x = Math.floor((Math.random() * (Aufgabe9.canvas.width - 400)) + 400);
            let y = Math.floor((Math.random() * (Aufgabe9.canvas.height - 250)) + 50);
            switch (randomFishs) {
                case 0:
                    Aufgabe9.drawFishOne(x, y);
                    break;
                case 1:
                    Aufgabe9.drawFishTwo(x, y);
                    break;
            }
        }
    }
})(Aufgabe9 || (Aufgabe9 = {}));
//# sourceMappingURL=aufgabe9.js.map