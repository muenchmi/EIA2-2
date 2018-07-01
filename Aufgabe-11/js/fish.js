var Aufgabe11;
(function (Aufgabe11) {
    class FishTwo extends Aufgabe11.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
            this.draw();
            this.move();
        }
        move() {
            this.x += -4;
            this.y += 0;
            // Wieder Erscheinen beim Verlassen des Canvas
            if (this.x < 0) {
                this.x = Aufgabe11.canvas.width;
            }
            if (this.y < 0) {
                this.y = Aufgabe11.canvas.height;
            }
            if (this.y > Aufgabe11.canvas.height) {
                this.y = 0;
            }
        }
        draw() {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.x, this.y);
            Aufgabe11.crc2.quadraticCurveTo(this.x + 50, this.y - 50, this.x + 100, this.y - 25);
            Aufgabe11.crc2.quadraticCurveTo(this.x + 105, this.y - 50, this.x + 125, this.y - 50);
            Aufgabe11.crc2.quadraticCurveTo(this.x + 155, this.y, this.x + 125, this.y + 50);
            Aufgabe11.crc2.quadraticCurveTo(this.x + 105, this.y + 50, this.x + 100, this.y + 25);
            Aufgabe11.crc2.quadraticCurveTo(this.x + 50, this.y + 50, this.x, this.y);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fillStyle = "#f9b702";
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(this.x + 25, this.y - 10, 2, 0, 2 * Math.PI);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fillStyle = "black";
            Aufgabe11.crc2.fill();
        }
    }
    Aufgabe11.FishTwo = FishTwo;
    class FishOne extends Aufgabe11.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
            this.draw();
        }
        move() {
            this.x += 5;
            if (this.x > Aufgabe11.canvas.width) {
                this.x = -10;
            }
        }
        draw() {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.x, this.y);
            Aufgabe11.crc2.lineTo(this.x, this.y + 100);
            Aufgabe11.crc2.lineTo(this.x + 25, this.y + 75);
            Aufgabe11.crc2.lineTo(this.x + 25, this.y + 25);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fillStyle = "blue";
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(this.x + 50, this.y + 50, 40, 0, 2 * Math.PI);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fillStyle = "blue";
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(this.x + 75, this.y + 40, 2, 0, 2 * Math.PI);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fillStyle = "black";
            Aufgabe11.crc2.fill();
        }
    }
    Aufgabe11.FishOne = FishOne;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=fish.js.map