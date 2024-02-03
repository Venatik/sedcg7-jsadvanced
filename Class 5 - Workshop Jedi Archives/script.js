let btn = document.getElementById("personPicture");
let btn2 = document.getElementById("shipPicture");
let nextPersonButton = document.getElementById("nextPerson");
let prevPersonButton = document.getElementById("prevPerson");
let nextShipButton = document.getElementById("nextShip");
let prevShipButton = document.getElementById("prevShip");
let currentPage = 1;
let shipPage = 1;

btn.addEventListener("click", function () {
    nextShipButton.style.display = "none";
    prevShipButton.style.display = "none";
    currentPage = 1;
    makePersonRequest();
});

btn2.addEventListener("click", function () {
    nextPersonButton.style.display = "none";
    prevPersonButton.style.display = "none";
    shipPage = 1;
    makeShipRequest();
});

function makePersonRequest() {
    let loadingIcon = document.getElementById("loader");
    let tableDiv = document.getElementById("tableDiv");

    while (tableDiv.firstChild) {
        tableDiv.removeChild(tableDiv.firstChild);
    }

    tableDiv.appendChild(loadingIcon);

    loadingIcon.style.display = "block";
    nextPersonButton.style.display = "block";
    prevPersonButton.style.display = currentPage > 1 ? "block" : "none";

    fetch(`https://swapi.dev/api/people/?page=${currentPage}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error loading data.");
            }
            return response.json();
        })
        .then(data => {
            loadingIcon.style.display = "none";

            createTable(data.results);

        })
        .catch(error => {
            loadingIcon.style.display = "none";

            console.error("Error", error);
        });
}

function nextPersonRequest() {
    currentPage++;
    makePersonRequest();
}

function prevPersonRequest() {
    if (currentPage > 1) {
        currentPage--;
        makePersonRequest();
    }
}

nextPersonButton.addEventListener("click", nextPersonRequest);
prevPersonButton.addEventListener("click", prevPersonRequest);
nextShipButton.addEventListener("click", nextShipRequest);
prevShipButton.addEventListener("click", prevShipRequest);

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
    nextShipButton.style.display = "block";
    prevShipButton.style.display = shipPage > 1 ? "block" : "none";

    fetch(`https://swapi.dev/api/starships/?page=${shipPage}`)
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

function nextShipRequest() {
    shipPage++;
    makeShipRequest();
}

function prevShipRequest() {
    if (shipPage > 1) {
        shipPage--;
        makeShipRequest();
    }
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
        let cost = ship.cost_in_credits;
        if (cost >= 1000000) {
            cost = (cost / 1000000).toFixed(0) + "M";
        }
        costCell.textContent = `${cost} Credits`;
        row.appendChild(costCell);

        let capacityCell = document.createElement("td");
        let crew = isNaN(parseInt(ship.crew.replace(/,/g, ''))) ? 0 : parseInt(ship.crew.replace(/,/g, ''));
        let passengers = isNaN(parseInt(ship.passengers.replace(/,/g, ''))) ? 0 : parseInt(ship.passengers.replace(/,/g, ''));
        let totalCapacity;

        if (crew > 0 && passengers > 0) {
            totalCapacity = crew + passengers;
        } else {
            totalCapacity = crew > 0 ? crew : passengers;
        }

        capacityCell.textContent = `${totalCapacity} total capacity`;
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
    1. Add validation to people capacity - done
    2. Fix up all data as done in: person.gender and ship.passengers - done
    3. Limit ship.cost - done
*/

/* 
    Sorting in the tables
    Loading animation while the application gets the data
    Nice error message when a request has been denied ( Ex: unavailable, request limit, no page like that, access denied )
    Add planets table
    Add pagination button for every page (create them dynamically)
    Implement search functionality
    Code refactoring (use async/await, reduce code duplication etc.)

    https://github.com/sedc-codecademy/mkwd12-04-ajs/blob/main/G7/Class05/Workshop-part1/EXTRAFEATURES.md


    https://swapi.dev/api/people/?search=
*/