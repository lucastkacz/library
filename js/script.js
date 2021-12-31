let myLibrary = [];

class Book {
    constructor(name, author, pages, status) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }
}

const nameInput = document.querySelector("#name");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const statusInput = document.querySelector("#status");

// Submit button handler
const formInput = document.querySelector("form");
formInput.addEventListener("submit", () => {
    onSubmit();
    clearForm();
});
// Delete button handler
const tableInput = document.querySelector("table");
tableInput.addEventListener("click", deleteRow);

function onSubmit() {
    const book = new Book(nameInput.value, authorInput.value, pagesInput.value, statusInput.value);
    myLibrary.push(book);
    updateTable();
}
function clearForm() {
    nameInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
}
function updateTable() {
    const tBody = document.querySelector("tbody");
    // Clears the table with every function call. Maybe it's not the most efficient way
    tBody.innerHTML = "";
    // Loops through every item in myLibrary and adds it to the body of the table
    for (let i = 0; i < myLibrary.length; i++) {
        tBody.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${myLibrary[i].name}</td>
                <td>${myLibrary[i].author}</td>
                <td>${myLibrary[i].pages}</td>
                <td>${myLibrary[i].status}</td>
                <td><button class="delete-button">Delete</button></td>
            </tr>`;
    }
}
function deleteRow(event) {
    // Since the event listener is on the whole table and not on the button, we need to make sure only the button deletes the row
    if (!event.target.classList.contains("delete-button")) {
        return;
    }
    // Access the button inside the table row. (dot) target returns the element that triggered the event
    const button = event.target;
    // Get the first value of the table row, which is the index
    const bookIndex = Number(button.parentNode.parentNode.childNodes[1].innerHTML) - 1;
    // Remove the row/book from the table
    button.closest("tr").remove();
    // Remove the book from the list
    myLibrary.splice(bookIndex, 1);
    // Update table because the indexes have been changed
    updateTable();
}
