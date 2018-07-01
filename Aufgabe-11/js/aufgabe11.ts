namespace Aufgabe11 {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let bubblenumber: number = 8;
    let fishnumber: number = 7;

    let imgData: ImageData;

    let movingObjects: MovingObjects[] = [];
    //    let fishOne: FishOne[] = [];
    //    let fishTwo: FishTwo[] = [];
    //    let bigBubbles: BigBubble[] = [];
    //    let smallBubbles: SmallBubble[] = [];

    function init(_event: Event): void {
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = 1500;
        canvas.height = 1100;
        crc2 = canvas.getContext("2d");
        let x: number;
        let y: number;


        drawWater(canvas.width, canvas.height);
        drawSeaweed(canvas.width, canvas.height);
        drawSand(canvas.width, canvas.height);
        drawStones(canvas.width, canvas.height);
        drawSeashell(canvas.width, canvas.height);

        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        for (let i: number = 0; i < bubblenumber; i++) {

            x = Math.floor((Math.random() * (canvas.width / 2 - 350)) + 100);
            y = Math.floor((Math.random() * (canvas.height - 500)) + 50);
            let bb: BigBubble = new BigBubble(x, y);

            movingObjects.push(bb);
        }

        for (let i: number = 0; i < bubblenumber; i++) {
            x = Math.floor((Math.random() * (canvas.width / 2 - 350)) + 100);
            y = Math.floor((Math.random() * (canvas.height - 500)) + 50);

            let sb: SmallBubble = new SmallBubble(x, y);

            movingObjects.push(sb);
        }
        for (let i: number = 0; i < fishnumber; i++) {
            x = (Math.random() * (900 - 50)) + 50;
            y = (Math.random() * (600 - 50)) + 50;
            let fishone: FishOne = new FishOne(x, y);


            movingObjects.push(fishone);
        }

        for (let i: number = 0; i < fishnumber; i++) {

            x = Math.floor((Math.random() * (canvas.width - 400)) + 400);
            y = Math.floor((Math.random() * (canvas.height - 250)) + 50);
            let fishtwo: FishTwo = new FishTwo(x, y);

            movingObjects.push(fishtwo);
        }
        
        canvas.addEventListener("click", foodEvent);
        animate();

        function animate(): void {


            crc2.putImageData(imgData, 0, 0);


            moveObjects();
            drawObjects();

            window.setTimeout(animate, 20);
        }

        function drawObjects(): void {
            for (let i: number = 0; i < movingObjects.length; i++) {

                movingObjects[i].draw();
            }
        }

        function moveObjects(): void {
            for (let i: number = 0; i < movingObjects.length; i++) {
                movingObjects[i].move();
            }
        }
        
        function foodEvent(_event: MouseEvent): void {
        let foodx: number = _event.pageX;
        let foody: number = _event.pageY;

        let foodcor: Food = new Food(foodx, foody);
        
        movingObjects.push(foodcor);
    }


    }
}