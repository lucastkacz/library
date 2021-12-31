let myLibrary = [];
const nameInput = document.querySelector("#name");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const statusInput = document.querySelector("#status");

const formInput = document.querySelector("form");

formInput.addEventListener("submit", () => {
    onSubmit();
    clearForm();
});

class Book {
    constructor(name, author, pages, status) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }
}

function clearLibrary() {
    myLibrary.length = 0;
}

function onSubmit() {
    const book = new Book(nameInput.value, authorInput.value, pagesInput.value, statusInput.value);
    myLibrary.push(book);
    console.table(myLibrary);
    updateTable();
}
function clearForm() {
    nameInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
}
function updateTable() {
    const tBody = document.querySelector("tbody");
    tBody.textContent = "";
    for (let i = 0; i < myLibrary.length; i++) {
        const newRow = document.createElement("tr");
        tBody.appendChild(newRow);

        const newNumber = document.createElement("td");
        newNumber.textContent = i + 1;
        newRow.appendChild(newNumber);

        const newTitle = document.createElement("td");
        newTitle.textContent = myLibrary[i].name;
        newRow.appendChild(newTitle);

        const newAuthor = document.createElement("td");
        newAuthor.textContent = myLibrary[i].author;
        newRow.appendChild(newAuthor);

        const newPages = document.createElement("td");
        newPages.textContent = myLibrary[i].pages;
        newRow.appendChild(newPages);

        const newStatus = document.createElement("td");
        newStatus.textContent = myLibrary[i].status;
        newRow.appendChild(newStatus);

        const newDelete = document.createElement("button");
        newDelete.textContent = "Delete";
        newDelete.setAttribute("id", "delete-button");
        newRow.appendChild(newDelete);
    }
}
