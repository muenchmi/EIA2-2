namespace Abschlussaufgabe {

    window.addEventListener("load", start);
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let foodnumber: number = 1;
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
        canvas.addEventListener("click", startTutorial);
        canvas.addEventListener("touch", startTutorial);

        let image = new Image();

        image.onload = function(): void {
            crc2.drawImage(image, 0, 0);
        };
        image.src = "images/start.png";

    }
    /////////////////////////////////////START SCREEN TUTORIAL/////////////////////////////////////////////////    
    function startTutorial(_event: Event): void {

        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        canvas.width = 1093;
        canvas.height = 756;
        canvas.removeEventListener("click", startTutorial);
        canvas.addEventListener("click", init);
        canvas.addEventListener("touch", init);


        let image = new Image();

        image.onload = function(): void {
            crc2.drawImage(image, 0, 0);
        };
        image.src = "images/tutorial.png";
    }

    //////////////////////////////////////// START GAME///////////////////////////////////////////////////////

    function init(_event: Event): void {
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = 1093;
        canvas.height = 756;
        crc2 = canvas.getContext("2d");
        image.src = "images/Wald.png";
        image.onload = loadBackground;

        createRandomObjects();
        document.addEventListener("keydown", squirrelKeyDownHandler, false);
        document.getElementById("right").addEventListener("click", right, false);
        document.getElementById("left").addEventListener("click", left, false);
        createScoreboard();
        animate();
    }



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
            if (score < 0 || lives == 0) {
                if (score < 0) {
                    score = 0;
                };
                gameOver();
                location.reload();

            }
            else {
                highscore.innerText = " highscore " + score + "\n lives: " + lives;
            }
        }



    }

    function loadBackground(): void {
        crc2.drawImage(image, 0, 0);
    }
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

        if (_event.keyCode == 37) { // left
            keys.push(37)
        }

        if (_event.keyCode == 39) { // right
            keys.push(39)

        }

    }

    ///////////////////////////////Button Steuerung//////////////////////////////////////////////      
    function left(): void {
        keys.push(37)
    }

    function right(): void {
        keys.push(39)



    }









    export function createScoreboard(): void {

        highscore.style.fontSize = "40px";
        document.body.appendChild(highscore);

    }

    function gameOver(): void {
        alert("Game Over \nyour score:" + " " + score);

    }

}