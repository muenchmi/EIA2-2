var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Food extends Abschlussaufgabe.FallingObject {
        constructor(_x, _y) {
            super(_x, _y);
            this.draw();
            this.move();
        }
        move() {
            this.y += 2;
            if (this.y < 0) {
                this.y = 800;
            }
        }
        draw() {
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x, this.y, 40, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.strokeStyle = "white";
            Abschlussaufgabe.crc2.lineWidth = 4;
            Abschlussaufgabe.crc2.fillStyle = "rgba(240, 248, 255, 0.3)";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.stroke();
        }
    }
    Abschlussaufgabe.Food = Food;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=food.js.map