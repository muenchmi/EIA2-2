var Aufgabe10;
(function (Aufgabe10) {
    window.addEventListener("load", init);
    let bubblenumber = 8;
    let fishnumber = 7;
    function init(_event) {
        Aufgabe10.canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe10.canvas.width = 1500;
        Aufgabe10.canvas.height = 1100;
        Aufgabe10.crc2 = Aufgabe10.canvas.getContext("2d");
        Aufgabe10.drawWater(Aufgabe10.canvas.width, Aufgabe10.canvas.height);
        Aufgabe10.drawSeaweed(Aufgabe10.canvas.width, Aufgabe10.canvas.height);
        Aufgabe10.drawSand(Aufgabe10.canvas.width, Aufgabe10.canvas.height);
        Aufgabe10.drawStones(Aufgabe10.canvas.width, Aufgabe10.canvas.height);
        Aufgabe10.drawSeashell(Aufgabe10.canvas.width, Aufgabe10.canvas.height);
        //      RANDOM BUBBLE
        for (let i = 0; i < bubblenumber; i++) {
            let randomBubbles = Math.floor((Math.random() * 2) + 0);
            let x = Math.floor((Math.random() * (Aufgabe10.canvas.width / 2 - 350)) + 100);
            let y = Math.floor((Math.random() * (Aufgabe10.canvas.height - 500)) + 50);
            switch (randomBubbles) {
                case 0:
                    Aufgabe10.drawsmallBubble(x, y);
                    break;
                case 1:
                    Aufgabe10.drawBubble(x, y);
                    break;
            }
        }
        //RANDOM FISH
        for (let i = 0; i < fishnumber; i++) {
            let randomFishs = Math.floor((Math.random() * 2) + 0);
            let x = Math.floor((Math.random() * (Aufgabe10.canvas.width - 400)) + 400);
            let y = Math.floor((Math.random() * (Aufgabe10.canvas.height - 250)) + 50);
            switch (randomFishs) {
                case 0:
                    Aufgabe10.drawFishOne(x, y);
                    break;
                case 1:
                    Aufgabe10.drawFishTwo(x, y);
                    break;
            }
        }
    }
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=aufgabe10.js.map