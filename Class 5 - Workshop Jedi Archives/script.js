let btn = document.getElementById("personPicture");
let btn2 = document.getElementById("shipPicture");
let loadingIcon = document.getElementById("loader");
let nextPersonButton = document.getElementById("nextPerson");
let prevPersonButton = document.getElementById("prevPerson");
let nextShipButton = document.getElementById("nextShip");
let prevShipButton = document.getElementById("prevShip");
let currentPage = 1;
let shipPage = 1;
let peopleData = null;
let nextPeoplePage = null;
let prevPeoplePage = null;
let nextShipPage = null;
let prevShipPage = null;
let shipData = null;
let planetData = null;
const base_url_people = "https://swapi.dev/api/people/";
const base_url_ship = "https://swapi.dev/api/starships/"

btn.addEventListener("click", function () {
    nextShipButton.style.display = "none";
    prevShipButton.style.display = "none";
    currentPage = 1;
    fetchPeople();
});

btn2.addEventListener("click", function () {
    nextPersonButton.style.display = "none";
    prevPersonButton.style.display = "none";
    shipPage = 1;
    fetchShips();
});

async function fetchPeople(url = `${base_url_people}?page=${currentPage}`) {
    let tableDiv = document.getElementById("tableDiv");
    tableDiv.innerHTML = "";

    tableDiv.appendChild(loadingIcon);
    loadingIcon.style.display = "block";

    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error loading data. Please try again.");
        }
        let data = await response.json();
        peopleData = data.results;
        nextPeoplePage = data.next;
        prevPeoplePage = data.previous;

        nextPersonButton.style.display = "block";
        if (currentPage > 1) {
            prevPersonButton.style.display = "block";
        } else {
            prevPersonButton.style.display = "none";
        }

        createTable();
    } catch (error) {
        console.log(error);
    } finally {
        loadingIcon.style.display = "none";
    }
}


async function fetchShips(url = `${base_url_ship}?page=${shipPage}`) {
    let tableDiv = document.getElementById("tableDiv");
    tableDiv.innerHTML = "";

    tableDiv.appendChild(loadingIcon);
    loadingIcon.style.display = "block";

    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error loading data. Please try again.");
        }
        let data = await response.json();
        shipData = data.results;
        nextShipPage = data.next;
        prevShipPage = data.previous;

        nextShipButton.style.display = "block";
        if (shipPage > 1) {
            prevShipButton.style.display = "block";
        } else {
            prevShipButton.style.display = "none";
        }

        createTable2();
    } catch (error) {
        console.log(error);
    } finally {
        loadingIcon.style.display = "none";
    }
}

function displayLoadingIcon() {
    document.getElementById("loader").style.display = "block";
}

function hideLoadingIcon() {
    document.getElementById("loader").style.display = "none";
}

async function nextPersonRequest() {
    if (nextPeoplePage) {
        await fetchPeople(nextPeoplePage);
    }
    currentPage++;
    fetchPeople();
}

async function prevPersonRequest() {
    if (prevPeoplePage) {
        await fetchPeople(prevPeoplePage);
    }
    if (currentPage > 1) {
        currentPage--;
        fetchPeople();
    }
}

nextPersonButton.addEventListener("click", nextPersonRequest);
prevPersonButton.addEventListener("click", prevPersonRequest);
nextShipButton.addEventListener("click", nextShipRequest);
prevShipButton.addEventListener("click", prevShipRequest);

