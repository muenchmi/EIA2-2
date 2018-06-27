var Aufgabe10;
(function (Aufgabe10) {
    window.addEventListener("load", init);
    let bubblenumber = 8;
    let fishnumber = 7;
    let imgData;
    let bigFish = [];
    let smallFish = [];
    let bigBubbles = [];
    let smallBubbles = [];
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
        imgData = Aufgabe10.crc2.getImageData(0, 0, Aufgabe10.canvas.width, Aufgabe10.canvas.height);
        for (let i = 0; i < bubblenumber; i++) {
            let bb = new Aufgabe10.BigBubble();
            bb.x = Math.floor((Math.random() * (Aufgabe10.canvas.width / 2 - 350)) + 100);
            bb.y = Math.floor((Math.random() * (Aufgabe10.canvas.height - 500)) + 50);
            bigBubbles.push(bb);
        }
        for (let i = 0; i < bubblenumber; i++) {
            let sb = new Aufgabe10.SmallBubble();
            sb.x = Math.floor((Math.random() * (Aufgabe10.canvas.width / 2 - 350)) + 100);
            sb.y = Math.floor((Math.random() * (Aufgabe10.canvas.height - 500)) + 50);
            smallBubbles.push(sb);
        }
        for (let i = 0; i < fishnumber; i++) {
            let bf = new Aufgabe10.BigFish();
            bf.x = (Math.random() * (900 - 50)) + 50;
            bf.y = (Math.random() * (600 - 50)) + 50;
            bigFish.push(bf);
        }
        for (let i = 0; i < fishnumber; i++) {
            let sf = new Aufgabe10.SmallFish();
            sf.x = Math.floor((Math.random() * (Aufgabe10.canvas.width - 400)) + 400);
            sf.y = Math.floor((Math.random() * (Aufgabe10.canvas.height - 250)) + 50);
            smallFish.push(sf);
        }
        imgData = Aufgabe10.crc2.getImageData(0, 0, Aufgabe10.canvas.width, Aufgabe10.canvas.height); // Speichern der Landschaft
        animate();
        function animate() {
            Aufgabe10.crc2.putImageData(imgData, 0, 0);
            moveBigBubbles();
            drawBigBubbles();
            moveSmallBubbles();
            drawSmallBubbles();
            moveBigFish();
            moveSmallFish();
            drawBigFish();
            drawSmallFish();
            window.setTimeout(animate, 20);
        }
        function moveBigBubbles() {
            for (let i = 0; i < bigBubbles.length; i++) {
                bigBubbles[i].move();
            }
        }
        function drawBigBubbles() {
            for (let i = 0; i < bigBubbles.length; i++)
                bigBubbles[i].drawBigBubble();
        }
        function moveSmallBubbles() {
            for (let i = 0; i < smallBubbles.length; i++) {
                smallBubbles[i].move();
            }
        }
        function drawSmallBubbles() {
            for (let i = 0; i < smallBubbles.length; i++)
                smallBubbles[i].drawSmallBubble();
        }
        function moveBigFish() {
            for (let i = 0; i < bigFish.length; i++) {
                bigFish[i].move();
            }
        }
        function drawBigFish() {
            for (let i = 0; i < bigFish.length; i++)
                bigFish[i].drawBigFish();
        }
        function moveSmallFish() {
            for (let i = 0; i < smallFish.length; i++) {
                smallFish[i].move();
            }
        }
        function drawSmallFish() {
            for (let i = 0; i < smallFish.length; i++)
                smallFish[i].drawSmallFish();
        }
    }
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=aufgabe10.js.map