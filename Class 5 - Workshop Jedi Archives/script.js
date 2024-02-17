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
let table = document.getElementById("table");
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

    const navigationContainer = document.getElementById("people-navigation-container");
    navigationContainer.style.display = "block";
    document.getElementById("ship-navigation-container").style.display = "none";

    let totalPagesPeople = Math.ceil(peopleData.count / 10);
    return totalPagesPeople;
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

    const navigationContainer = document.getElementById("ship-navigation-container");
    navigationContainer.style.display = "block";
    document.getElementById("people-navigation-container").style.display = "none";

    let totalPagesShips = Math.ceil(shipData.count / 10);
    return totalPagesShips;
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

    if (currentPage === 10) {
        nextPersonButton.style.display = "none";
    }
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
        th.addEventListener("click", () => {
            let sortKey = header.toLowerCase() === "birth year" ? "birth_year" : header.toLowerCase() === "appearances" ? "films" : header.toLowerCase();
            peopleData.sort((a, b) => a[sortKey] > b[sortKey] ? 1 : -1);
            createTable();
        });
        headerRow.appendChild(th);
    });

    // flag false, toggle ascending descending order

    //     let sorting = false;

    // btnSort.addEventListener("click", function(){
    //     sorting = !sorting;
    //     sorting ? descend() : ascend();
    // });

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

    if (shipPage === 5) {
        nextShipButton.style.display = "none";
    }
}

async function prevShipRequest() {
    if (prevShipPage) {
        await fetchShips(prevShipPage);
    }
    if (shipPage > 1) {
        shipPage--;
        fetchShips;
    }

    if (shipPage === 1) {
        prevShipButton.style.display = "none";
    }
}

// createTable2 = ship data
function createTable2() {
    let tableDiv = document.getElementById("tableDiv");

    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");
    tableDiv.innerHTML = "";

    let headers = ["Name", "Model", "Manufacturer", "Cost", "People Capacity", "Class"];
    let headerRow = document.createElement("tr");

    headers.forEach(header => {
        let th = document.createElement("th");
        th.textContent = header;
        th.addEventListener("click", () => {
            let sortKey;
            switch (header.toLowerCase()) {
                case "cost":
                    sortKey = "cost_in_credits";
                    break;
                case "class":
                    sortKey = "starship_class";
                    break;
                case "people capacity":
                    shipData.sort((a, b) => (parseInt(a.crew) + parseInt(a.passengers) - parseInt(b.crew) + parseInt(b.passengers)));
                    createTable2();
                    break;
                default:
                    sortKey = header.toLowerCase().replace(" ", "_");
            }

            shipData.sort((a, b) => a[sortKey] > b[sortKey] ? 1 : -1);
            createTable2();
        })
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

    table.innerHTML = "";

    searchForm.appendChild(loadingIcon);
    loadingIcon.style.display = "block";

    let searchValue = searchInput.value.toLowerCase();

    // Fetch the matching people
    let response = await fetch(`${base_url_people}?search=${searchValue}`);
    let peopleData = await response.json();
    let filteredPeople = peopleData.results;

    // Fetch the matching ships
    response = await fetch(`${base_url_ship}?search=${searchValue}`);
    let shipData = await response.json();
    let filteredShips = shipData.results;

    createTable3(filteredPeople, filteredShips);

    searchInput.value = "";
    loadingIcon.style.display = "none";
});

// createTable 3 = search functionality table
function createTable3(filteredPeople, filteredShips) {
    table.innerHTML = "";
    tableDiv.innerHTML = "";

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
        tableDiv.appendChild(table);
        document.getElementById("people-navigation-container").style.display = "none";
    })

    filteredShips.forEach(ship => {
        let row = document.createElement("tr");
        headers.forEach(header => {
            let td = document.createElement("td");
            td.textContent = ship[header.toLowerCase()];
            row.appendChild(td);
        })
        table.appendChild(row);
        tableDiv.appendChild(table);
        document.getElementById("ship-navigation-container").style.display = "none";
    })
}

function generateButtonsPeople(maxPages, fetchFunction, containerId) {
    const navigationContainer = document.getElementById(containerId);

    for (let i = 1; i <= maxPages; i++) { // Assuming a maximum of 10 pages for simplicity
        const button = document.createElement("button");
        button.textContent = i;
        button.addEventListener('click', () => fetchFunction(`${base_url_people}?page=${i}`));
        navigationContainer.appendChild(button);
    }
}

generateButtonsPeople(9, fetchPeople, "people-navigation-container");

function generateButtonsShips(maxPages, fetchFunction, containerId) {
    const navigationContainer = document.getElementById(containerId);

    for (let i = 1; i <= maxPages; i++) { // Assuming a maximum of 10 pages for simplicity
        const button = document.createElement("button");
        button.textContent = i;
        button.addEventListener('click', () => fetchFunction(`${base_url_ship}?page=${i}`));
        navigationContainer.appendChild(button);
    }
}

generateButtonsShips(4, fetchShips, "ship-navigation-container");



/* 
    Sorting in the tables - People data done, Ship need to fix Cost and People Capacity
    Loading animation while the application gets the data - done
    Nice error message when a request has been denied ( Ex: unavailable, request limit, no page like that, access denied )
    Add planets table
    Add pagination button for every page (create them dynamically) - done
    Implement search functionality - done, need to fix headers.
    Code refactoring (use async/await, reduce code duplication etc.) - done, need to double-check
    Next/Prev - sync to page

    https://github.com/sedc-codecademy/mkwd12-04-ajs/blob/main/G7/Class05/Workshop-part1/EXTRAFEATURES.md


    https://swapi.dev/api/people/?search=
*/