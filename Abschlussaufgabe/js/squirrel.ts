namespace Abschlussaufgabe {

    export class Squirrel {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            this.move();
            this.draw();

        }
        update(): void {

            this.move();
            this.draw();
        }

        move(): void {

            for (let i = 0; i < keys.length; i++) {

                if (keys[i] == 37) { // left
                    if (this.x < 0)
                    { this.x = 0 + 25 }
                    else {
                        this.x -= 25;
                    }
                }

                if (keys[i] == 39) { // right
                    if (this.x > canvas.width) {
                        this.x = canvas.width - 25
                    }
                    else {
                        this.x += 25;
                    }
                }
                
                if (keys[i] == 1) { // leftbutton
                    if (this.x < 0)
                    { this.x = 0 + 75 }
                    else {
                        this.x -= 75;
                    }
                }

                if (keys[i] == 2) { // rightbutton
                    if (this.x > canvas.width) {
                        this.x = canvas.width - 75
                    }
                    else {
                        this.x += 75;
                    }
                }
            }
            
            
        }

        catch(): void {

            for (let i = 0; i < fallingObjects.length; i++) {

                let distanceX: number = this.x - fallingObjects[i].x;
                let distanceY: number = this.y - fallingObjects[i].y;
                let fallingX: number = fallingObjects[i].x;
                let fallingY: number = fallingObjects[i].y;

                if (distanceX < 80 && distanceX > -80) { //ÄNDERN
                    if (distanceY < 80 && distanceY > -80) { // ÄNDERN
                        if (fallingObjects[i].type == "pinecone" || fallingObjects[i].type == "acorn") {
                            //Plus Punkte
                            if (fallingObjects[i].type == "pinecone") {
                                let test: Pinecone = fallingObjects[i];
                                let index: number = fallingObjects.indexOf(test);
                                fallingObjects.splice(index, 1);
                                score += 2;


                            }
                            else {
                                let test: Acorn = fallingObjects[i];
                                let index: number = fallingObjects.indexOf(test);
                                fallingObjects.splice(index, 1);
                                score += 6;
                                lives += 1;
                            }
                        }
                        else {

                            //                            //Minus Punkte
                            if (fallingObjects[i].type == "branch") {
                                let test: Branch = fallingObjects[i];
                                let index: number = fallingObjects.indexOf(test);
                                fallingObjects.splice(index, 1);
                                score -= 2;


                            }
                            else {
                                let test: Leaf = fallingObjects[i];
                                let index: number = fallingObjects.indexOf(test);
                                fallingObjects.splice(index, 1);
                                score -= 3;

                            }
                        }

                    }

                }
                else if (fallingY >= canvas.height) {

                    if (fallingObjects[i].type == "pinecone" || fallingObjects[i].type == "acorn") {
                        if (fallingObjects[i].type == "pinecone") {
                            let test: Pinecone = fallingObjects[i];
                            let index: number = fallingObjects.indexOf(test);

                            fallingObjects.splice(index, 1);
                            lives -= 1;

                        }
                        else {
                            let test: Acorn = fallingObjects[i];
                            let index: number = fallingObjects.indexOf(test);

                            fallingObjects.splice(index, 1);
                            lives -= 1;

                        }
                    }
                    //                        //Minus Punkte
                    //                        let index: number = fallingObjects.indexOf();
                    //                        fallingObjects.splice(index, 1);

                    else {
                        if (fallingObjects[i].type == "branch") {
                            let test: Branch = fallingObjects[i];
                            let index: number = fallingObjects.indexOf(test);

                            fallingObjects.splice(index, 1);
                            //                            let index: number = fallingObjects.indexOf();
                            //                            fallingObjects.splice(index, 1);

                        }
                        else {
                            let test: Leaf = fallingObjects[i];
                            let index: number = fallingObjects.indexOf(test);

                            fallingObjects.splice(index, 1);
                        }
                        //                        //Keine Veränderung
                        //                        let index: number = fallingObjects.indexOf();
                        //                        fallingObjects.splice(index, 1);

                    }
                }

            }

        }

        draw(): void {

            crc2.beginPath();
            crc2.arc(this.x, this.y, 40, 0, 2 * Math.PI);
            crc2.strokeStyle = "black";
            crc2.lineWidth = 4;
            crc2.fillStyle = "rgba(240, 248, 255, 0.3)";
            crc2.fill();
            crc2.closePath();
            crc2.stroke();


        }
    }
}