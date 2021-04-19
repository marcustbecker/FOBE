<?php
$con=mysqli_connect("45.55.136.114","FOBE_S2021","FOBE11358","FOBE_S2021");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Restaurant Results</title>
    <script src="http://maps.google.com/maps/api/js?sensor=false"></script>
    
    <script>
    var marker;
      function initialize() {
        var infoWindow = new google.maps.InfoWindow;
        
        var map_Options = {
          mapTypeId: google.maps.MapTypeId.ROADMAP
        } 
 
        var map = new google.maps.Map(document.getElementById('map-canvas'), map_Options);
        var bounds = new google.maps.LatLngBounds();

        // Retrieve data from database
        <?php
            $query = mysqli_query($con,"select * from locations");
            while ($data = mysqli_fetch_array($query))
            {
                $id = $data['id'];
                $lat = $data['lat'];
                $lon = $data['lon'];
                $name = $data['name'];
                $addr = $data['addr'];

                echo ("addMarker($lat, $lon, '<p> <b>Store Name:</b> $name <br> <br> <b>Address:</b> $addr</p>');\n");                        
            }
          ?>
          
        // Making marker 
        function addMarker(lat, lng, info) {
            var location = new google.maps.LatLng(lat, lng);
            bounds.extend(location);
            var marker = new google.maps.Marker({
                map: map,
                position: location
            });       
            map.fitBounds(bounds);
            bindInfoWindow(marker, map, infoWindow, info);
         }
        
        // Displays information on markers that are clicked
        function bindInfoWindow(marker, map, infoWindow, html) {
          google.maps.event.addListener(marker, 'click', function() {
            infoWindow.setContent(html);
            infoWindow.open(map, marker);
          });
        }
 
        }
      google.maps.event.addDomListener(window, 'load', initialize);
    
    </script>
    
</head>
<body onload="initialize()"> 
<div class="container" style="margin-top:10px"> 

    <div class="row">
        <div class="col-md-8">
            <div class="panel panel-default">
                <div class="panel-heading">
                  <h3> Restaurant Results </h3>
                </div>
                    <div class="panel-body">
                        <div id="map-canvas" style="width: 700px; height: 600px;"></div>
                    </div>
            </div>
        </div>  
    </div>
</div>  
</body>
</html>