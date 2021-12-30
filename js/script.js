let myLibrary = [];

class Book {
    constructor(name, author, pages, status) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }

    addToList() {
        myLibrary.push(this);
    }

    readToggle() {
        this.status = !this.status;
    }
}

const harryPotter = new Book("Harry Potter", "JK Rowling", 645, true);
