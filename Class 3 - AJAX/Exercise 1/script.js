let btn = document.getElementById("printData");
let result = document.getElementById("result");

// ========== Bad practice ==========

/*
let globalResponse = null;

btn.addEventListener("click", function () {
    fetch("https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json")
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (response) {
            console.log(response);

            globalResponse = response;

            let resultTitle = result.getElementsByTagName("h2")[0];
            let resultList = result.getElementsByTagName("ul")[0];

            resultTitle.innerText = `${globalResponse.academy} Academy`
            resultList.innerHTML = ""

            for (let student of globalResponse.students) {
                resultList.innerHTML += `<li>${student}</li>`
            }
        })
        .catch(function (error) {
            console.log(error);
        })
});
*/

// ========== Good practice ==========

btn.addEventListener("click", function () {
    fetch("https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            console.log(response);
            printAcademy(result, response.academy);
            printStudents(result, response.students);
        })
        .catch(function (error) {
            console.log(error);
        })
});

function printAcademy(resultElement, academy) {
    let resultTitle = resultElement.getElementsByTagName("h2")[0];
    resultTitle.innerText = `${academy} Academy`
};

function printStudents(resultElement, students) {
    let resultList = resultElement.getElementsByTagName("ul")[0];
    resultList.innerHTML = "";

    for (let student of students) {
        resultList.innerHTML += `<li>${student}</li>`
    }
}

// Use as few global variables as possible
// Create a separation of concern (separate functions instead of logic inside fetch)