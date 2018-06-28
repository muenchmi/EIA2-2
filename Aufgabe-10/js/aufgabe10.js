var Aufgabe10;
(function (Aufgabe10) {
    window.addEventListener("load", init);
    let bubblenumber = 8;
    let fishnumber = 7;
    let imgData;
    let fishOne = [];
    let fishTwo = [];
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
            let fishone = new Aufgabe10.FishOne();
            fishone.x = (Math.random() * (900 - 50)) + 50;
            fishone.y = (Math.random() * (600 - 50)) + 50;
            fishOne.push(fishone);
        }
        for (let i = 0; i < fishnumber; i++) {
            let fishtwo = new Aufgabe10.FishTwo();
            fishtwo.x = Math.floor((Math.random() * (Aufgabe10.canvas.width - 400)) + 400);
            fishtwo.y = Math.floor((Math.random() * (Aufgabe10.canvas.height - 250)) + 50);
            fishTwo.push(fishtwo);
        }
        imgData = Aufgabe10.crc2.getImageData(0, 0, Aufgabe10.canvas.width, Aufgabe10.canvas.height); // Speichern der Landschaft
        animate();
        function animate() {
            Aufgabe10.crc2.putImageData(imgData, 0, 0);
            moveBigBubbles();
            moveSmallBubbles();
            moveBigFish();
            moveSmallFish();
            drawSmallBubbles();
            drawBigBubbles();
            drawFishOne();
            drawFishTwo();
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
            for (let i = 0; i < fishOne.length; i++) {
                fishOne[i].move();
            }
        }
        function drawFishOne() {
            for (let i = 0; i < fishOne.length; i++)
                fishOne[i].drawFishOne();
        }
        function moveSmallFish() {
            for (let i = 0; i < fishTwo.length; i++) {
                fishTwo[i].move();
            }
        }
        function drawFishTwo() {
            for (let i = 0; i < fishTwo.length; i++)
                fishTwo[i].drawFishTwo();
        }
    }
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=aufgabe10.js.map