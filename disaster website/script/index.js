var user = {}; //user object to store user info
var orderArray = []; //to keep track of all the orders
var customerId = 0; //to keep track of customer
var menuItems =[{
        id:"0",
        name:"Salad",
        isVeg: true,
        description:"Contains chopped Raw Vegetables, lettuce, spinach, kale, mixed greens and arugula",
        type: "starter",
        cost: 10,
        src:"images/salad.jpg"
    },
    {
        id: "1",
        name: "Wings",
        isVeg: false,
        description: "Deep-fried and dipped in vinegar based sauce ande melted butter prior to serving. ",
        type: "starter",
        cost: 15,
        src: "images/wings.jpg"
    },
    {
        id:"2",
        name:"beef strips",
        isVeg: false,
        description: "Taken from a cut of beef that is tender cooked on the grill and spices served with cheese.",
        type: "starter",
        cost: 40,
        src: "images/beefstripe.jpg"
    },
    {
        id: "3",
        name: "Tom Yum",
        isVeg: false,
        description: "Hot and sour Thai soup, cooked with shrimp. Tom yum has its origin in Thailand.",
        type: "starter",
        cost: 10,
        src: "images/tomyum.jpg"
    },

    {
        id: "4",
        name: "Vegetable Fried Rice",
        isVeg: true,
        description: "Vegitable Fried rice contains carrot, potato, peas mixed with spices and salt",
        type: "main",
        cost: 30,
        src: "images/VegetableFriedRice.jpg"
    },
    {
        id: "5",
        name: "Potato Curry",
        isVeg: true,
        description: "Potato Curry prepared for veg customers seasoned with asian spices",
        type: "main",
        cost: 40,
        src: "images/potatoCurry.jpg"
    },
    {
        id: "6",
        name: "Beef steak",
        isVeg: false,
        description: "T-bone Steak juicy and rich with flavours seasoned with salt and spices",
        type: "main",
        cost: 70,
        src: "images/beefsteak.jpg"
    },
    {
        id: "7",
        name: "Chicken steaks",
        isVeg: false,
        description: "Cutlet dish consisting of a piece of chickensteak with seasoned flavours.",
        type: "main",
        cost: 50,
        src: "images/chickensteak.jpg"
    },

    {
        id: "8",
        name: "Bread Pudding",
        isVeg: false,
        description: "Bread-based dessert, made with bread and cream, eggs, and other ingredients",
        type: "desert",
        cost: 10,
        src: "images/breadPudding.jpg"
    },
    {
        id: "9",
        name: "Irish Apple Cake",
        isVeg: false,
        description: "Prepared by using diverse variety of apples, mixed with Honeycrisp and Granny Smith ",
        type: "desert",
        cost: 30,
        src: "images/appleCake.jpg"
    },
    {
        id: "10",
        name: "Brownie",
        isVeg: false,
        description: "Fudgy and cakey. Include nuts, frosting, cream cheese, chocolate chips, and other ingredients.",
        type: "desert",
        cost: 40,
        src: "images/brownie.jpg"
    },
    {
        id: "11",
        name: "Cheesecake",
        isVeg: false,
        description: "Sweet dessert, the main, and thickest, layer consists of a mixture of fresh cheese, eggs, and sugar.",
        type: "desert",
        cost: 40,
        src: "images/cheeseCake.jpg"
    },

    {
        id: "12",
        name: "Irish Rose",
        isVeg: false,
        description: "Red and white irish rose adds value to your dinner tonight,served either blended or shaken with ice",
        type: "drink",
        cost: 25,
        src: "images/irishrose.jpg"
    },
    {
        id: "13",
        name: "Fat Frog",
        isVeg: false,
        description: "Fruity combination of 3 of Europe's most popular selling 5% alcopops, served either blended",
        type: "drink",
        cost: 15,
        src: "images/fatfrog.jpg"
    },
    {
        id: "14",
        name: "Lemonade",
        isVeg: false,
        description: "Offering a colorful bounty of healthy, delicious seasonal menu items,blended and shaken with ice",
        type: "drink",
        cost: 18,
        src: "images/lemonade.jpg"
    },
    {
        id: "15",
        name: "Pina colada",
        isVeg: false,
        description: "Made with rum, cream of coconut or coconut milk, and pineapple juice, shaken with ice",
        type: "drink",
        cost: 25,
        src: "images/pinacolada.jpg"
    }
];

