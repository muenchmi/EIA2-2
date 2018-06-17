var Aufgabe9;
(function (Aufgabe9) {
    function drawsmallBubble(_x, _y) {
        Aufgabe9.crc2.beginPath();
        Aufgabe9.crc2.arc(_x, _y, 20, 0, 2 * Math.PI);
        Aufgabe9.crc2.strokeStyle = "white";
        Aufgabe9.crc2.lineWidth = 4;
        Aufgabe9.crc2.fillStyle = "rgba(240, 248, 255, 0.3)";
        Aufgabe9.crc2.fill();
        Aufgabe9.crc2.closePath();
        Aufgabe9.crc2.stroke();
    }
    Aufgabe9.drawsmallBubble = drawsmallBubble;
    function drawBubble(_x, _y) {
        Aufgabe9.crc2.beginPath();
        Aufgabe9.crc2.arc(_x, _y, 40, 0, 2 * Math.PI);
        Aufgabe9.crc2.strokeStyle = "white";
        Aufgabe9.crc2.lineWidth = 4;
        Aufgabe9.crc2.fillStyle = "rgba(240, 248, 255, 0.3)";
        Aufgabe9.crc2.fill();
        Aufgabe9.crc2.closePath();
        Aufgabe9.crc2.stroke();
    }
    Aufgabe9.drawBubble = drawBubble;
})(Aufgabe9 || (Aufgabe9 = {}));
//# sourceMappingURL=bubble.js.map