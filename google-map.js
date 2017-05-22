/**
 * Created by felixli on 5/21/17.
 */
/*function init() {
    var mapOptions = {
        center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 13
    };

    var venueMap;
    venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
    }

    function loadScript() {
        var script = document.createElement("script");
        script.src = "http://maps.oggleapis.com/maps/api/js?sensor=false&callback-init";
        document.body.appendChild(script);
    }

    window.onload = loadScript;
}*/

/*var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
}*/
/*var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 9
    });
}*/
// Creates the map.
/*var msg = "sdfsdfds";
var el = document.getElementById("log");
el.textContent = msg;*/
var map, infoWindow;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 0, lng: 0},
        zoom: 15
    });
    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }

    //var pinLocation = {lat: User2.movements[0].location[0] /*42.359849*/, lng: User2.movements[0].location[1] /*-71.139784*/}
    /*var startPosition = new google.maps.Marker({
     position: pinLocation,
     map: map,
     title: User2.movements[0].name
     });*/

    //var pinLocation2 = {lat: User3.movements[0].location[0] /*42.359849*/, lng: User3.movements[0].location[1] /*-71.139784*/}
    /*var startPosition2 = new google.maps.Marker({
     position: pinLocation2,
     map: map,
     title: User3.movements[0].name
     });*/

    //var pinLocation3 = {lat: User3.movements[1].location[0] /*42.359849*/, lng: User3.movements[1].location[1] /*-71.139784*/}
    /*var startPosition3 = new google.maps.Marker({
     position: pinLocation3,
     map: map,
     title: User3.movements[1].name
     });*/

    var locations = [
        //longitude, latitude, movement name, movement date
        [User2.movements[0].location[0], User2.movements[0].location[1], User2.movements[0].name, User2.movements[0].date, "FightForWomenJustice.html"],
        [User3.movements[0].location[0], User3.movements[0].location[1], User3.movements[0].name, User3.movements[0].date, "index.html"],
        [User3.movements[1].location[0], User3.movements[1].location[1], User3.movements[1].name, User3.movements[1].date, "index.html"]
    ];

    var marker, i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][0], locations[i][1]),
            map: map,
            title: locations[i][2] + " " + locations[i][3],
            //url: locations[i][4]
        });
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}

// Plots the markers.
//var pinLocation = new google.maps.LatLng(/*User2.movements.location[0]*/42.359849, /*User2.movements.location[1]*/-71.139784);
/*var pinLocation = {lat: 42.359849, lng: -71.139784}
var startPosition = new google.maps.Marker({
    position: pinLocation,
    map: map,
    title: "Hello, world!",
    icon: "maker.jpg"
});*/