$(document).ready(function(){
    //call the populate function on load
    populateMenuForm();
    populateCustomers();
});
//function to pull 5 records from api
function populateCustomers() {
    for( var i = 0; i<5; i++) {
        //ajax call to api
        $.ajax({
            url:"https://randomuser.me/api",
            success: function(result) {
                //store user info in user object
                user.name = result.results[0].name.first;
                user.imgSrc = result.results[0].picture.large;
                user.phoneNumber = result.results[0].cell;
                user.dob = result.results[0].dob.date;
                user.age = result.results[0].dob.age;
                user.email = result.results[0].email;
                user.gender = result.results[0].gender;
                user.city = result.results[0].location.city;
                user.country = result.results[0].location.country;
                user.postCode = result.results[0].location.postcode;
                //dynamic table creation to display records
                var table = '<table class="table table-bordered table-striped mt-5">';
                //create table head
                var table_head = '<thead>';
                table_head += '<tr>';
                table_head += '<th>';
                table_head += '<h4>Name: ' + user.name + '</h4>';
                table_head += '</th>';
                table_head += '</tr>';
                table_head += '</thead>'
                //end Table Head
                table += table_head; //merge table head in to table
                //create Table body
                var table_body = '<tbody>';
                //create row for image and merge into table body
                table_body += '<tr>';
                table_body += '<td>';
                table_body += '<img id="img" src= ' + user.imgSrc + '>';
                table_body += '</td>';
                table_body += '</tr>';
                //create row for phone and merge into table body
                table_body += '<tr>';
                table_body += '<td>';
                table_body += '<b> Phone Number: </b>' + user.phoneNumber;
                table_body += '</td>';
                table_body += '</tr>';
                //create row for dob and merge into table body
                table_body += '<tr>';
                table_body += '<td>';
                table_body += '<b> Date Of Birth: </b>' + user.dob;
                table_body += '</td>';
                table_body += '</tr>';
                //create row for age and merge into table body
                table_body += '<tr>';
                table_body += '<td>';
                table_body += '<b> Age: </b>' + user.age;
                table_body += '</td>';
                table_body += '</tr>';
                //create row for email and merge into table body
                table_body += '<tr>';
                table_body += '<td>';
                table_body += '<b> Email: </b>' + user.email;
                table_body += '</td>';
                table_body += '</tr>';
                //create row for gender and merge into table body
                table_body += '<tr>';
                table_body += '<td>';
                table_body += '<b> Gender: </b>' + user.gender;
                table_body += '</td>';
                table_body += '</tr>';
                //create row for city and merge into table body
                table_body += '<tr>';
                table_body += '<td>';
                table_body += '<b> City: </b>' + user.city;
                table_body += '</td>';
                table_body += '</tr>';
                //create row for country and merge into table body
                table_body += '<tr>';
                table_body += '<td>';
                table_body += '<b> Country: </b>' + user.country;
                table_body += '</td>';
                table_body += '</tr>';
                //create row for post code and merge into table body
                table_body += '<tr>';
                table_body += '<td>';
                table_body += '<b> Post Code: </b>' + user.postCode;
                table_body += '</td>';
                table_body += '</tr>';
                table_body += '</tbody>';
                table += table_body; //merge table body in table
                table += '</table>'; //close table
                $('#customersTable').append(table);
            }
        });
    }
}

$("#validate").click(function(){
    var password = $("#password").val();
    validatePassword(password);
});

function validatePassword(password) {
    var specialCharacter = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    var number = /[0-9]/;
    var capLetter = /[A-Z]/;
    var lowerLetter = /[a-z]/;
    var isLessThanEight = false;
    var isNoSpecialChar = false;
    var isDigitInPass = false;
    var isLowerLetter = false;
    var isUpperLetter = false;
    if (password.length < 8) {
        isLessThanEight = true;
    }
    //check for a special character
    if (specialCharacter.test(password) == false) {
        isNoSpecialChar = true;
    }
    if (password.match(number)) {
        isDigitInPass = true;
    }
    //check capital letter
    if (capLetter.test(password)) {
        isUpperLetter = true;
    }
    //if small letter
    if (lowerLetter.test(password)) {
        isLowerLetter = true;
    }
    //display error message if invalid
    if (isLessThanEight || isNoSpecialChar || !isDigitInPass || !isLowerLetter || !isUpperLetter) {
        $('#wrong-password').css({
            "display": "block"
        });
    }
    //do not display error message
    else {
        $('#wrong-password').css({
            "display": "none"
        });
    }
}

