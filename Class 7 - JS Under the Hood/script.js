/* console.log("First");
setTimeout(() => {
    console.log("This executes after 3 seconds.");
}, 3000);
console.log("Last");

let interval = setInterval(() => {
    console.log("Hey!");
}, 2000); // This will execute every 2 seconds forever

document.querySelector("button").addEventListener("click", () => {
    clearInterval(interval); // This will stop interval execution
}) 
*/


/* function first() {
    setTimeout(() => console.log("First thing"), 2000);
}

function second() {
    console.log("Second thing");
}

first();
second(); 
*/

/* function firstFunction(callbackFunc) {
    setTimeout(() => {
        console.log("Some code from first function");
        callbackFunc();
        // secondFunction(); - Using a parameter is cleaner. Don't use specific functions.
    }, 2000);
}

function secondFunction() {
    console.log("Some code from the callback function");
}

firstFunction(secondFunction);
*/

function makeCall(url, callbackPrint) {
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(response => {
            console.log("Success!");
            callbackPrint(response);
        })
}

function printData(data) {
    console.log("Displaying data on the screen...", data);
}

makeCall("https://swapi.dev/api/people/1", printData);