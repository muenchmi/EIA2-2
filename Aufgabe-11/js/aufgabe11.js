var Aufgabe11;
(function (Aufgabe11) {
    window.addEventListener("load", init);
    let bubblenumber = 8;
    let fishnumber = 7;
    let imgData;
    let movingObjects = [];
    //    let fishOne: FishOne[] = [];
    //    let fishTwo: FishTwo[] = [];
    //    let bigBubbles: BigBubble[] = [];
    //    let smallBubbles: SmallBubble[] = [];
    function init(_event) {
        Aufgabe11.canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe11.canvas.width = 1500;
        Aufgabe11.canvas.height = 1100;
        Aufgabe11.crc2 = Aufgabe11.canvas.getContext("2d");
        let x;
        let y;
        Aufgabe11.drawWater(Aufgabe11.canvas.width, Aufgabe11.canvas.height);
        Aufgabe11.drawSeaweed(Aufgabe11.canvas.width, Aufgabe11.canvas.height);
        Aufgabe11.drawSand(Aufgabe11.canvas.width, Aufgabe11.canvas.height);
        Aufgabe11.drawStones(Aufgabe11.canvas.width, Aufgabe11.canvas.height);
        Aufgabe11.drawSeashell(Aufgabe11.canvas.width, Aufgabe11.canvas.height);
        imgData = Aufgabe11.crc2.getImageData(0, 0, Aufgabe11.canvas.width, Aufgabe11.canvas.height);
        for (let i = 0; i < bubblenumber; i++) {
            x = Math.floor((Math.random() * (Aufgabe11.canvas.width / 2 - 350)) + 100);
            y = Math.floor((Math.random() * (Aufgabe11.canvas.height - 500)) + 50);
            let bb = new Aufgabe11.BigBubble(x, y);
            movingObjects.push(bb);
        }
        for (let i = 0; i < bubblenumber; i++) {
            x = Math.floor((Math.random() * (Aufgabe11.canvas.width / 2 - 350)) + 100);
            y = Math.floor((Math.random() * (Aufgabe11.canvas.height - 500)) + 50);
            let sb = new Aufgabe11.SmallBubble(x, y);
            movingObjects.push(sb);
        }
        for (let i = 0; i < fishnumber; i++) {
            x = (Math.random() * (900 - 50)) + 50;
            y = (Math.random() * (600 - 50)) + 50;
            let fishone = new Aufgabe11.FishOne(x, y);
            movingObjects.push(fishone);
        }
        for (let i = 0; i < fishnumber; i++) {
            x = Math.floor((Math.random() * (Aufgabe11.canvas.width - 400)) + 400);
            y = Math.floor((Math.random() * (Aufgabe11.canvas.height - 250)) + 50);
            let fishtwo = new Aufgabe11.FishTwo(x, y);
            movingObjects.push(fishtwo);
        }
        Aufgabe11.canvas.addEventListener("click", foodEvent);
        animate();
        function animate() {
            Aufgabe11.crc2.putImageData(imgData, 0, 0);
            moveObjects();
            drawObjects();
            window.setTimeout(animate, 20);
        }
        function drawObjects() {
            for (let i = 0; i < movingObjects.length; i++) {
                movingObjects[i].draw();
            }
        }
        function moveObjects() {
            for (let i = 0; i < movingObjects.length; i++) {
                movingObjects[i].move();
            }
        }
        function foodEvent(_event) {
            let foodx = _event.pageX;
            let foody = _event.pageY;
            let foodcor = new Aufgabe11.Food(foodx, foody);
            movingObjects.push(foodcor);
        }
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=aufgabe11.js.map