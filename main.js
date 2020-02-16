const restaurants = [
    {name: 'Trata', category: "American"},
    {name: 'Roux', category: "French"},
    {name: 'Owl House', category: ""},
    {name: 'Texas Roadhouse', category: "American"},
    {name: 'Hong Wah', category: "Asian"},
    {name: 'Roam', category: "American"},
    {name: 'Pittsford Pub', category: "American"},
    {name: "McDonald's", category: "American"},
    {name: "Tom Wahl's", category: "American"},
    {name: "Bill Gray's", category: "American"},
    {name:  "Wegman's", category: ""},
    {name: "P.F. Chang's", category: "Asian"},
    {name: 'Cheesecake Factory', category: "American"},
    {name:"Moe's", category: "Mexican"},
    {name: 'Revelry', category: "American"},
    {name: 'Food at Fisher Station', category: "Breakfast"},
    {name: 'Char Broil', category: "Breakfast"},
    {name: "Leo's", category: "Sandwiches"},
    {name: 'Basha', category: "Greek"},
    {name: 'Spiedielicious', category: "Greek"},
    {name: 'Monte Alban', category: "Mexican"},
    {name: 'Panera', category: "Sandwiches"},
    {name: 'Fiamma Centro', category: "Italian"},
    {name: 'Nosh', category: "American"},
    {name:  'Philly Steak Out',category: "American"},

    
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

const categories = ["Italian", "American", "Fast-food", "Sandwiches", "Bakeries", "Asian", "Breakfast", "French", "Mexican", "Greek"];

const giveRandomRestaurant = () => {
    const anyRestaurant = document.getElementById("anyRestaurant");
    let randomRestaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
    anyRestaurant.innerHTML ="<h3>" + randomRestaurant.name + "</h3>";
};

const generateDropdown = () =>  {
    const categoryDropdown = document.getElementById("categoryDropdown");
    categoryDropdown.insertAdjacentHTML("afterbegin", 
    categories.map(category => `<a class='dropdown-item' onClick = showCategoryList('${category}')>` + category + "</a>").join(''));
};

const categoryList = document.getElementById("categoryList");

const showCategoryList = (category) => {
    categoryList.innerHTML = "<h3>" + category + " restaurants:" + "</h3>"; 
};

generateDropdown();

