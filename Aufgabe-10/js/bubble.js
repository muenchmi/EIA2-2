var Aufgabe10;
(function (Aufgabe10) {
    class BigBubble {
        move() {
            this.y -= 2;
            if (this.y < 0) {
                this.y = 800;
            }
        }
        drawBigBubble() {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x, this.y, 40, 0, 2 * Math.PI);
            Aufgabe10.crc2.strokeStyle = "white";
            Aufgabe10.crc2.lineWidth = 4;
            Aufgabe10.crc2.fillStyle = "rgba(240, 248, 255, 0.3)";
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.stroke();
        }
    }
    Aufgabe10.BigBubble = BigBubble;
    class SmallBubble {
        move() {
            this.y -= 2;
            if (this.y < 0) {
                this.y = 800;
            }
        }
        drawSmallBubble() {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            Aufgabe10.crc2.strokeStyle = "white";
            Aufgabe10.crc2.lineWidth = 4;
            Aufgabe10.crc2.fillStyle = "rgba(240, 248, 255, 0.3)";
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.stroke();
        }
    }
    Aufgabe10.SmallBubble = SmallBubble;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=bubble.js.map