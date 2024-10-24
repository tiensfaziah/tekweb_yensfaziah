// Function to change background color
function changeBackgroundColor() {
    let color = document.getElementById("bgColor").value;
    document.body.style.backgroundColor = color;
}

// Function to change font size
function changeFontSize() {
    let size = document.getElementById("fontSize").value + "px";
    document.body.style.fontSize = size;
}

// Function to toggle dark mode
function toggleDarkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
}

// Function to change font style
function changeFontStyle(style) {
    document.body.style.fontFamily = style;
}

// Function to add a new task
function addTask() {
    let taskInput = document.getElementById("new-task");
    let taskText = taskInput.value.trim();

    if (taskText !== "") {
        let taskList = document.getElementById("task-list");

        // Create a new list item for the task
        let listItem = document.createElement("li");

        // Add task text
        let taskSpan = document.createElement("span");
        taskSpan.innerText = taskText;

        // Allow editing of the task
        taskSpan.ondblclick = function () {
            editTask(this);
        };

        // Create delete button
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "&#x2715;"; // Red "X"
        deleteButton.style.color = "red";
        deleteButton.onclick = function () {
            deleteTask(this);
        };

        // Create checkbox for marking task as completed
        let completeCheckbox = document.createElement("input");
        completeCheckbox.type = "checkbox";
        completeCheckbox.onclick = function () {
            markTaskCompleted(this);
        };

        // Append elements to the list item
        listItem.appendChild(completeCheckbox);
        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteButton);

        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";
    }
}

// Function to delete a task
function deleteTask(button) {
    let listItem = button.parentElement;
    listItem.remove();
}

// Function to edit a task
function editTask(taskSpan) {
    let currentText = taskSpan.innerText;
    let inputField = document.createElement("input");
    inputField.type = "text";
    inputField.value = currentText;

    // When pressing "Enter", save the edited task
    inputField.onkeypress = function (event) {
        if (event.key === "Enter") {
            taskSpan.innerText = inputField.value.trim();
            taskSpan.style.textDecoration = ""; // Remove strikethrough if there was any
            taskSpan.parentElement.replaceChild(taskSpan, inputField);
        }
    };

    // Replace the span with input field to allow editing
    taskSpan.parentElement.replaceChild(inputField, taskSpan);
    inputField.focus();
}

// Function to mark a task as completed
function markTaskCompleted(checkbox) {
    let taskSpan = checkbox.nextSibling;

    if (checkbox.checked) {
        taskSpan.style.textDecoration = "line-through";
    } else {
        taskSpan.style.textDecoration = "none";
    }
}
