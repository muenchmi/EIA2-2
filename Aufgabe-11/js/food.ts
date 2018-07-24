namespace Aufgabe11 {
    export class Food extends MovingObjects {


        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.draw();
            this.move();

        }


        move(): void {
            if (this.y == canvas.height) {
                this.y = canvas.height;
            }
            if  (this.y > canvas.height) {
                this.y = canvas.height;
            }

            else {
                this.y += 4;
            }
        }

        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 4, 0, 2 * Math.PI);
            crc2.fillStyle = "brown";
            crc2.fill();
            crc2.closePath();
            crc2.stroke();
        }

    }
}