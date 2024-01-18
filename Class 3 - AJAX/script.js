// JSON Example

let myJson = `{
    "trainer": "Trainer Name",
    "assistant": "Assistant Name",
    "students": [
        "Bob",
        "Sam",
        "Stefan",
        "Chris",
        "Jill"
    ],
    "academy": "Code"
}`; // last element (whether array or property) can't have a comma. Line 11 and 13 for reference.

console.log(typeof (myJson));
console.log(myJson);

let jsObject = JSON.parse(myJson);
console.log(jsObject);
console.log(jsObject.students[2]);

let newJson = JSON.stringify(jsObject);
console.log(newJson);

// Plain Javascript XML/HTTP request
let xhrButton = document.getElementById("sendRequest");

xhrButton.addEventListener("click", function () {
    // Step 1
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        console.log("Request sent.");
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log(xhr.status);
            console.log("Request is successful.")
            console.log(xhr.response);
            let objectResponse = JSON.parse(xhr.response);
            console.log(objectResponse);
        } else {
            console.log(xhr.responseText);
        }
    };
    // Step 2
    xhr.open("GET", "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json");
    // Step 3
    xhr.send();
});

// Fetch request
let fetchRequestBtn = document.getElementById("fetchRequestBtn");

fetchRequestBtn.addEventListener("click", function () {
    fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json")
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (parsedResult) {
            console.log(parsedResult);
            let students = parsedResult.students;
            console.log(students);
        })
        .catch(function (error) {
            console.log(`The request has failed!, ${error.status}`);
        })
});

// Fetch request Astronauts
let astroBtn = document.getElementById("fetchAstronauts");

astroBtn.addEventListener("click", function () {
    fetch("http://api.open-notify.org/astros.json")
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (parsedResult) {
            console.log(parsedResult);
            let astronauts = parsedResult.people;
            console.log(astronauts);

            let ul = document.getElementById("astros");
            ul.innerHTML = "";

            let numberLi = document.createElement("li");
            numberLi.textContent = `Current number of astronauts: ${parsedResult.number}`;
            ul.appendChild(numberLi);

            let lineBreak = document.createElement("br");
            ul.appendChild(lineBreak);

            for (let astronaut of astronauts) {
                let li = document.createElement("li");
                li.textContent = `${astronaut.name} - ${astronaut.craft}`;
                ul.appendChild(li);
            }
        })
        .catch(function (error) {
            console.log(`The request has failed!, ${error.status}`);
        });
});