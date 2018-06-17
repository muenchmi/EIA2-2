namespace Aufgabe9 {

    export function drawsmallBubble(_x: number, _y: number): void {

        crc2.beginPath();
        crc2.arc(_x, _y, 20, 0, 2 * Math.PI);
        crc2.strokeStyle = "white";
        crc2.lineWidth = 4;
        crc2.fillStyle = "rgba(240, 248, 255, 0.3)";
        crc2.fill();
        crc2.closePath();
        crc2.stroke();
    }


    export function drawBubble(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.arc(_x, _y, 40, 0, 2 * Math.PI);
        crc2.strokeStyle = "white";
        crc2.lineWidth = 4;
        crc2.fillStyle = "rgba(240, 248, 255, 0.3)";
        crc2.fill();
        crc2.closePath();
        crc2.stroke();
    }
}  