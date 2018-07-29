namespace Abschlussaufgabe {


    export class FallingObject {
        x: number;
        y: number;
        type: string;
        score: number = 0;
//        image: HTMLImageElement = new Image();

        constructor(_x: number, _y: number, _type: string) {
            this.x = _x;
            this.y = _y;
            this.type = _type;

        }

        draw() { };
        move() { };
        update() { };


    }



}