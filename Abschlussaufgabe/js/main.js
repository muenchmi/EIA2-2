var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    window.addEventListener("load", init);
    let bubblenumber = 8;
    let fishnumber = 7;
    function init(_event) {
        Abschlussaufgabe.canvas = document.getElementsByTagName("canvas")[0];
        Abschlussaufgabe.canvas.width = 1500;
        Abschlussaufgabe.canvas.height = 1100;
        Abschlussaufgabe.crc2 = Abschlussaufgabe.canvas.getContext("2d");
        //        drawWater(canvas.width, canvas.height);
        //        drawSeaweed(canvas.width, canvas.height);
        //        drawSand(canvas.width, canvas.height);
        //        drawStones(canvas.width, canvas.height);
        //        drawSeashell(canvas.width, canvas.height);
        //      RANDOM BUBBLE
        for (let i = 0; i < bubblenumber; i++) {
            let randomBubbles = Math.floor((Math.random() * 2) + 0);
            let x = Math.floor((Math.random() * (Abschlussaufgabe.canvas.width / 2 - 350)) + 100);
            let y = Math.floor((Math.random() * (Abschlussaufgabe.canvas.height - 500)) + 50);
            switch (randomBubbles) {
                case 0:
                    //                    drawsmallBubble(x, y);
                    break;
                case 1:
                    //                    drawBubble(x, y);
                    break;
            }
        }
        //RANDOM FISH
        for (let i = 0; i < fishnumber; i++) {
            let randomFishs = Math.floor((Math.random() * 2) + 0);
            let x = Math.floor((Math.random() * (Abschlussaufgabe.canvas.width - 400)) + 400);
            let y = Math.floor((Math.random() * (Abschlussaufgabe.canvas.height - 250)) + 50);
            switch (randomFishs) {
                case 0:
                    //                    drawFishOne(x, y);
                    break;
                case 1:
                    //                    drawFishTwo(x, y);
                    break;
            }
        }
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=main.js.map