function populateMenuForm() {
    $('#starters').empty();
    $('#main').empty();
    $('#deserts').empty();
    $('#drinks').empty();


    for (var i = 0; i < menuItems.length; i++) {
        if (menuItems[i].type == "starter") {
            var starter = '<div class="card col-3"><img src="' + menuItems[i].src + '"alt="starter" style="width:100%; height: 200px;"><h4>' + menuItems[i].name + '</h4><p class="price"> &euro; ' + menuItems[i].cost + '</p><p>' + menuItems[i].description + '</p><p><input type="number" placeholder="Quantity" min="0" class="form-control starter" id=' + menuItems[i].id + '></p></div>'
            $('#starters').append(starter);
        } else if (menuItems[i].type == "main") {
            var main = '<div class="card col-3"><img src="' + menuItems[i].src + '"alt="main" style="width:100%; height: 200px;"><h4>' + menuItems[i].name + '</h4><p class="price"> &euro; ' + menuItems[i].cost + '</p><p>' + menuItems[i].description + '</p><p><input type="number" placeholder="Quantity" min="0" class="form-control main" id=' + menuItems[i].id + '></p></div>'

            $('#main').append(main);
        } else if (menuItems[i].type == "desert") {
            var deserts = '<div class="card col-3"><img src="' + menuItems[i].src + '"alt="Desert" style="width:100%; height: 200px;"><h4>' + menuItems[i].name + '</h4><p class="price"> &euro; ' + menuItems[i].cost + '</p><p>' + menuItems[i].description + '</p><p><input type="number" placeholder="Quantity" min="0" class="form-control desert" id=' + menuItems[i].id + '></p></div>'

            $('#deserts').append(deserts);
        } else if (menuItems[i].type == "drink") {
            var drinks = '<div class="card col-3"><img src="' + menuItems[i].src + '"alt="Drinks" style="width:100%; height: 200px;"><h4>' + menuItems[i].name + '</h4><p class="price"> &euro; ' + menuItems[i].cost + '</p><p>' + menuItems[i].description + '</p><p><input type="number" placeholder="Quantity" min="0" class="form-control drink" id=' + menuItems[i].id + '></p></div>'

            $('#drinks').append(drinks);
        }

    }
}
$("#billCalculate").click(function() {
    emptyBillingFileds();
    billGenerator();
    populateMenuForm();
});

