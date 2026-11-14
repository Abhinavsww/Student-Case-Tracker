// JavaScript for the CSE 326 student project

// Highlight the page that is currently open.
let pageName = window.location.pathname.split("/").pop();

let menuLinks = document.querySelectorAll(".nav a");

for (let i = 0; i < menuLinks.length; i++) {
    if (menuLinks[i].getAttribute("href") === pageName) {
        menuLinks[i].classList.add("active");
    }
}

// Add a simple search box to pages that contain a table.
let tables = document.querySelectorAll("table");

for (let i = 0; i < tables.length; i++) {
    let searchBox = document.createElement("input");

    searchBox.type = "text";
    searchBox.placeholder = "Search records...";
    searchBox.className = "table-search";

    tables[i].parentNode.insertBefore(searchBox, tables[i]);

    searchBox.addEventListener("keyup", function () {
        let searchText = searchBox.value.toLowerCase();
        let rows = tables[i].getElementsByTagName("tr");

        for (let j = 1; j < rows.length; j++) {
            let rowText = rows[j].textContent.toLowerCase();

            if (rowText.includes(searchText)) {
                rows[j].style.display = "";
            } else {
                rows[j].style.display = "none";
            }
        }
    });
}

// Demo login: this is not real account authentication.
let loginForm = document.querySelector(".login-box form");

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let username = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value.trim();

        if (username === "" || password === "") {
            alert("Please enter both username and password.");
        } else {
            alert("Demo login successful!");
            window.location.href = "dashboard.html";
        }
    });
}

// Check the new-case form before showing a confirmation message.
let caseForm = document.querySelector('[data-form="new-case"]');

if (caseForm) {
    caseForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("The form looks good. This student project does not use a database yet.");
        caseForm.reset();
    });
}
