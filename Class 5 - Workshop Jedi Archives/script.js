let btn = document.getElementById("personPicture");
let btn2 = document.getElementById("shipPicture");
let previos = document.getElementById("prevButton");
let next = document.getElementById("nextButton");

btn.addEventListener("click", makePersonRequest);
btn2.addEventListener("click", makeShipRequest);

function makePersonRequest() {
    let loadingIcon = document.getElementById("loader");
    let tableDiv = document.getElementById("tableDiv");

    while (tableDiv.firstChild) {
        tableDiv.removeChild(tableDiv.firstChild);
    }

    tableDiv.appendChild(loadingIcon);

    loadingIcon.style.display = "block";

    fetch("https://swapi.dev/api/people/?page=1")
        .then(response => {
            if (!response.ok) {
                throw new Error("Error loading data.");
            }
            return response.json();
        })
        .then(data => {
            loadingIcon.style.display = "none";

            createTable(data.results);

            nextPersonRequest();
        })
        .catch(error => {
            loadingIcon.style.display = "none";

            console.error("Error", error);
        });
}

function createTable(people) {
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");

    let headers = ["Name", "Height", "Mass", "Gender", "Birth Year", "Appearances"];
    let headerRow = document.createElement("tr");

    headers.forEach(header => {
        let th = document.createElement("th");
        th.textContent = header;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    let rowCount = Math.min(people.length, 10);
    for (let i = 0; i < rowCount; i++) {
        let person = people[i];
        let row = document.createElement("tr");

        let nameCell = document.createElement("td");
        nameCell.textContent = person.name;
        row.appendChild(nameCell);

        let heightCell = document.createElement("td");
        heightCell.textContent = person.height;
        row.appendChild(heightCell);

        let massCell = document.createElement("td");
        massCell.textContent = person.mass;
        row.appendChild(massCell);

        let genderCell = document.createElement("td");
        if (person.gender === "n/a") {
            person.gender = "Unknown";
        }
        if (person.gender === "male") {
            person.gender = "Male";
        }
        if (person.gender === "female") {
            person.gender = "Female";
        }
        genderCell.textContent = person.gender;
        row.appendChild(genderCell);

        let birthYearCell = document.createElement("td");
        birthYearCell.textContent = person.birth_year;
        row.appendChild(birthYearCell);

        let appearancesCell = document.createElement("td");
        appearancesCell.textContent = person.films.length;
        row.appendChild(appearancesCell);

        tbody.appendChild(row);
    }

    table.appendChild(tbody);
    document.getElementById("tableDiv").appendChild(table);
}

function makeShipRequest() {
    let loadingIcon = document.getElementById("loader");
    let tableDiv = document.getElementById("tableDiv");

    while (tableDiv.firstChild) {
        tableDiv.removeChild(tableDiv.firstChild);
    }

    tableDiv.appendChild(loadingIcon);

    loadingIcon.style.display = "block";

    fetch("https://swapi.dev/api/starships/?page=1")
        .then(response => {
            if (!response.ok) {
                throw new Error("Error loading data.");
            }
            return response.json();
        })
        .then(data => {
            loadingIcon.style.display = "none";

            createTable2(data.results);
        })
        .catch(error => {
            loadingIcon.style.display = "none";

            console.error("Error", error);
        });
}

function createTable2(ships) {
    let tableDiv = document.getElementById("tableDiv");

    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");

    let headers = ["Name", "Model", "Manufacturer", "Cost", "People Capacity", "Class"];
    let headerRow = document.createElement("tr");

    headers.forEach(header => {
        let th = document.createElement("th");
        th.textContent = header;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    let rowCount = Math.min(ships.length, 10);
    for (let i = 0; i < rowCount; i++) {
        let ship = ships[i];
        let row = document.createElement("tr");

        let nameCell = document.createElement("td");
        nameCell.textContent = ship.name;
        row.appendChild(nameCell);

        let modelCell = document.createElement("td");
        modelCell.textContent = ship.model;
        row.appendChild(modelCell);

        let manufacturerCell = document.createElement("td");
        manufacturerCell.textContent = ship.manufacturer;
        row.appendChild(manufacturerCell);

        let costCell = document.createElement("td");
        costCell.textContent = ship.cost_in_credits;
        row.appendChild(costCell);

        let capacityCell = document.createElement("td");
        if (ship.passengers === "n/a") {
            ship.passengers = "Unknown";
        }
        capacityCell.textContent = `${ship.crew} crew and ${ship.passengers} passengers`;
        row.appendChild(capacityCell);

        let classCell = document.createElement("td");
        classCell.textContent = ship.starship_class;
        row.appendChild(classCell);

        tbody.appendChild(row);
    }

    table.appendChild(tbody);
    tableDiv.appendChild(table);
}


/* To do list:
    1. Add validation to people capacity
    2. Add logic for previous/next buttons (currently display: none)
    3. Fix up all data as done in: person.gender and ship.passengers
    4. Limit ship.cost
*/

/*
Pagination:
Counter to keep track of page
Next increases count

Maybe reuse function when we originally fetch data. Pass url parameter to the button.
Write function to display next and fetch new set of data.
*/

// function nextPersonRequest() {
//     let loadingIcon = document.getElementById("loader");
//     let next = document.getElementById("nextButton");
//     let tableDiv = document.getElementById("tableDiv");

//     while (tableDiv.firstChild) {
//         tableDiv.removeChild(tableDiv.firstChild);
//     }

//     tableDiv.appendChild(loadingIcon);

//     loadingIcon.style.display = "block";
//     next.style.display = "block";

//     fetch("https://swapi.dev/api/people/?page=2")
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error("Error loading data.");
//             }
//             return response.json();
//         })
//         .then(data => {
//             loadingIcon.style.display = "none";

//             createTable(data.results);
//         })
//         .catch(error => {
//             loadingIcon.style.display = "none";

//             console.error("Error", error);
//         });
// }