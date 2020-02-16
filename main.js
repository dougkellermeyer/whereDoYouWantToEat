var restaurants = [
    'Trata',
    'Roux',
    'Owl House'
];

var categories = ["Italian", "American", "Fast Food", "Sandwiches", "Bakeries", "Asian", "Breakfast", ""];
var descriptions = ["Description 1", "Description 2", "Description 3"];

function generateDropdown() {
    var categoryDropdown = document.getElementById("categoryDropdown");
    categoryDropdown.insertAdjacentHTML("afterbegin",
        categories.map(category => {
           return "<a class='dropdown-item'>" + category + "</a>";
        }).join('')
    );
};


generateDropdown();


