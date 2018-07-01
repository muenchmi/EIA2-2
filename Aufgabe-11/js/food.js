var Aufgabe11;
(function (Aufgabe11) {
    class Food extends Aufgabe11.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
            this.draw();
            this.move();
        }
        move() {
            if (this.y == Aufgabe11.canvas.height) {
                this.y = Aufgabe11.canvas.height;
            }
            else {
                this.y += 4;
            }
        }
        draw() {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(this.x, this.y, 4, 0, 2 * Math.PI);
            Aufgabe11.crc2.fillStyle = "brown";
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.stroke();
        }
    }
    Aufgabe11.Food = Food;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=food.js.map