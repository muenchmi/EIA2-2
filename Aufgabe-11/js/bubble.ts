namespace Aufgabe11 {

    export class BigBubble extends MovingObjects  {
        
        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.draw();
            this.move();
        }

        move(): void {
            this.y -= 2;

            if (this.y < 0) {
                this.y = 800;
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
    
    export class SmallBubble extends MovingObjects  {
        
        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.draw();
            this.move();
        }
        
        move(): void {
            this.y -= 2;

            if (this.y < 0) {
                this.y = 800;
            }

        }

        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            crc2.strokeStyle = "white";
            crc2.lineWidth = 4;
            crc2.fillStyle = "rgba(240, 248, 255, 0.3)";
            crc2.fill();
            crc2.closePath();
            crc2.stroke();
        }
    }





}  