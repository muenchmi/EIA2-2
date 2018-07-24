namespace Abschlussaufgabe {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let foodnumber: number = 10;

    export let fallingObjects: FallingObject[] = [];

    function init(_event: Event): void {
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = 1093;
        canvas.height = 756;
        crc2 = canvas.getContext("2d");
        let x: number;
        let y: number;

        let imgData: ImageData;

        let image: HTMLImageElement = new Image();
        image.src = "images/Wald.png";

        image.onload = loadBackground;

        function loadBackground(): void {
            crc2.drawImage(image, 0, 0);
        }

        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        for (let i: number = 0; i < foodnumber; i++) {
            x = Math.floor((Math.random() * (canvas.width / 2 - 350)) + 100);
            y = Math.floor((Math.random() * (canvas.height - 500)) + 50);

            let sf: Food = new Food (x, y);

            fallingObjects.push(sf);
        }
        animate();
        
        function animate(): void {


            crc2.putImageData(imgData, 0, 0);


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





    }
}