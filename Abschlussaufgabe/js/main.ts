namespace Abschlussaufgabe {

    window.addEventListener("load", start);
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let foodnumber: number = 1;         // Anzahl der Gegenstände die in einer Reihe runterfallen sollen
    export let keys: number[] = [];
    let x: number;
    let y: number;
    export let score: number = 0;
    export let lives: number = 3;
    let imgData: ImageData;
    let image: HTMLImageElement = new Image();

    let highscore: HTMLDivElement = document.createElement("div");

    export let fallingObjects: FallingObject[] = [];
    export let squirrel: Squirrel;

    ////////////////////////////////////// START SCREEN//////////////////////////////////////////////////////////

    function start(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        canvas.width = 1093;
        canvas.height = 756;
        canvas.addEventListener("click", startTutorial);   // durch klick oder touch auf den Canvas kommt man zum Tutorial
        canvas.addEventListener("touch", startTutorial);

        image = new Image();

        image.onload = loadStartpic;       // zeichnet das Startbild 

        image.src = "images/start.png";

    }
    /////////////////////////////////////START SCREEN TUTORIAL/////////////////////////////////////////////////    
    function startTutorial(_event: Event): void {

        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        canvas.width = 1093;
        canvas.height = 756;
        canvas.removeEventListener("click", startTutorial); //entfernt die alten Events
        canvas.removeEventListener("touch", startTutorial);
        canvas.addEventListener("click", init);             //ruft init auf
        canvas.addEventListener("touch", init);

        image = new Image();

        image.onload = loadTutorial;                    //zeichnet das Tutorial

        image.src = "images/tutorial2.png";
    }

    //////////////////////////////////////// START GAME///////////////////////////////////////////////////////

    function init(_event: Event): void {
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = 1093;
        canvas.height = 756;
        crc2 = canvas.getContext("2d");
        canvas.removeEventListener("click", init);
        canvas.removeEventListener("touch", init);
        image.src = "images/Wald.png";
        image.onload = loadBackground;              // zeichnet den Hintergrund

        createRandomObjects();
        document.addEventListener("keydown", squirrelKeyDownHandler, false);
        document.getElementById("right").addEventListener("click", right, false);
        document.getElementById("left").addEventListener("click", left, false);
        createScoreboard();
        animate();
    }


    ///////////////////////////////////////FUNCTIONS////////////////////////////////////////////////////////////

    function createRandomObjects(): void {
        window.setTimeout(createRandomObjects, 2000);
        for (let i: number = 0; i < foodnumber; i++) {

            x = Math.floor((Math.random() * (canvas.width - 10)) + 10); // Random stelle in der das Essen runterkommt
            y = 0;

            //zufällige Objekte + Wahrschinlichkeit unterscheidet sich 
            let n: number = Math.floor(Math.random() * 100);
            switch (true) {
                case (n < 50):
                    let pinecone: Pinecone = new Pinecone(x, y);
                    fallingObjects.push(pinecone);
                    break;
                case (n < 80):
                    let branch: Branch = new Branch(x, y);
                    fallingObjects.push(branch);
                    break;
                case (n < 90):
                    let leaf: Leaf = new Leaf(x, y);
                    fallingObjects.push(leaf);
                    break;
                case (n < 100):
                    let acorn: Acorn = new Acorn(x, y);
                    fallingObjects.push(acorn);
                    break;
                default:
                    break;
            }

            // beendet das Spiel wenn die Leben bei null landen oder der score kleiner null ist falls nicht wird der Spielstand angezeigt
            if (score < 0 || lives == 0) {
                if (score < 0) {
                    score = 0;
                }
                gameOver();
                location.reload();

            }
            else {
                highscore.innerText = " Highscore: " + score + "\n Lives: " + lives;
            }
        }
    }
    ///////////////////HINTERGRUNDFUNKTIONEN////////////////////////////////////////
    function loadStartpic(): void {
        crc2.drawImage(image, 0, 0);
    }

    function loadTutorial(): void {
        crc2.drawImage(image, 0, 0);
    }

    function loadBackground(): void {
        crc2.drawImage(image, 0, 0);
    }


    ////////////////////ANIMATION///////////////////////////////////////////////////////////
    function animate(): void {


        loadBackground();
        x = canvas.width / 2;
        y = canvas.height;
        let squirrel: Squirrel = new Squirrel(x, y);
        squirrel.catch();
        moveObjects();
        drawObjects();
        window.setTimeout(animate, 20);

    }

    function drawObjects(): void {

        for (let i: number = 0; i < fallingObjects.length; i++) {

            fallingObjects[i].draw();
        }
    }

    function moveObjects(): void {
        for (let i: number = 0; i < fallingObjects.length; i++) {
            fallingObjects[i].move();
        }
    }



    ////////////////////////////////Pfeiltasten Steuerung////////////////////////////////////////
    function squirrelKeyDownHandler(_event: KeyboardEvent): void {

        if (_event.keyCode == 37) { //left  37 = keyvalue
            keys.push(37);
        }

        if (_event.keyCode == 39) { // right 39 = keyvalue
            keys.push(39);

        }

    }

    ///////////////////////////////Button Steuerung//////////////////////////////////////////////      
    function left(): void {
        keys.push(1);
    }

    function right(): void {
        keys.push(2);



    }

////////////////////////////////////TEXT AUSGABEN//////////////////////////////////////////////////

    export function createScoreboard(): void {

        highscore.style.fontSize = "40px";
        document.body.appendChild(highscore);

    }

    function gameOver(): void {
        alert("GAME OVER \nyour highscore:" + " " + score);

    }

}