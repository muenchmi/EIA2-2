namespace Aufgabe4 {

    export interface Deck {
        name: string;
        content: string[];
        length: string;
        color: string;
    }

    export interface createCards {
        [key: string]: Deck
    };

    export let arrayCards: createCards = {
        "ABC": {
            name: "ABC",
            content: ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F", "G", "G", "H", "H", "I", "I", "J", "J", "K", "K", "L", "L", "M", "M", "N", "N", "O", "O", "P", "P", "Q", "Q", "R", "R", "S", "S", "T", "T", "U", "U", "V", "V", "W", "W", "X", "X", "Y", "Y", "Z", "Z"],
            length: "25",
            color: ""
        },

        "numbers": {
            name: "Zahlen",
            content: ["1", "1", " 2", "2", "3", "3", "4", "4", "5", "5", "6", "6", "7", "7", "8", "8", "9", "9"],
            length: "9",
            color: ""
        },

        "special": {
            name: "Sonderzeichen",
            content: [".", ".", ",", ",", ";", ";", ":", ":", "-", "-", "?", "?", "!", "!", "*", "*", "+", "+"],
            length: "9",
            color: ""
        }



    };


//
//    export let ABC: Deck;
//    ABC = {
//        name: "ABC",
//        content: ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F", "G", "G", "H", "H", "I", "I", "J", "J", "K", "K", "L", "L", "M", "M", "N", "N", "O", "O", "P", "P", "Q", "Q", "R", "R", "S", "S", "T", "T", "U", "U", "V", "V", "W", "W", "X", "X", "Y", "Y", "Z", "Z"],
//        length: 25,
//        color: ""
//    };
//
//    export let arrayNumbers: Deck;
//    arrayNumbers = {
//        name: "Zahlen",
//        content: ["1", "1", " 2", "2", "3", "3", "4", "4", "5", "5", "6", "6", "7", "7", "8", "8", "9", "9"],
//        length: 9,
//        color: ""
//    };
//
//    export let arraySpecialcharacters: Deck;
//    arraySpecialcharacters = {
//        name: "Sonderzeichen",
//        content: [".", ".", ",", ",", ";", ";", ":", ":", "-", "-", "?", "?", "!", "!", "*", "*", "+", "+"],
//        length: 9,
//        color: ""
//    };





}