function billGenerator() {
    var totalBill = 0;
    var starterBill = 0;
    var mainBill = 0;
    var desertBill = 0;
    var drinksBill = 0;
    var vegBill = 0;
    var nonVegBill = 0;
    //calculate starter Bill
    var starterItems = document.getElementsByClassName("starter");
    //loop through all the starter items
    for (var i = 0; i < starterItems.length; i++) {
        if (starterItems[i].value) //proceed only if item is in order
        {
            var qty = parseInt(starterItems[i].value); //convert in num
            var id = starterItems[i].id;
            for (var j = 0; j < menuItems.length; j++) {
                if (id == menuItems[j].id) {
                    starterBill += menuItems[j].cost * qty;
                    if (menuItems[j].isVeg)
                        vegBill += menuItems[j].cost * qty;
                    else
                        nonVegBill += menuItems[j].cost * qty;
                }
            }
        }
    }
    //calculate main Bill
    var mainItems = document.getElementsByClassName("main");
    for (var i = 0; i < mainItems.length; i++) {
        if (mainItems[i].value) //proceed only if item is in order
        {
            var qty = parseInt(mainItems[i].value); //convert in num
            var id = mainItems[i].id;
            for (var j = 0; j < menuItems.length; j++) {
                if (id == menuItems[j].id) {
                    mainBill += menuItems[j].cost * qty;
                    if (menuItems[j].isVeg)
                        vegBill += menuItems[j].cost * qty;
                    else
                        nonVegBill += menuItems[j].cost * qty;
                }
            }
        }
    }
    //calculate for deserts
    var desertItems = document.getElementsByClassName("desert");
    for (var i = 0; i < desertItems.length; i++) {
        if (desertItems[i].value) //proceed only if item is in order
        {
            var qty = parseInt(desertItems[i].value); //convert in num
            var id = desertItems[i].id;
            for (var j = 0; j < menuItems.length; j++) {
                if (id == menuItems[j].id) {
                    desertBill += menuItems[j].cost * qty;
                }
            }
        }
    }
    //calculate for drink
    var drinkItems = document.getElementsByClassName("drink");
    for (var i = 0; i < drinkItems.length; i++) {
        if (drinkItems[i].value) //proceed only if item is in order
        {
            var qty = parseInt(drinkItems[i].value); //convert in num
            var id = drinkItems[i].id;
            for (var j = 0; j < menuItems.length; j++) {
                if (id == menuItems[j].id) {
                    drinksBill += menuItems[j].cost * qty;
                }
            }
        }
    }
    customerId++;
    totalBill = starterBill + mainBill + desertBill + drinksBill;
    $('#total-bill').val('\u20AC' + " " + totalBill);
    $('#starter-bill').val('\u20AC' + " " + starterBill);
    $('#main-total').val('\u20AC' + " " + mainBill);
    $('#desert-total').val('\u20AC' + " " + desertBill);
    $('#drink-total').val('\u20AC' + " " + drinksBill);
    $('#veg-total').val('\u20AC' + " " + vegBill);
    $('#nonveg-total').val('\u20AC' + " " + nonVegBill);
    var orderObject = {
        id: customerId,
        starter: starterBill,
        main: mainBill,
        desert: desertBill,
        drink: drinksBill,
        veg: vegBill,
        nonveg: nonVegBill,
        total: totalBill
    };
    orderArray.push(orderObject);

}
$("#myBtn").click(function() {
    displayAllOrders();
});

function displayAllOrders() {
    $('#total-table').empty();
    var starterTotal = 0;
    var mainTotal = 0;
    var desertTotal = 0;
    var drinkTotal = 0;
    var vegTotal = 0;
    var nonVegTotal = 0;
    var total = 0;
    //calculate total of all the orders breakdown
    for (var i = 0; i < orderArray.length; i++) {
        starterTotal += orderArray[i].starter;
        mainTotal += orderArray[i].main;
        desertTotal += orderArray[i].desert;
        drinkTotal += orderArray[i].drink;
        vegTotal += orderArray[i].veg;
        nonVegTotal += orderArray[i].nonveg;
        total += orderArray[i].total;
    }
    var table = '<table class="table">';
    var tableHead = '<thead>';
    tableHead += '<tr>'
    tableHead += '<th>Customer ID</th>';
    tableHead += '<th>Starter</th>';
    tableHead += '<th>Main</th>';
    tableHead += '<th>Desert</th>';
    tableHead += '<th>Drink</th>';
    tableHead += '<th>Non Veg</th>';
    tableHead += '<th>Vegetarien</th>';
    tableHead += '<th>Total</th>'
    tableHead += '</tr>';
    tableHead += '</thead>';
    table += tableHead;
    var tableBody = '<tbody>';

    for (var j = 0; j < orderArray.length; j++) {
        var row = '<tr>';
        row += '<td>'+ orderArray[j].id + '</td>';
        row += '<td>' + '\u20AC' + " " + orderArray[j].starter + '</td>';
        row += '<td>' + '\u20AC' + " " + orderArray[j].main + '</td>';
        row += '<td>' + '\u20AC' + " " + orderArray[j].desert + '</td>';
        row += '<td>' + '\u20AC' + " " + orderArray[j].drink + '</td>';
        row += '<td>' + '\u20AC' + " " + orderArray[j].veg + '</td>';
        row += '<td>' + '\u20AC' + " " + orderArray[j].nonveg + '</td>';
        row += '<td>' + '\u20AC' + " " + orderArray[j].total + '</td>';
        row += '</tr>'
        tableBody += row;
    }
    table += tableBody;
    table += '</table>';
    $('#total-table').append(table);
}

var modal = document.getElementById("total-orders");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function emptyBillingFileds() {
    $('#total-bill').val('');
    $('#starter-bill').val('');
    $('#main-total').val('');
    $('#desert-total').val('');
    $('#drink-total').val('');
    $('#veg-total').val('');
    $('#nonveg-total').val('');
}