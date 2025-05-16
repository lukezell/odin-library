const tBody = document.querySelector("#tBody");

function addBook (id, title, author, pages, finished) {
    let row = document.createElement("tr");

    let hId = document.createElement("td");
    hId.textContent = `${id}`
    row.appendChild(hId);

    let hTitle = document.createElement("td");
    hTitle.textContent = `${title}`
    row.appendChild(hTitle);

    let hAuthor = document.createElement("td");
    hAuthor.textContent = `${author}`
    row.appendChild(hAuthor);

    let hPages = document.createElement("td");
    hPages.textContent = `${pages}`
    row.appendChild(hPages);

    let hFinished = document.createElement("td");
    if (finished) {
        hFinished.textContent = "Yes"
    } else {
        hFinished.textContent = "No"
    }
    hFinished.addEventListener("click", () => {
        if (hFinished.textContent == "No") {
        hFinished.textContent = "Yes";
    } else {
        hFinished.textContent = "No";
    }
    })
    hFinished.classList.add("finished")
    row.appendChild(hFinished);

    tBody.appendChild(row);
}

addBook(29784, "My American Summer", "Katy Perry", 768, true);
addBook(29781, "Help! I Need Somebody, It's Getting Crazy and My Head is Hot, Whhhhhaaaaaaaaaa", "Paul", 389, false);