const restaurants = [
    'Trata',
    'Roux',
    'Owl House'
];

const categories = ["Italian", "American", "Fast Food", "Sandwiches", "Bakeries", "Asian", "Breakfast", ""];
const descriptions = ["Description 1", "Description 2", "Description 3"];

const giveRandomRestaurant = () => {
    const anyRestaurant = document.getElementById("anyRestaurant");
    let randomRestaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
    anyRestaurant.innerHTML ="<h3>" + randomRestaurant + "</h3>";
};

const generateDropdown = () =>  {
    const categoryDropdown = document.getElementById("categoryDropdown");
    categoryDropdown.insertAdjacentHTML("afterbegin", categories.map(category => "<a class='dropdown-item'>" + category + "</a>").join(''));
};

generateDropdown();

