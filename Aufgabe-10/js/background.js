var Aufgabe10;
(function (Aufgabe10) {
    function drawWater(_width, _hight) {
        let grd = Aufgabe10.crc2.createLinearGradient(0, 0, 0, _hight);
        grd.addColorStop(0, "#bae0ff");
        grd.addColorStop(1, "#3987c9");
        Aufgabe10.crc2.fillStyle = grd;
        Aufgabe10.crc2.fillRect(0, 0, _width, _hight);
    }
    Aufgabe10.drawWater = drawWater;
    function drawSand(_width, _hight) {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(0, _hight - 100);
        Aufgabe10.crc2.quadraticCurveTo(_width - 400, _hight + 25, _width, _hight - 200);
        Aufgabe10.crc2.lineTo(_width, _hight);
        Aufgabe10.crc2.lineTo(0, _hight);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fillStyle = "#c8ba8d";
        Aufgabe10.crc2.fill();
    }
    Aufgabe10.drawSand = drawSand;
    function drawSeashell(_width, _hight) {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.strokeStyle = "#fff5ee";
        Aufgabe10.crc2.moveTo(300, 1000);
        Aufgabe10.crc2.lineTo(130, 950);
        Aufgabe10.crc2.lineCap = "round";
        Aufgabe10.crc2.lineWidth = 50;
        Aufgabe10.crc2.stroke();
        Aufgabe10.crc2.moveTo(300, 1000);
        Aufgabe10.crc2.lineTo(135, 900);
        Aufgabe10.crc2.lineCap = "round";
        Aufgabe10.crc2.lineWidth = 50;
        Aufgabe10.crc2.moveTo(300, 1000);
        Aufgabe10.crc2.lineTo(150, 850);
        Aufgabe10.crc2.lineCap = "round";
        Aufgabe10.crc2.lineWidth = 50;
        Aufgabe10.crc2.stroke();
        Aufgabe10.crc2.moveTo(300, 1000);
        Aufgabe10.crc2.lineTo(190, 800);
        Aufgabe10.crc2.lineCap = "round";
        Aufgabe10.crc2.lineWidth = 70;
        Aufgabe10.crc2.stroke();
        Aufgabe10.crc2.moveTo(300, 1000);
        Aufgabe10.crc2.lineTo(250, 775);
        Aufgabe10.crc2.lineCap = "round";
        Aufgabe10.crc2.lineWidth = 70;
        Aufgabe10.crc2.stroke();
        Aufgabe10.crc2.moveTo(300, 1000);
        Aufgabe10.crc2.lineTo(300, 765);
        Aufgabe10.crc2.lineCap = "round";
        Aufgabe10.crc2.lineWidth = 70;
        Aufgabe10.crc2.stroke();
        Aufgabe10.crc2.moveTo(300, 1000);
        Aufgabe10.crc2.lineTo(350, 775);
        Aufgabe10.crc2.lineCap = "round";
        Aufgabe10.crc2.lineWidth = 70;
        Aufgabe10.crc2.stroke();
        Aufgabe10.crc2.moveTo(300, 1000);
        Aufgabe10.crc2.lineTo(400, 800);
        Aufgabe10.crc2.lineCap = "round";
        Aufgabe10.crc2.lineWidth = 70;
        Aufgabe10.crc2.stroke();
        Aufgabe10.crc2.moveTo(300, 1000);
        Aufgabe10.crc2.lineTo(425, 850);
        Aufgabe10.crc2.lineCap = "round";
        Aufgabe10.crc2.lineWidth = 50;
        Aufgabe10.crc2.stroke();
        Aufgabe10.crc2.moveTo(300, 1000);
        Aufgabe10.crc2.lineTo(450, 900);
        Aufgabe10.crc2.lineCap = "round";
        Aufgabe10.crc2.lineWidth = 70;
        Aufgabe10.crc2.stroke();
        Aufgabe10.crc2.moveTo(300, 1000);
        Aufgabe10.crc2.lineTo(450, 950);
        Aufgabe10.crc2.lineCap = "round";
        Aufgabe10.crc2.lineWidth = 70;
        Aufgabe10.crc2.stroke();
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.strokeStyle = "#fff5ee";
        Aufgabe10.crc2.moveTo(200, 1000);
        Aufgabe10.crc2.lineTo(380, 1000);
        Aufgabe10.crc2.stroke();
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.strokeStyle = "#d8a4b1";
        Aufgabe10.crc2.lineWidth = 35;
        Aufgabe10.crc2.moveTo(230, 975);
        Aufgabe10.crc2.lineTo(350, 975);
        Aufgabe10.crc2.stroke();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.arc(290, 930, 40, 0, 2 * Math.PI);
        Aufgabe10.crc2.strokeStyle = "white";
        Aufgabe10.crc2.lineWidth = 4;
        Aufgabe10.crc2.fillStyle = "rgb(252, 252, 252)";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.stroke();
    }
    Aufgabe10.drawSeashell = drawSeashell;
    function drawSeaweed(_width, _hight) {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(100, 1100);
        Aufgabe10.crc2.quadraticCurveTo(130, 900, 100, 800);
        Aufgabe10.crc2.quadraticCurveTo(75, 700, 100, 600);
        Aufgabe10.crc2.quadraticCurveTo(110, 550, 100, 450);
        Aufgabe10.crc2.quadraticCurveTo(130, 550, 120, 600);
        Aufgabe10.crc2.quadraticCurveTo(100, 700, 120, 800);
        Aufgabe10.crc2.quadraticCurveTo(150, 900, 120, 1100);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fillStyle = "green";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(50, 1100);
        Aufgabe10.crc2.quadraticCurveTo(20, 900, 50, 800);
        Aufgabe10.crc2.quadraticCurveTo(75, 700, 50, 600);
        Aufgabe10.crc2.quadraticCurveTo(30, 550, 50, 480);
        Aufgabe10.crc2.quadraticCurveTo(40, 520, 70, 600);
        Aufgabe10.crc2.quadraticCurveTo(95, 700, 70, 800);
        Aufgabe10.crc2.quadraticCurveTo(50, 900, 70, 1100);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fillStyle = "green";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(250, 1100);
        Aufgabe10.crc2.quadraticCurveTo(220, 900, 250, 800);
        Aufgabe10.crc2.quadraticCurveTo(275, 700, 250, 600);
        Aufgabe10.crc2.quadraticCurveTo(230, 550, 250, 480);
        Aufgabe10.crc2.quadraticCurveTo(240, 520, 270, 600);
        Aufgabe10.crc2.quadraticCurveTo(295, 700, 270, 800);
        Aufgabe10.crc2.quadraticCurveTo(250, 900, 270, 1100);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fillStyle = "green";
        Aufgabe10.crc2.fill();
    }
    Aufgabe10.drawSeaweed = drawSeaweed;
    function drawStones(_width, _hight) {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(1250, 1000);
        Aufgabe10.crc2.rect(1100, 1025, 300, -200);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fillStyle = " #5b5a5a";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(1100, 1000);
        Aufgabe10.crc2.arc(1110, 925, 100, 0, 2 * Math.PI);
        Aufgabe10.crc2.arc(1410, 925, 100, 0, 2 * Math.PI);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fillStyle = " #5b5a5a";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(1050, 1000);
        Aufgabe10.crc2.rect(1150, 1050, 200, -100);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fillStyle = " #727272";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(1150, 1050);
        Aufgabe10.crc2.arc(1155, 1000, 50, 0, 2 * Math.PI);
        Aufgabe10.crc2.arc(1355, 1000, 50, 0, 2 * Math.PI);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fillStyle = " #727272";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(1250, 1000);
        Aufgabe10.crc2.rect(1300, 1025, 150, -100);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fillStyle = " #828282";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(1300, 975);
        Aufgabe10.crc2.arc(1305, 975, 50, 0, 2 * Math.PI);
        Aufgabe10.crc2.arc(1450, 975, 50, 0, 2 * Math.PI);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fillStyle = " #828282";
        Aufgabe10.crc2.fill();
    }
    Aufgabe10.drawStones = drawStones;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=background.js.map