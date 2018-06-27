var Aufgabe10;
(function (Aufgabe10) {
    class SmallFish {
        move() {
            this.x += -4;
            this.y += 0;
            // Wieder Erscheinen beim Verlassen des Canvas
            if (this.x < 0) {
                this.x = Aufgabe10.canvas.width;
            }
            if (this.y < 0) {
                this.y = Aufgabe10.canvas.height;
            }
            if (this.y > Aufgabe10.canvas.height) {
                this.y = 0;
            }
        }
        drawSmallFish() {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x, this.y);
            Aufgabe10.crc2.quadraticCurveTo(this.x + 50, this.y - 50, this.x + 100, this.y - 25);
            Aufgabe10.crc2.quadraticCurveTo(this.x + 105, this.y - 50, this.x + 125, this.y - 50);
            Aufgabe10.crc2.quadraticCurveTo(this.x + 155, this.y, this.x + 125, this.y + 50);
            Aufgabe10.crc2.quadraticCurveTo(this.x + 105, this.y + 50, this.x + 100, this.y + 25);
            Aufgabe10.crc2.quadraticCurveTo(this.x + 50, this.y + 50, this.x, this.y);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.fillStyle = "#f9b702";
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x + 25, this.y - 10, 2, 0, 2 * Math.PI);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.fillStyle = "black";
            Aufgabe10.crc2.fill();
        }
    }
    Aufgabe10.SmallFish = SmallFish;
    class BigFish {
        move() {
            this.x += 5;
            if (this.x > Aufgabe10.canvas.width) {
                this.x = -10;
            }
        }
        drawBigFish() {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x, this.y);
            Aufgabe10.crc2.lineTo(this.x, this.y + 100);
            Aufgabe10.crc2.lineTo(this.x + 25, this.y + 75);
            Aufgabe10.crc2.lineTo(this.x + 25, this.y + 25);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.fillStyle = "blue";
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x + 50, this.y + 50, 40, 0, 2 * Math.PI);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.fillStyle = "blue";
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x + 75, this.y + 40, 2, 0, 2 * Math.PI);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.fillStyle = "black";
            Aufgabe10.crc2.fill();
        }
    }
    Aufgabe10.BigFish = BigFish;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=fish.js.map