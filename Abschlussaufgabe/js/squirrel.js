var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Squirrel {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
            this.move();
            this.draw();
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            for (let i = 0; i < Abschlussaufgabe.keys.length; i++) {
                if (Abschlussaufgabe.keys[i] == 37) {
                    if (this.x < 0) {
                        this.x = 0 + 25;
                    }
                    else {
                        this.x -= 25;
                    }
                }
                if (Abschlussaufgabe.keys[i] == 39) {
                    if (this.x > Abschlussaufgabe.canvas.width) {
                        this.x = Abschlussaufgabe.canvas.width - 25;
                    }
                    else {
                        this.x += 25;
                    }
                }
                if (Abschlussaufgabe.keys[i] == 1) {
                    if (this.x < 0) {
                        this.x = 0 + 75;
                    }
                    else {
                        this.x -= 75;
                    }
                }
                if (Abschlussaufgabe.keys[i] == 2) {
                    if (this.x > Abschlussaufgabe.canvas.width) {
                        this.x = Abschlussaufgabe.canvas.width - 75;
                    }
                    else {
                        this.x += 75;
                    }
                }
            }
        }
        catch() {
            for (let i = 0; i < Abschlussaufgabe.fallingObjects.length; i++) {
                let distanceX = this.x - Abschlussaufgabe.fallingObjects[i].x;
                let distanceY = this.y - Abschlussaufgabe.fallingObjects[i].y;
                let fallingX = Abschlussaufgabe.fallingObjects[i].x;
                let fallingY = Abschlussaufgabe.fallingObjects[i].y;
                if (distanceX < 80 && distanceX > -80) {
                    if (distanceY < 80 && distanceY > -80) {
                        if (Abschlussaufgabe.fallingObjects[i].type == "pinecone" || Abschlussaufgabe.fallingObjects[i].type == "acorn") {
                            //Plus Punkte
                            if (Abschlussaufgabe.fallingObjects[i].type == "pinecone") {
                                let test = Abschlussaufgabe.fallingObjects[i];
                                let index = Abschlussaufgabe.fallingObjects.indexOf(test);
                                Abschlussaufgabe.fallingObjects.splice(index, 1);
                                Abschlussaufgabe.score += 2;
                            }
                            else {
                                let test = Abschlussaufgabe.fallingObjects[i];
                                let index = Abschlussaufgabe.fallingObjects.indexOf(test);
                                Abschlussaufgabe.fallingObjects.splice(index, 1);
                                Abschlussaufgabe.score += 6;
                                Abschlussaufgabe.lives += 1;
                            }
                        }
                        else {
                            //                            //Minus Punkte
                            if (Abschlussaufgabe.fallingObjects[i].type == "branch") {
                                let test = Abschlussaufgabe.fallingObjects[i];
                                let index = Abschlussaufgabe.fallingObjects.indexOf(test);
                                Abschlussaufgabe.fallingObjects.splice(index, 1);
                                Abschlussaufgabe.score -= 2;
                            }
                            else {
                                let test = Abschlussaufgabe.fallingObjects[i];
                                let index = Abschlussaufgabe.fallingObjects.indexOf(test);
                                Abschlussaufgabe.fallingObjects.splice(index, 1);
                                Abschlussaufgabe.score -= 3;
                            }
                        }
                    }
                }
                else if (fallingY >= Abschlussaufgabe.canvas.height) {
                    if (Abschlussaufgabe.fallingObjects[i].type == "pinecone" || Abschlussaufgabe.fallingObjects[i].type == "acorn") {
                        if (Abschlussaufgabe.fallingObjects[i].type == "pinecone") {
                            let test = Abschlussaufgabe.fallingObjects[i];
                            let index = Abschlussaufgabe.fallingObjects.indexOf(test);
                            Abschlussaufgabe.fallingObjects.splice(index, 1);
                            Abschlussaufgabe.lives -= 1;
                        }
                        else {
                            let test = Abschlussaufgabe.fallingObjects[i];
                            let index = Abschlussaufgabe.fallingObjects.indexOf(test);
                            Abschlussaufgabe.fallingObjects.splice(index, 1);
                            Abschlussaufgabe.lives -= 1;
                        }
                    }
                    else {
                        if (Abschlussaufgabe.fallingObjects[i].type == "branch") {
                            let test = Abschlussaufgabe.fallingObjects[i];
                            let index = Abschlussaufgabe.fallingObjects.indexOf(test);
                            Abschlussaufgabe.fallingObjects.splice(index, 1);
                        }
                        else {
                            let test = Abschlussaufgabe.fallingObjects[i];
                            let index = Abschlussaufgabe.fallingObjects.indexOf(test);
                            Abschlussaufgabe.fallingObjects.splice(index, 1);
                        }
                    }
                }
            }
        }
        draw() {
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x, this.y, 40, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.strokeStyle = "black";
            Abschlussaufgabe.crc2.lineWidth = 4;
            Abschlussaufgabe.crc2.fillStyle = "rgba(240, 248, 255, 0.3)";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.stroke();
        }
    }
    Abschlussaufgabe.Squirrel = Squirrel;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=squirrel.js.map