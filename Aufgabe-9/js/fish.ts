namespace Aufgabe9 {

    export function drawFishOne(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(_x + 50, _y - 50, _x + 100, _y - 25);
        crc2.quadraticCurveTo(_x + 105, _y - 50, _x + 125, _y - 50);
        crc2.quadraticCurveTo(_x + 155, _y, _x + 125, _y + 50);
        crc2.quadraticCurveTo(_x + 105, _y + 50, _x + 100, _y + 25);
        crc2.quadraticCurveTo(_x + 50, _y + 50, _x, _y);
        crc2.closePath();
        crc2.fillStyle = "#f9b702";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 25, _y - 10, 2, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "black";
        crc2.fill();
    }
    export function drawFishTwo(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y + 100);
        crc2.lineTo(_x+25, _y + 75);
        crc2.lineTo(_x+25, _y + 25);
        crc2.closePath();
        crc2.fillStyle = "blue";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 50, _y + 50, 40, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "blue";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 75, _y + 40, 2, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "black";
        crc2.fill();
    }

}