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
var map, infoWindow;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 0, lng: 0},
        zoom: 12
    });
    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
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
var pinLocation = new google.maps.LatLng( , );
var startPosition = new google.maps.Marker({
    position: pinlocation,
    map: venueMap,
    icon: " "
});
