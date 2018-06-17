namespace Aufgabe9 {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let bubblenumber: number = 8;
    let fishnumber: number = 7;

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


        //      RANDOM BUBBLE
        for (let i: number = 0; i < bubblenumber; i++) {
            let randomBubbles: number = Math.floor((Math.random() * 2) + 0);
            let x: number = Math.floor((Math.random() * (canvas.width / 2 - 350)) + 100);
            let y: number = Math.floor((Math.random() * (canvas.height - 500)) + 50);
            switch (randomBubbles) {
                case 0:
                    drawsmallBubble(x, y);
                    break;
                case 1:
                    drawBubble(x, y);
                    break;
            }
        }

        //RANDOM FISH
        for (let i: number = 0; i < fishnumber; i++) {
            let randomFishs: number = Math.floor((Math.random() * 2) + 0);
            let x: number = Math.floor((Math.random() * (canvas.width - 400)) + 400);
            let y: number = Math.floor((Math.random() * (canvas.height - 250)) + 50);
            switch (randomFishs) {
                case 0:
                    drawFishOne(x, y);
                    break;
                case 1:
                    drawFishTwo(x, y);
                    break;
            }
        }



    }
}