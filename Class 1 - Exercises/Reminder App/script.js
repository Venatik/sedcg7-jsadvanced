function createReminder(title, priority, color, description) {
    return {
        title: title,
        priority: priority,
        color: color,
        description: description
    };
}

let reminders = [];
let addReminder = document.getElementById("addReminder");
let showReminder = document.getElementById("showReminders");

addReminder.addEventListener("click", function () {
    let title = document.getElementById("title").value;
    let priority = document.getElementById("priority").value;
    let color = document.getElementById("colorPick").value;
    let description = document.getElementById("description").value;

    let reminder = createReminder(title, priority, color, description);
    reminders.push(reminder);

    console.log(reminder);

    document.getElementById("title").value = "";
    document.getElementById("priority").value = "";
    document.getElementById("colorPick").value = "";
    document.getElementById("description").value = "";
});

showReminder.addEventListener("click", function () {
    let tableBody = document.getElementById("remindersTable").getElementsByTagName("tbody")[0];

    tableBody.innerHTML = "";

    for (let reminder of reminders) {
        let row = tableBody.insertRow();

        let titleCell = row.insertCell();
        let titleText = document.createTextNode(reminder.title);
        titleCell.appendChild(titleText);
        titleCell.style.color = reminder.color;
        titleCell.style.border = "1px solid black";

        let priorityCell = row.insertCell();
        let priorityText = document.createTextNode(reminder.priority);
        priorityCell.appendChild(priorityText);
        priorityCell.style.border = "1px solid black";

        let descriptionCell = row.insertCell();
        let descriptionText = document.createTextNode(reminder.description);
        descriptionCell.appendChild(descriptionText);
        descriptionCell.style.border = "1px solid black";
    }

    document.getElementById("remindersTable").style.border = "1px solid black";
});