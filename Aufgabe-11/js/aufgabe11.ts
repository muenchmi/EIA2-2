namespace Aufgabe11 {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let bubblenumber: number = 8;
    let fishnumber: number = 7;

    let imgData: ImageData;

    let fishOne: FishOne[] = [];
    let fishTwo: FishTwo[] = [];
    let bigBubbles: BigBubble[] = [];
    let smallBubbles: SmallBubble[] = [];

    function init(_event: Event): void {
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = 1500;
        canvas.height = 1100;
        crc2 = canvas.getContext("2d");

        drawWater(canvas.width, canvas.height);
        drawSeaweed(canvas.width, canvas.height);
        drawSand(canvas.width, canvas.height);
        drawStones(canvas.width, canvas.height);
        drawSeashell(canvas.width, canvas.height);

        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        for (let i: number = 0; i < bubblenumber; i++) {
            let bb: BigBubble = new BigBubble();
            bb.x = Math.floor((Math.random() * (canvas.width / 2 - 350)) + 100);
            bb.y = Math.floor((Math.random() * (canvas.height - 500)) + 50);


            bigBubbles.push(bb);
        }

        for (let i: number = 0; i < bubblenumber; i++) {
            let sb: SmallBubble = new SmallBubble();
            sb.x = Math.floor((Math.random() * (canvas.width / 2 - 350)) + 100);
            sb.y = Math.floor((Math.random() * (canvas.height - 500)) + 50);

            smallBubbles.push(sb);
        }
        for (let i: number = 0; i < fishnumber; i++) {
            let fishone: FishOne = new FishOne();
            fishone.x = (Math.random() * (900 - 50)) + 50;
            fishone.y = (Math.random() * (600 - 50)) + 50;



            fishOne.push(fishone);
        }

        for (let i: number = 0; i < fishnumber; i++) {
            let fishtwo: FishTwo = new FishTwo();

            fishtwo.x = Math.floor((Math.random() * (canvas.width - 400)) + 400);
            fishtwo.y = Math.floor((Math.random() * (canvas.height - 250)) + 50);


            fishTwo.push(fishtwo);
        }

        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height); // Speichern der Landschaft

        animate();

        function animate(): void {


            crc2.putImageData(imgData, 0, 0);

            moveBigBubbles();
            moveSmallBubbles();
            moveBigFish();
            moveSmallFish();
            drawSmallBubbles();
            drawBigBubbles();
            drawFishOne();
            drawFishTwo();

            window.setTimeout(animate, 20);
        }

        function moveBigBubbles(): void {
            for (let i: number = 0; i < bigBubbles.length; i++) {
                bigBubbles[i].move();
            }
        }

        function drawBigBubbles(): void {
            for (let i: number = 0; i < bigBubbles.length; i++)
                bigBubbles[i].drawBigBubble();
        }

        function moveSmallBubbles(): void {
            for (let i: number = 0; i < smallBubbles.length; i++) {
                smallBubbles[i].move();
            }
        }

        function drawSmallBubbles(): void {
            for (let i: number = 0; i < smallBubbles.length; i++)
                smallBubbles[i].drawSmallBubble();
        }

        function moveBigFish(): void {
            for (let i: number = 0; i < fishOne.length; i++) {
                fishOne[i].move();
            }
        }

        function drawFishOne(): void {
            for (let i: number = 0; i < fishOne.length; i++)
                fishOne[i].drawFishOne();
        }

        function moveSmallFish(): void {
            for (let i: number = 0; i < fishTwo.length; i++) {
                fishTwo[i].move();
            }
        }

        function drawFishTwo(): void {
            for (let i: number = 0; i < fishTwo.length; i++)
                fishTwo[i].drawFishTwo();
        }




    }
}