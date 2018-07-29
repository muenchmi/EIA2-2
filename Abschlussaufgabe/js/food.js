var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Pinecone extends Abschlussaufgabe.FallingObject {
        constructor(_x, _y) {
            super(_x, _y, "pinecone");
            this.type = "pinecone"; // Type zum unterscheiden der Objekte 
            this.draw();
            this.move();
            //            this.image = new Image();
            //            this.image.src = "images/pinecone.png";
        }
        // möglichkeit die Geschwindigkeit der einzelnen Gegenstände zu verändern für ein schwierigeres Spiel
        move() {
            //Fall
            if (this.y >= Abschlussaufgabe.canvas.height) {
                this.y = Abschlussaufgabe.canvas.height;
            }
            else {
                this.y += 2;
            }
        }
        draw() {
            Abschlussaufgabe.crc2.beginPath();
            //crc2.drawImage(this.image, this.x+2, this.y+2);
            //crc2.closePath();
            Abschlussaufgabe.crc2.arc(this.x, this.y, 40, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.strokeStyle = "#bd6340";
            Abschlussaufgabe.crc2.lineWidth = 4;
            Abschlussaufgabe.crc2.fillStyle = "rgba(240, 248, 255, 0.3)";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.stroke();
        }
    }
    Abschlussaufgabe.Pinecone = Pinecone;
    class Branch extends Abschlussaufgabe.FallingObject {
        constructor(_x, _y) {
            super(_x, _y, "branch");
            this.type = "branch";
            this.draw();
            this.move();
        }
        move() {
            if (this.y >= Abschlussaufgabe.canvas.height) {
                this.y = Abschlussaufgabe.canvas.height;
            }
            else {
                this.y += 2;
            }
        }
        draw() {
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x, this.y, 40, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.strokeStyle = "#bd6340";
            Abschlussaufgabe.crc2.lineWidth = 4;
            Abschlussaufgabe.crc2.fillStyle = "#bd6340";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.stroke();
        }
    }
    Abschlussaufgabe.Branch = Branch;
    class Leaf extends Abschlussaufgabe.FallingObject {
        constructor(_x, _y) {
            super(_x, _y, "leaf");
            this.type = "leaf";
            this.draw();
            this.move();
        }
        move() {
            if (this.y >= Abschlussaufgabe.canvas.height) {
                this.y = Abschlussaufgabe.canvas.height;
            }
            else {
                this.y += 2;
            }
        }
        draw() {
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x, this.y, 40, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.strokeStyle = "#afafaf";
            Abschlussaufgabe.crc2.lineWidth = 4;
            Abschlussaufgabe.crc2.fillStyle = "#afafaf";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.stroke();
        }
    }
    Abschlussaufgabe.Leaf = Leaf;
    class Acorn extends Abschlussaufgabe.FallingObject {
        constructor(_x, _y) {
            super(_x, _y, "acorn");
            this.type = "acorn";
            this.draw();
            this.move();
        }
        move() {
            if (this.y >= Abschlussaufgabe.canvas.height) {
                this.y = Abschlussaufgabe.canvas.height;
            }
            else {
                this.y += 2;
            }
        }
        draw() {
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x, this.y, 40, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.strokeStyle = "#afafaf";
            Abschlussaufgabe.crc2.lineWidth = 4;
            Abschlussaufgabe.crc2.fillStyle = "rgba(240, 248, 255, 0.3)";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.stroke();
        }
    }
    Abschlussaufgabe.Acorn = Acorn;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=food.js.map