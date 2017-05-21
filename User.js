/**
 * Created by felixli on 5/20/17.
 */
function User(name, password, movements) { //movements will have to either be an array of movement objects //string, string, array of objects
    this.name = name;
    this.password = password;
    this.movements = movements;
}

function Movement(name, description, location) { //string, string, string
    this.name = name;
    this.description = description;
    this.location = location;
}


// Might need to adjust the location property in order to parse it and use it for a iframe window and marker
var User1 = new User("Ashley", "1234", [new Movement("none", "none", "none")]);
var User2 = new User("Bob", "4321", [new Movement("Fight for Women Justice!", "A local walk in Cambridge organized by high school students.", "Cambridge, MA")]);
var User3 = new User("Carl", "A1B2C3", [new Movement("Social Justice for the Unspoken", "A protest for those without a voice.", "Boston, MA"), new Movement("Animal Rights Walk", "A walk for the rights of animals!", "Malden, MA")]);

var msg = "User1" + " " + User1.name + " " + User1.password + " " + User1.movements[0].name + " " + User1.movements[0].description + " " + User1.movements[0].location;
var msg2 = " User2" + " " + User2.name + " " + User2.password + " " + User2.movements[0].name + " " + User2.movements[0].description + " " + User2.movements[0].location;
var msg3 = " User3" + " " + User3.name + " " + User3.password + " " + User3.movements[0].name + " " + User3.movements[0].description + " " + User3.movements[0].location + " " + User3.movements[1].name + " " + User3.movements[1].description + " " + User3.movements[1].location;
var el = document.getElementById("log");
el.textContent = msg + msg2 + msg3;

// Present information based on the geo-location of the user.