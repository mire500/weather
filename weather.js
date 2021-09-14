Strict;
window.addEventListener("load", () =>{
    let lon;
    let lat;
    let apiKey = "0dbd5cc2d4e1c62bb4957333f305aac4";

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
    lon = position.coords.longtitude;
    lat = position.coords.latitude;



        const api =  `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apikey}`
        

            fetch(api)
            .then(response =>  { 
                return response.json()})
            .then((data )=> {
                console.log(data);
                // const { temperature, summery } = data.currently;
                // temperatureDegree.textContent = temperature;
                // temperatureDegree.textContent = summary;
            });
        });
    }
function setIcons(icon, iconID){
    const skycon = new skycons ({colour: "white"})
    const currentIcon = 
    // setting up
    iconDisplay.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
}
});