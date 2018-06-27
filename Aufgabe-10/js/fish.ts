namespace Aufgabe10 {

    export class SmallFish {

        x: number;
        y: number;

      move(): void {
            this.x +=  - 4;
            this.y +=  0;
                // Wieder Erscheinen beim Verlassen des Canvas
            if(this.x<0){
                this.x = canvas.width;
            }
            if(this.y<0){
                this.y = canvas.height;
            }
            if(this.y> canvas.height){
                this.y = 0;
            }

        }

        drawSmallFish(): void {
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.quadraticCurveTo(this.x + 50, this.y - 50, this.x + 100, this.y - 25);
            crc2.quadraticCurveTo(this.x + 105, this.y - 50, this.x + 125, this.y - 50);
            crc2.quadraticCurveTo(this.x + 155, this.y, this.x + 125, this.y + 50);
            crc2.quadraticCurveTo(this.x + 105, this.y + 50, this.x + 100, this.y + 25);
            crc2.quadraticCurveTo(this.x + 50, this.y + 50, this.x, this.y);
            crc2.closePath();
            crc2.fillStyle = "#f9b702";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 25, this.y - 10, 2, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();

        }
    }
    export class BigFish {
        x: number;
        y: number;



        move(): void {
            this.x += 5;
            if (this.x > canvas.width) {
                this.x = - 10;
            }


        }

        drawBigFish(): void {
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x, this.y + 100);
            crc2.lineTo(this.x + 25, this.y + 75);
            crc2.lineTo(this.x + 25, this.y + 25);
            crc2.closePath();
            crc2.fillStyle = "blue";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 50, this.y + 50, 40, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "blue";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 75, this.y + 40, 2, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();


        }
    }



}