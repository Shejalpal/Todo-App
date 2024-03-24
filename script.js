let listContainer = document.getElementById('list-container');
let inputbox = document.getElementById('input-box');

function addTask() {
    if (inputbox.value === '') {
        alert('Add Your Task');
    } else {
        let task = document.createElement('li');
        task.textContent = inputbox.value;
        listContainer.appendChild(task);

        let span = document.createElement('span');
        span.textContent = '\u00d7';
        task.appendChild(span);
    }
    inputbox.value = '';
    saveData();
}

// Corrected event listener to listen for clicks on the list container
listContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'SPAN') {
        event.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem("tasks", listContainer.innerHTML);
}

function showData() {
    listContainer.innerHTML = localStorage.getItem('tasks');
}

showData();
