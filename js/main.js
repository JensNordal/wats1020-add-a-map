//+++++++++++++++++++++++++++++++++++++++++++++++++++
// WATS1020 - Add a Map Assignment
//+++++++++++++++++++++++++++++++++++++++++++++++++++

    //Set script to run after document load
$(document).ready(function() {
    
    
    //Create map and set home location
    var map = L.map('map-container').setView([46.852, -121.760], 10);
    
	var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
    
    
    //Create map layers and set attributes
    var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 18, attribution: osmAttrib});

    var satLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap"   target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a     href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img  src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
        subdomains: ['otile1','otile2','otile3','otile4']
});

    var drawLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap"   target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a     href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img  src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
        subdomains: ['otile1','otile2','otile3','otile4']
});

    var mapLayers = {
        "Satellite": satLayer,
        "Map View": drawLayer,
        "Open Street Maps": osm
}

    L.control.layers(mapLayers).addTo(map);
        satLayer.addTo(map);
    

    //Add markers, circle, and polygon to identify key areas on map
    var marker = L.marker([46.852, -121.760]).addTo(map);
        marker.bindPopup('<b>Welcome to Mt. Rainier!</b><br>This peak is 14,392 feet (4,386 m) high.<br><a href="http://www.nps.gov/mora/index.htm">Learn More</a>');
    
    var marker = L.marker([46.8244992,-121.7623382]).addTo(map);
        marker.bindPopup('<b>Liberty Cap Glacier</b><br>Elevation: 14,100 feet (4,300 m)<br><a href="https://en.wikipedia.org/wiki/Liberty_Cap_Glacier">Learn More</a>');
    
    var marker = L.marker([46.8570898,-121.7964111]).addTo(map);
        marker.bindPopup('<b>Little Tahoma Peak</b><br>Elevation: 11,138 ft (3,395 m)<br><a href="https://en.wikipedia.org/wiki/Little_Tahoma_Peak">Learn More</a>');
    
    var marker = L.marker([46.8494191,-121.7255489]).addTo(map);
        marker.bindPopup('<b>Cowlitz Chimneys South</b><br>Elevation: 7,605 ft (2,318 m)<br><a href="https://www.mountaineers.org/explore/routes-places/main-cowlitz-chimney">Learn More</a>');
    
    var marker = L.marker([46.8490996,-121.326563]).addTo(map);
        marker.bindPopup('<b>Bumping Lake</b><br>Elevation: 3,426 ft (1,044 m)<br><a href="http://www.wta.org/go-hiking/hikes/bumping-lake">Learn More</a>');
 
    var circle = L.circle([46.8915901,-121.6137634], 700, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        }).addTo(map);
        circle.bindPopup('<b>Crystal Mountain Ski Area</b><br><a href="https://en.wikipedia.org/wiki/Crystal_Mountain_(Washington)")>Learn More</a>');
    
    var polygon = L.polygon([
        [46.7858338,-121.725148],
        [46.7913057,-121.726635],
        [46.7896897,-121.735622],
        ]).addTo(map);
        polygon.bindPopup('<b>Paradise, WA - Inn and Natural Area</b><br><a href="https://en.wikipedia.org/wiki/Paradise,_Washington")>Learn More</a>');
     
    var popup = L.popup();

    
    //Listen for clicks on map and return lat/long in popup
    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }
     
    
/*    //+++++++++++++++++++++++++++++++++++++++++++++++++++
    // Navbar dropdown menu fix (opens tabs from navbar)
    //+++++++++++++++++++++++++++++++++++++++++++++++++++
    
    var tabs$ = $("#tabs a");

    $(window).on("hashchange", function() {
        var hash = window.location.hash, // Get current hash
            menu_item$ = tabs$.filter("[href=" + hash + "]"); // Get the menu element

        menu_item$.tab("show"); // Call bootstrap to show the tab
        }).trigger("hashchange");
    
 */
    
});


    