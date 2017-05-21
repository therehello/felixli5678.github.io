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

var msg = "User1" + " " + User1.name + " " + User1.password + " " + User1.movements[0].name;
var el = document.getElementById("log");
/*var msg = "Hello world!";
var el = document.getElementById("log");*/
el.textContent = msg;

// Present information based on the geo-location of the user.