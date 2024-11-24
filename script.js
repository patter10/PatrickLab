// Placeholder data, can replace with live API calls
document.getElementById("city").textContent = "Belmopan";
document.getElementById("country").textContent = "Belize";
document.getElementById("condition").textContent = "clear sky";
document.getElementById("ispName").textContent = "Central TV And Internet Limited";

// Future Improvement: Fetch data dynamically
/*
fetch('https://api.ipgeolocation.io/ipgeo?apiKey=YOUR_API_KEY')
  .then(response => response.json())
  .then(data => {
    document.getElementById('city').textContent = data.city;
    document.getElementById('country').textContent = data.country_name;
    // Example: Using a weather API
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data.city}&appid=YOUR_WEATHER_API_KEY`);
  })
  .then(response => response.json())
  .then(weatherData => {
    document.getElementById('condition').textContent = weatherData.weather[0].description;
  })
  .catch(error => console.error('Error fetching data:', error));
*/
