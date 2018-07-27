namespace Abschlussaufgabe {

    export class Pinecone extends FallingObject {


        constructor(_x: number, _y: number) {
            super(_x, _y, "pinecone");
            this.type = "pinecone";
            this.draw();
            this.move();
            this.image = new Image();
            this.image.src = "images/pinecone.png";
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {

            //Fall
            if (this.y >= canvas.height) {
                this.y = canvas.height;
            }
            else {
                this.y += 2;
            }
        }

        draw(): void {
            crc2.beginPath();
            //crc2.drawImage(this.image, this.x+2, this.y+2);
            //crc2.closePath();
            crc2.arc(this.x, this.y, 40, 0, 2 * Math.PI);
            crc2.strokeStyle = "black";
            crc2.lineWidth = 4;
            crc2.fillStyle = "rgba(240, 248, 255, 0.3)";
            crc2.fill();
            crc2.closePath();
            crc2.stroke();
        }


    }

    export class Branch extends FallingObject {


        constructor(_x: number, _y: number) {
            super(_x, _y, "branch");
            this.type = "branch";
            this.draw();
            this.move();
        }

        move(): void {
            if (this.y >= canvas.height) {
                this.y = canvas.height;
            }
            else {
                this.y += 2;
            }
        }

        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 40, 0, 2 * Math.PI);
            crc2.strokeStyle = "green";
            crc2.lineWidth = 4;
            crc2.fillStyle = "rgba(240, 248, 255, 0.3)";
            crc2.fill();
            crc2.closePath();
            crc2.stroke();
        }
    }
    export class Leaf extends FallingObject {


        constructor(_x: number, _y: number) {
            super(_x, _y, "leaf");
            this.type = "leaf";
            this.draw();
            this.move();
        }

        move(): void {
            if (this.y >= canvas.height) {
                this.y = canvas.height;
            }
            else {
                this.y += 2;
            }
        }

        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 40, 0, 2 * Math.PI);
            crc2.strokeStyle = "red";
            crc2.lineWidth = 4;
            crc2.fillStyle = "rgba(240, 248, 255, 0.3)";
            crc2.fill();
            crc2.closePath();
            crc2.stroke();
        }
    }
    export class Acorn extends FallingObject {


        constructor(_x: number, _y: number) {
            super(_x, _y, "acorn");
            this.type = "acorn";
            this.draw();
            this.move();
        }

        move(): void {
            if (this.y >= canvas.height) {
                this.y = canvas.height;
            }
            else {
                this.y += 2;
            }
        }

        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 40, 0, 2 * Math.PI);
            crc2.strokeStyle = "white";
            crc2.lineWidth = 4;
            crc2.fillStyle = "rgba(240, 248, 255, 0.3)";
            crc2.fill();
            crc2.closePath();
            crc2.stroke();
        }
    }
}