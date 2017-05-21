/**
 * Created by felixli on 5/20/17.
 */
function User(name, password, movements) { //movements will have to either be an array of movement objects //string, string, array of objects
    this.name = name;
    this.password = password;
    this.movements = movements;
}

function Movement(name, description, location, date) { //string, string, string, string
    this.name = name;
    this.description = description;
    this.location = location;
    this.date = date;
}


// Might need to adjust the location property in order to parse it and use it for a iframe window and marker
var User1 = new User("Ashley", "1234", [new Movement("none", "none", [0,0], "never")]);
var User2 = new User("Bob", "4321", [new Movement("Fight for Women Justice!", "A local walk in Boston organized by high school students.", [42.359849, -71.139784], "5/22/17")]);
var User3 = new User("Carl", "A1B2C3", [new Movement("Social Justice for the Unspoken", "A protest for those without a voice.", [42.354918, -71.146672], "5/23/17"), new Movement("Animal Rights Walk", "A walk for the rights of animals!", [42.355885, -71.139698], "5/23/17")]);

var msg = "User1 Name: " + User1.name + ", Password: " + User1.password + ", Movement Name: " + User1.movements[0].name + ", Movement Description: " + User1.movements[0].description + ", Movement Location: " + User1.movements[0].location + ", Movement Date: " + User1.movements[0].date;
var msg2 = " User2 Name: " + User2.name + ", Password: " + User2.password + ", Movement Name: " + User2.movements[0].name + ", Movement Description:  " + User2.movements[0].description + ", Movement Location: " + User2.movements[0].location + ", Movement Date: " + User2.movements[0].date;
var msg3 = " User3 Name: " + User3.name + ", Password: " + User3.password + ", Movement Name: " + User3.movements[0].name + ", Movement Description:  " + User3.movements[0].description + ", Movement Location:  " + User3.movements[0].location + ", Movement Date: " + User3.movements[0].date + ", Movement Name: " + User3.movements[1].name + ", Movement Description: " + User3.movements[1].description + ", Movement Location:  " + User3.movements[1].location + ", Movement Date: " + User3.movements[1].date;
var el = document.getElementById("log");
el.textContent = msg;
var elOne = document.getElementById("log2");
elOne.textContent = msg2;
var elTwo = document.getElementById("log3");
elTwo.textContent = msg3;

// Present information based on the geo-location of the user.