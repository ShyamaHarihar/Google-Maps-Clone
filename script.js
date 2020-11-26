mapboxgl.accessToken = "pk.eyJ1Ijoic2h5YW1hNDciLCJhIjoiY2toeXZ4MWE1MGViZjJyb2F5bWE1eWtxciJ9.X_0QxMXZc60PyTWME5Yysg";
navigator.geolocation.getCurrentPosition(
    successLocation,errorLocation,
    {enableHighAccuracy:true
    })
//an api which requests us like can this device use location 
function successLocation(position)
{
    
    setup([position.coords.longitude,position.coords.latitude])

}
//the current longitude and latitude is used
function errorLocation()
{
setup([-2.24,53.69])
}
//some random location
function setup(center)
{
        const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center:center,
        zoom:15
        //to see the zoom level street view ,city view anything
        }) 
        const nav = new mapboxgl.NavigationControl();
        map.addControl(nav);
        var directions = new MapboxDirections({
            accessToken:mapboxgl.accessToken ,
        //adding controls like zoom in, zoom out , compas etc    
          });
          
         
          
          map.addControl(directions, 'top-left');
}

//street view maps and access token from account created
//zoom into current location
