var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    window.addEventListener("load", start);
    let foodnumber = 1;
    Abschlussaufgabe.keys = [];
    let x;
    let y;
    Abschlussaufgabe.score = 0;
    Abschlussaufgabe.lives = 3;
    let imgData;
    let image = new Image();
    let highscore = document.createElement("div");
    Abschlussaufgabe.fallingObjects = [];
    ////////////////////////////////////// START SCREEN//////////////////////////////////////////////////////////
    function start(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        Abschlussaufgabe.crc2 = canvas.getContext("2d");
        canvas.width = 1093;
        canvas.height = 756;
        canvas.addEventListener("click", startTutorial);
        canvas.addEventListener("touch", startTutorial);
        let image = new Image();
        image.onload = function () {
            Abschlussaufgabe.crc2.drawImage(image, 0, 0);
        };
        image.src = "images/start.png";
    }
    /////////////////////////////////////START SCREEN TUTORIAL////////////////////////////////////////////////    
    function startTutorial(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        Abschlussaufgabe.crc2 = canvas.getContext("2d");
        canvas.width = 1093;
        canvas.height = 756;
        canvas.removeEventListener("click", startTutorial);
        canvas.addEventListener("click", init);
        canvas.addEventListener("touch", init);
        let image = new Image();
        image.onload = function () {
            Abschlussaufgabe.crc2.drawImage(image, 0, 0);
        };
        image.src = "images/tutorial.png";
    }
    //////////////////////////////////////// START GAME///////////////////////////////////////////////////////
    function init(_event) {
        Abschlussaufgabe.canvas = document.getElementsByTagName("canvas")[0];
        Abschlussaufgabe.canvas.width = 1093;
        Abschlussaufgabe.canvas.height = 756;
        Abschlussaufgabe.crc2 = Abschlussaufgabe.canvas.getContext("2d");
        image.src = "images/Wald.png";
        image.onload = loadBackground;
        createRandomObjects();
        document.addEventListener("keydown", squirrelKeyDownHandler, false);
        document.getElementById("right").addEventListener("click", right, false);
        document.getElementById("left").addEventListener("click", left, false);
        createScoreboard();
        animate();
    }
    function createRandomObjects() {
        window.setTimeout(createRandomObjects, 2000);
        for (let i = 0; i < foodnumber; i++) {
            x = Math.floor((Math.random() * (Abschlussaufgabe.canvas.width - 10)) + 10); // Random stelle in der das Essen runterkommt
            y = 0;
            //zufällige Objekte + Wahrschinlichkeit unterscheidet sich
            let n = Math.floor(Math.random() * 100);
            switch (true) {
                case (n < 50):
                    let pinecone = new Abschlussaufgabe.Pinecone(x, y);
                    Abschlussaufgabe.fallingObjects.push(pinecone);
                    break;
                case (n < 80):
                    let branch = new Abschlussaufgabe.Branch(x, y);
                    Abschlussaufgabe.fallingObjects.push(branch);
                    break;
                case (n < 90):
                    let leaf = new Abschlussaufgabe.Leaf(x, y);
                    Abschlussaufgabe.fallingObjects.push(leaf);
                    break;
                case (n < 100):
                    let acorn = new Abschlussaufgabe.Acorn(x, y);
                    Abschlussaufgabe.fallingObjects.push(acorn);
                    break;
                default:
                    break;
            }
            if (Abschlussaufgabe.score < 0 || Abschlussaufgabe.lives == 0) {
                if (Abschlussaufgabe.score < 0) {
                    Abschlussaufgabe.score = 0;
                }
                ;
                gameOver();
                location.reload();
            }
            else {
                highscore.innerText = " highscore " + Abschlussaufgabe.score + "\n lives: " + Abschlussaufgabe.lives;
            }
        }
    }
    function loadBackground() {
        Abschlussaufgabe.crc2.drawImage(image, 0, 0);
    }
    function animate() {
        loadBackground();
        x = Abschlussaufgabe.canvas.width / 2;
        y = Abschlussaufgabe.canvas.height;
        let squirrel = new Abschlussaufgabe.Squirrel(x, y);
        squirrel.catch();
        moveObjects();
        drawObjects();
        window.setTimeout(animate, 20);
    }
    function drawObjects() {
        for (let i = 0; i < Abschlussaufgabe.fallingObjects.length; i++) {
            Abschlussaufgabe.fallingObjects[i].draw();
        }
    }
    function moveObjects() {
        for (let i = 0; i < Abschlussaufgabe.fallingObjects.length; i++) {
            Abschlussaufgabe.fallingObjects[i].move();
        }
    }
    ////////////////////////////////Pfeiltasten Steuerung////////////////////////////////////////
    function squirrelKeyDownHandler(_event) {
        if (_event.keyCode == 37) {
            Abschlussaufgabe.keys.push(37);
        }
        if (_event.keyCode == 39) {
            Abschlussaufgabe.keys.push(39);
        }
    }
    ///////////////////////////////Button Steuerung//////////////////////////////////////////////      
    function left() {
        Abschlussaufgabe.keys.push(37);
    }
    function right() {
        Abschlussaufgabe.keys.push(39);
    }
    function createScoreboard() {
        highscore.style.fontSize = "40px";
        document.body.appendChild(highscore);
    }
    Abschlussaufgabe.createScoreboard = createScoreboard;
    function gameOver() {
        alert("Game Over \nyour score:" + " " + Abschlussaufgabe.score);
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=main.js.map