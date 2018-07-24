var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    window.addEventListener("load", init);
    let foodnumber = 10;
    Abschlussaufgabe.fallingObjects = [];
    function init(_event) {
        Abschlussaufgabe.canvas = document.getElementsByTagName("canvas")[0];
        Abschlussaufgabe.canvas.width = 1093;
        Abschlussaufgabe.canvas.height = 756;
        Abschlussaufgabe.crc2 = Abschlussaufgabe.canvas.getContext("2d");
        let x;
        let y;
        let imgData;
        let image = new Image();
        image.src = "images/Wald.png";
        image.onload = loadBackground;
        function loadBackground() {
            Abschlussaufgabe.crc2.drawImage(image, 0, 0);
        }
        imgData = Abschlussaufgabe.crc2.getImageData(0, 0, Abschlussaufgabe.canvas.width, Abschlussaufgabe.canvas.height);
        for (let i = 0; i < foodnumber; i++) {
            x = Math.floor((Math.random() * (Abschlussaufgabe.canvas.width / 2 - 350)) + 100);
            y = Math.floor((Math.random() * (Abschlussaufgabe.canvas.height - 500)) + 50);
            let sf = new Abschlussaufgabe.Food(x, y);
            Abschlussaufgabe.fallingObjects.push(sf);
        }
        animate();
        function animate() {
            Abschlussaufgabe.crc2.putImageData(imgData, 0, 0);
            moveObjects();
            drawObjects();
            window.setTimeout(animate, 20);
        }
        function drawObjects() {
            for (let i = 0; i < Abschlussaufgabe.fallingObjects.length; i++) {
                Abschlussaufgabe.fallingObjects[i].draw();
            }
        }
        function moveObjects() {
            for (let i = 0; i < Abschlussaufgabe.fallingObjects.length; i++) {
                Abschlussaufgabe.fallingObjects[i].move();
            }
        }
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=main.js.map