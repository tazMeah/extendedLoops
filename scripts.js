"use strict";

/* ----- INSTRUCTIONS -----

Extended Challenge / Second Exercise:
Given any string, use a loop to add padding (extra spaces) to the front to make the string ten characters long. For example, given the string “planet”, log “    planet” (add four spaces), and for the string “headlamp”, log “  headlamp” (add two spaces).

*/



/* WHILE */
// while it's less than 10 characters long, put a space in front of it.
{
    /* our example words */
    let example1 = "planet";
    let example2 = "headlamp";

    while (example1.length < 10) {
        example1 = " " + example1; // add a space before it.
    }
    console.log("WHILE loop:" + example1); // <-- this is the answer here.
    console.log("%c")

    while (example2.length < 10) {
        example2 = " " + example2; // add a space before it.
    }
    console.log("WHILE loop:" + example2); // <-- this is the answer here.
}


/* FOR */
// for the difference in length from 10 to the word's length, add a space before
{
    /* our example words */
    let example1 = "planet";
    let example2 = "headlamp";

    let differenceInLength1 = 10 - example1.length; // 4
    let differenceInLength2 = 10 - example2.length; // 2

    for (let i = 0; i < differenceInLength1; i++) {
        example1 = " " + example1;
    }
    console.log("FOR loop:" + example1);

    for (let i = 0; i < differenceInLength2; i++) {
        example2 = " " + example2;
    }
    console.log("FOR loop:" + example2);
}