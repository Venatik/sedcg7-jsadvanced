// Callback Hell - Asynchronous execution is when multiple things are executed at the same time.
// Callbacks make sure async code executes in the right order
// A huge callback tree is called callback hell

// How to avoid - promises are a great way of dealing with async tasks, they are easy to read and organize

const posts = [
    { title: "Post one", body: "This is post one" },
    { title: "Post two", body: "This is post two" }
];

function getPosts() {
    setTimeout(() => {
        posts.forEach(post => console.log(post.title))
    }, 1000)
}

function addPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000)
}

// addPost({ title: "Post three", body: "This is post three" }, getPosts);
// getPosts();

// ============== PROMISES ==============
console.log("============== PROMISES ==============");

function first(workTime) {
    return new Promise((resolve, reject) => {
        if (workTime >= 5000) {
            reject("This is taking too long. Please try again.");
        }

        setTimeout(() => {
            let person = {
                firstName: "Pane",
                lastName: "Manaskov",
                age: "31"
            }

            resolve(person);
        }, workTime)
    })
}

function second() {
    console.log("Second thing");
}

/* first(2500)
    .then(response => { // resolve = then block
        console.log(response);
        second();
    })
    .catch(error => { // reject = catch block
        console.log(error);
    })
    .finally(() => { // finally resolves regardless of the promise outcome
        console.log("Finally has been invoked.");
    })
*/

// ============== Handling AJAX Calls with jQuery ==============
console.log("============== Handling AJAX Calls with jQuery ==============");

function getDocuments() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json",
            success: response => {
                resolve(JSON.parse(response));
            },
            error: err => {
                reject(err);
            }
        });
    });
}

function showDocuments(documents) {
    documents.forEach(doc => {
        console.log(`${doc.name}.${doc.type} (${doc.size}MB)`);
    })
}

// getDocuments()
//     .then(data => {
//         console.log("We got the documents.");
//         showDocuments(data);
//     })
//     .catch(err => {
//         console.log(err);
//     })

function getImportant(documents) {
    let importantDocuments = documents.filter(doc => doc.important);

    return new Promise((resolve, reject) => {
        if (importantDocuments.length === 0) {
            reject("There are no important documents.");
        }

        setTimeout(() => {
            resolve(importantDocuments);
        }, 3000)
    })
}

// getDocuments()
//     .then(data => {
//         console.log("We got the documents.");
//         // showDocuments(data);
//         return getImportant(data);
//     })
//     .then(data => {
//         showDocuments(data);
//     })
//     .catch(err => console.log(err));

// ============== Using Fetch ==============
console.log("============== Using Fetch ==============");

function getDataFetch() {
    fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json")
        .then(response => {
            return response.json();
        })
        .then(response => {
            // console.log(response);
            // showDocuments(response);
            return getImportant(response);
        })
        .then(response => {
            console.log(response);
            showDocuments(response);
        })
        .catch(err => console.log(err))
        .finally(() => console.log("This is DONE."));
}

// getDataFetch();

// ============== Using async/await ==============
console.log("============== Using async/await ==============");

async function getDataAsync() {
    let response = await fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json"); // no chaining with .then
    let data = await response.json();
    // console.log(data);
    // showDocuments(data);
    let importantData = await getImportant(data);
    // console.log(importantData);
    showDocuments(importantData);
}

getDataAsync();