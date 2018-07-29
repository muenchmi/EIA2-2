namespace Abschlussaufgabe {

    export class Squirrel {
        x: number;
        y: number;
        //        image: HTMLImageElement;


        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            this.move();
            this.draw();

            //            this.image = new Image();
            //            this.image.src = "images/squirrel.png";

        }


        move(): void {

            for (let i: number = 0; i < keys.length; i++) {

                if (keys[i] == 37) { // left
                    if (this.x < 0) {
                        this.x = 0 + 25;
                    }
                    else {
                        this.x -= 25;
                    }
                }

                if (keys[i] == 39) { // right
                    if (this.x > canvas.width) {
                        this.x = canvas.width - 25;
                    }
                    else {
                        this.x += 25;
                    }
                }

                if (keys[i] == 1) { // leftbutton schnellere Bewegung für die Buttons
                    if (this.x < 0) {
                        this.x = 0 + 75;
                    }
                    else {
                        this.x -= 75;
                    }
                }

                if (keys[i] == 2) { // rightbutton
                    if (this.x > canvas.width) {
                        this.x = canvas.width - 75;
                    }
                    else {
                        this.x += 75;
                    }
                }
            }


        }

        catch(): void {

            for (let i: number = 0; i < fallingObjects.length; i++) {

                let distanceX: number = this.x - fallingObjects[i].x;
                let distanceY: number = this.y - fallingObjects[i].y;
                let fallingX: number = fallingObjects[i].x;
                let fallingY: number = fallingObjects[i].y;

                if (distanceX < 80 && distanceX > -80) { // die Reichweite in der das Objekt als gefangen gilt
                    if (distanceY < 80 && distanceY > -80) {
                        if (fallingObjects[i].type == "pinecone" || fallingObjects[i].type == "acorn") {

                            if (fallingObjects[i].type == "pinecone") {  //je nach Objekt gibt es unterschiedliche Punkte
                                let pinecone: Pinecone = fallingObjects[i];
                                let index: number = fallingObjects.indexOf(pinecone);
                                fallingObjects.splice(index, 1); //entfernt das Objekt nach dem es gefangen wurde
                                score += 2;


                            }
                            else {
                                let acorn: Acorn = fallingObjects[i];
                                let index: number = fallingObjects.indexOf(acorn);
                                fallingObjects.splice(index, 1);
                                score += 6;
                                lives += 1;
                            }
                        }
                        else {

                            //                            //Minus Punkte
                            if (fallingObjects[i].type == "branch") {
                                let branch: Branch = fallingObjects[i];
                                let index: number = fallingObjects.indexOf(branch);
                                fallingObjects.splice(index, 1);
                                score -= 2;


                            }
                            else {
                                let leaf: Leaf = fallingObjects[i];
                                let index: number = fallingObjects.indexOf(leaf);
                                fallingObjects.splice(index, 1);
                                score -= 3;

                            }
                        }

                    }

                }
                else if (fallingY >= canvas.height) { //falls das Objekt nicht gefangen wurde und auf dem Boden landet

                    if (fallingObjects[i].type == "pinecone" || fallingObjects[i].type == "acorn") {
                        if (fallingObjects[i].type == "pinecone") {
                            let pinecone: Pinecone = fallingObjects[i];
                            let index: number = fallingObjects.indexOf(pinecone);

                            fallingObjects.splice(index, 1);
                            lives -= 1;

                        }
                        else {
                            let acorn: Acorn = fallingObjects[i];
                            let index: number = fallingObjects.indexOf(acorn);

                            fallingObjects.splice(index, 1);
                            lives -= 1;

                        }
                    }
                    //                        //Minus Punkte

                    else {
                        if (fallingObjects[i].type == "branch") {
                            let branch: Branch = fallingObjects[i];
                            let index: number = fallingObjects.indexOf(branch);
                            fallingObjects.splice(index, 1);

                        }
                        else {
                            let leaf: Leaf = fallingObjects[i];
                            let index: number = fallingObjects.indexOf(leaf);

                            fallingObjects.splice(index, 1);
                        };

                    }
                }

            }

        }

        draw(): void {
            crc2.beginPath();
            //            crc2.drawImage(this.image, 0, 0, this.x, this.y);
            //            crc2.closePath();
            crc2.arc(this.x, this.y, 40, 0, 2 * Math.PI);
            crc2.strokeStyle = "brown";
            crc2.lineWidth = 4;
            crc2.fillStyle = "brown";
            crc2.fill();
            crc2.closePath();
            crc2.stroke()

        }
    }
}