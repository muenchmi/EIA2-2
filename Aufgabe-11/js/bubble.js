var Aufgabe11;
(function (Aufgabe11) {
    class BigBubble {
        move() {
            this.y -= 2;
            if (this.y < 0) {
                this.y = 800;
            }
        }
        drawBigBubble() {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(this.x, this.y, 40, 0, 2 * Math.PI);
            Aufgabe11.crc2.strokeStyle = "white";
            Aufgabe11.crc2.lineWidth = 4;
            Aufgabe11.crc2.fillStyle = "rgba(240, 248, 255, 0.3)";
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.stroke();
        }
    }
    Aufgabe11.BigBubble = BigBubble;
    class SmallBubble {
        move() {
            this.y -= 2;
            if (this.y < 0) {
                this.y = 800;
            }
        }
        drawSmallBubble() {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            Aufgabe11.crc2.strokeStyle = "white";
            Aufgabe11.crc2.lineWidth = 4;
            Aufgabe11.crc2.fillStyle = "rgba(240, 248, 255, 0.3)";
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.stroke();
        }
    }
    Aufgabe11.SmallBubble = SmallBubble;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=bubble.js.map