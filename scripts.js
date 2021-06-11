"use strict";

/* ----- INSTRUCTIONS -----

Extended Challenge / Second Exercise:
Given any string, use a loop to add padding (extra spaces) to the front to make the string ten characters long. For example, given the string “planet”, log “    planet” (add four spaces), and for the string “headlamp”, log “  headlamp” (add two spaces).

*/

/* version 1 - basic */

let example1 = "planet";
let example2 = "headlamp";

// using a "while" loop

while(example1.length < 10) {
    example1 = " " + example1; // add a space before it.
    console.log(example1); // so you can see it happening.
}


while(example2.length < 10) {
    example2 = " " + example2; // add a space before it.
    console.log(example2); // so you can see it happening.
}