var Aufgabe9;
(function (Aufgabe9) {
    function drawFishOne(_x, _y) {
        Aufgabe9.crc2.beginPath();
        Aufgabe9.crc2.moveTo(_x, _y);
        Aufgabe9.crc2.quadraticCurveTo(_x + 50, _y - 50, _x + 100, _y - 25);
        Aufgabe9.crc2.quadraticCurveTo(_x + 105, _y - 50, _x + 125, _y - 50);
        Aufgabe9.crc2.quadraticCurveTo(_x + 155, _y, _x + 125, _y + 50);
        Aufgabe9.crc2.quadraticCurveTo(_x + 105, _y + 50, _x + 100, _y + 25);
        Aufgabe9.crc2.quadraticCurveTo(_x + 50, _y + 50, _x, _y);
        Aufgabe9.crc2.closePath();
        Aufgabe9.crc2.fillStyle = "#f9b702";
        Aufgabe9.crc2.fill();
        Aufgabe9.crc2.beginPath();
        Aufgabe9.crc2.arc(_x + 25, _y - 10, 2, 0, 2 * Math.PI);
        Aufgabe9.crc2.closePath();
        Aufgabe9.crc2.fillStyle = "black";
        Aufgabe9.crc2.fill();
    }
    Aufgabe9.drawFishOne = drawFishOne;
    function drawFishTwo(_x, _y) {
        Aufgabe9.crc2.beginPath();
        Aufgabe9.crc2.moveTo(_x, _y);
        Aufgabe9.crc2.lineTo(_x, _y + 100);
        Aufgabe9.crc2.lineTo(_x + 25, _y + 75);
        Aufgabe9.crc2.lineTo(_x + 25, _y + 25);
        Aufgabe9.crc2.closePath();
        Aufgabe9.crc2.fillStyle = "blue";
        Aufgabe9.crc2.fill();
        Aufgabe9.crc2.beginPath();
        Aufgabe9.crc2.arc(_x + 50, _y + 50, 40, 0, 2 * Math.PI);
        Aufgabe9.crc2.closePath();
        Aufgabe9.crc2.fillStyle = "blue";
        Aufgabe9.crc2.fill();
        Aufgabe9.crc2.beginPath();
        Aufgabe9.crc2.arc(_x + 75, _y + 40, 2, 0, 2 * Math.PI);
        Aufgabe9.crc2.closePath();
        Aufgabe9.crc2.fillStyle = "black";
        Aufgabe9.crc2.fill();
    }
    Aufgabe9.drawFishTwo = drawFishTwo;
})(Aufgabe9 || (Aufgabe9 = {}));
//# sourceMappingURL=fish.js.map