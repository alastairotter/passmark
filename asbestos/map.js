


var mymap = L.map('map').setView([-25.938977, 28.126924], 9);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 20,
        id: 'alastairotter.07i8pfkj',
        accessToken: 'pk.eyJ1IjoiYWxhc3RhaXJvdHRlciIsImEiOiJjaWc1NjM1dGYwYXV6djJtNjc5dGNqZThrIn0.SWLrLlYJWBdLvyIURec3FA'
        }).addTo(mymap);


var geojsonMarkerOptions = {
    radius: 5,
    fillColor: "Dodgerblue",
    color: "#fff",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

var geojsonMarkerOptions2 = {
    radius: 5,
    fillColor: "Crimson",
    color: "#fff",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};


new L.GeoJSON(allschools, {
   style: function (feature) {
       return {
//           color: "red"
       };
   },
     pointToLayer: function (feature, latlng) {
         
         console.log(feature);
        
        if(feature.properties.reason_for_inclusion_on_this_list === "Asbestos") { 
            return L.circleMarker(latlng, geojsonMarkerOptions);
        }
        else { 
            return L.circleMarker(latlng, geojsonMarkerOptions2);
        }
    },
   onEachFeature: function (feature, layer) {
       layer.bindPopup(feature.properties.project_name);
   }
}).addTo(mymap);
        