const tBody = document.querySelector("#tBody");
const btn = document.querySelector("#submit")
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const finished = document.querySelector("#finished");

const exampleBook1 = {
    id: crypto.randomUUID(),
    title: "The You You Never Were!",
    author: "Katy Perry",
    pages: 458,
    finished: true
};
const exampleBook2 = {
    id: crypto.randomUUID(),
    title: "Balls in the Field",
    author: "Henry Harrenstein",
    pages: 349,
    finished: false
};

let myLibrary = [exampleBook1, exampleBook2];

function Book(title, author, pages, finished) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.finished = finished;
}

function addBookToLibrary(title, author, pages, finished) {
    myLibrary.push(new Book (title, author, pages, finished));
}

function makeTable () {
    tBody.textContent = "";

    myLibrary.forEach(function (book) {
        let row = document.createElement("tr");

        let hId = document.createElement("td");
        hId.textContent = `${book.id.substr(0, 8)}`
        row.appendChild(hId);

        let hTitle = document.createElement("td");
        hTitle.textContent = `${book.title}`
        row.appendChild(hTitle);

        let hAuthor = document.createElement("td");
        hAuthor.textContent = `${book.author}`
        row.appendChild(hAuthor);

        let hPages = document.createElement("td");
        hPages.textContent = `${book.pages}`
        row.appendChild(hPages);

        let hFinished = document.createElement("td");
        if (book.finished) {
            hFinished.textContent = "Yes";
        } else {
            hFinished.textContent = "No";
        }
        hFinished.addEventListener("click", () => {
            if (hFinished.textContent == "No") {
            hFinished.textContent = "Yes";
        } else {
            hFinished.textContent = "No";
        }
        });
        hFinished.classList.add("finished")
        row.appendChild(hFinished);

        let hRemove = document.createElement("td");
        hRemove.id = myLibrary.indexOf(book);
        hRemove.addEventListener("click", () => {
            myLibrary.splice(hRemove.id, 1);
            makeTable();
        });
        hRemove.textContent = `×`
        hRemove.classList.add("removeSymbol")
        row.appendChild(hRemove);

        tBody.appendChild(row);
    });
}

btn.addEventListener("click", () => {
    addBookToLibrary(title.value, author.value, pages.value, finished.checked);
    makeTable();
    title.value = "";
    author.value = "";
    pages.value = "";
    finished.checked = false;
    event.preventDefault();
})

makeTable();