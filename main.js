var restaurants = [
    'Trata',
    'Roux',
    'Owl House'
];

var categories = ["Category 1", "Category 2", "Category 3"];
var descriptions = ["Description 1", "Description 2", "Description 3"];

function generateHTML() {
    var categoryWrapper = document.getElementById("categoryWrapper");
    categoryWrapper.innerHTML = 
            "<div class='col-sm-6 col-md-4'>" +
    "<div class='caption'>" +
        "<img src='...' alt='...'>" +
        "<div class='caption'>" +
        //map through each resturant, description and category
            "<h3>" + categories + "</h3>" +
            "<p>" + descriptions + "</p>" +
            "<p>" +
                "<a href='#' class='btn btn-primary' role='button'>" + "</a>" +
                "<a href='#' class='btn btn-default' role='button'>" + "</a>"+
            "</p>" +
        "</div>" +
   " </div>" +
"</div>"
    ;
};


generateHTML();