// createTable = people data
function createTable() {
    let table = document.getElementById("table") || document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");
    let tableDiv = document.getElementById("tableDiv");
    tableDiv.innerHTML = "";

    let headers = ["Name", "Height", "Mass", "Gender", "Birth Year", "Appearances"];
    let headerRow = document.createElement("tr");

    headers.forEach(header => {
        let th = document.createElement("th");
        th.textContent = header;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    peopleData.forEach(person => {
        if (person.gender === "n/a") {
            person.gender = "Unknown";
        }
        if (person.gender === "male") {
            person.gender = "Male";
        }
        if (person.gender === "female") {
            person.gender = "Female";
        }
        if (person.gender === "hermaphrodite") {
            person.gender = "Hermaphrodite"
        }

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
        genderCell.textContent = person.gender === "n/a" ? "Unknown" : person.gender;

        row.appendChild(genderCell);

        let birthYearCell = document.createElement("td");
        birthYearCell.textContent = person.birth_year;
        row.appendChild(birthYearCell);

        let appearancesCell = document.createElement("td");
        appearancesCell.textContent = person.films.length;
        row.appendChild(appearancesCell);

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    tableDiv.appendChild(table);
}

async function nextShipRequest() {
    if (nextShipPage) {
        await fetchShips(nextShipPage);
    }
    shipPage++;
    fetchShips();
}

async function prevShipRequest() {
    if (prevShipPage) {
        await fetchShips(prevShipPage);
    }
    if (shipPage > 1) {
        shipPage--;
        fetchShips;
    }
}

// createTable2 = ship data
function createTable2() {
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

    shipData.forEach(ship => {
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

        let peopleCapacityCell = document.createElement("td");
        let crew = isNaN(parseInt(ship.crew.replace(/,/g, ''))) ? 0 : parseInt(ship.crew.replace(/,/g, ''));
        let passengers = isNaN(parseInt(ship.passengers.replace(/,/g, ''))) ? 0 : parseInt(ship.passengers.replace(/,/g, ''));
        let totalCapacity;

        if (crew > 0 && passengers > 0) {
            totalCapacity = crew + passengers;
        } else {
            totalCapacity = crew > 0 ? crew : passengers;
        }

        peopleCapacityCell.textContent = `${totalCapacity} total capacity`;
        row.appendChild(peopleCapacityCell);

        let classCell = document.createElement("td");
        classCell.textContent = ship.starship_class;
        row.appendChild(classCell);

        table.appendChild(row);
    });

    table.appendChild(tbody);
    tableDiv.appendChild(table);
}

let searchForm = document.getElementById("searchForm");
let searchInput = document.getElementById("search");

searchForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    searchForm.appendChild(loadingIcon);
    loadingIcon.style.display = "block";

    let searchValue = searchInput.value.toLowerCase();

    let peopleData = [];
    let nextPage = `${base_url_people}`;
    while (nextPage) {
        let response = await fetch(nextPage);
        let data = await response.json();
        peopleData.push(...data.results);
        nextPage = data.next;
    }

    let shipData = [];
    nextPage = `${base_url_ship}`;
    while (nextPage) {
        let response = await fetch(nextPage);
        let data = await response.json();
        shipData.push(...data.results);
        nextPage = data.next;
    }

    let filteredPeople = peopleData.filter(person => person.name.toLowerCase().includes(searchValue));
    let filteredShips = shipData.filter(ship => ship.name.toLowerCase().includes(searchValue));

    createTable3(filteredPeople, filteredShips);

    searchInput.value = "";
    loadingIcon.style.display = "none";
});

window.onload = function () {
    searchInput.value = "";
}

// createTable 3 = search functionality table
function createTable3(filteredPeople, filteredShips) {
    table.innerHTML = "";

    let headers;
    if (filteredPeople.length > 0) {
        headers = ["Name", "Height", "Mass", "Gender"];
    } else if (filteredShips.length > 0) {
        headers = ["Name", "Model", "Manufacturer"];
    }

    let headerRow = document.createElement("tr");
    headers.forEach(header => {
        let th = document.createElement("th");
        th.textContent = header;
        th.style.color = "yellow";
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    filteredPeople.forEach(person => {
        let row = document.createElement("tr");
        headers.forEach(header => {
            let td = document.createElement("td");
            td.textContent = person[header.toLowerCase()];
            row.appendChild(td);
        })
        table.appendChild(row);
    })

    filteredShips.forEach(ship => {
        let row = document.createElement("tr");
        headers.forEach(header => {
            let td = document.createElement("td");
            td.textContent = ship[header.toLowerCase()];
            row.appendChild(td);
        })
        table.appendChild(row);
    })

}

/* To do list:
    1. Add validation to people capacity - done
    2. Fix up all data as done in: person.gender and ship.passengers - done
    3. Limit ship.cost - done
*/

/* 
    Sorting in the tables
    Loading animation while the application gets the data - done
    Nice error message when a request has been denied ( Ex: unavailable, request limit, no page like that, access denied )
    Add planets table
    Add pagination button for every page (create them dynamically)
    Implement search functionality - done, need to fix search while data is displayed.
    Code refactoring (use async/await, reduce code duplication etc.) - done, need to double-check

    https://github.com/sedc-codecademy/mkwd12-04-ajs/blob/main/G7/Class05/Workshop-part1/EXTRAFEATURES.md


    https://swapi.dev/api/people/?search=
*/