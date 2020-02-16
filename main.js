const restaurants = [
    'Trata',
    'Roux',
    'Owl House',
    'Texas Roadhouse',
    'Hong Wah',
    'Roam',
    'Pittsford Pub',
    "McDonald's",
    "Tom Wahl's",
    "Bill Gray's",
    "Wegman's",
    "P.F. Chang's",
    'Cheesecake Factory',
    "Moe's",
    'Revelry',
    'Food at Fisher Station',
    'Char Broil',
    "Leo's",
    'Basha',
    'Spiedielicious',
    'Monte Alban',
    'Panera',
    'Fiamma Centro',
    'Nosh',
    'Philly Steak Out',
    "Pontillo's",
    "Mr. Dominic's",
    "Joey's",
    "Michael's Valley Grill",
    "Rosey's",
    "Good Luck",
    'Old Stone Tavern',
    "Gate House",
    "Pane Vino",
    "Thali of India",
    "Branca",
    "Max of Eastman Place",
    "Dogtown",
    "McCann's Meats",
    "Bitter Honey",
    "Pizza Stop",
    "Phillips European",
    "DiBella's"
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

