document.addEventListener("DOMContentLoaded", function () {
    const locationElement = document.getElementById("location");
    const temperatureElement = document.getElementById("temperature");
    const descriptionElement = document.getElementById("description");
    const containerElement = document.querySelector(".container");
    const iconElement = document.getElementById("icon");
  
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
  
        // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
        const apiKey = "618a4292522a19670669f6891782444f";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            const location = data.name;
            const temperature = Math.round(data.main.temp - 273.15); // Convert temperature from Kelvin to Celsius
            const description = data.weather[0].description;
            const iconCode = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
  
            locationElement.innerHTML = `${location}`;
            temperatureElement.textContent = `${temperature}°C`;
            descriptionElement.textContent = `${description}`;
            iconElement.src = iconUrl;
  
            // Update background color and font color based on weather conditions
            if (description.includes("clear")) {
              containerElement.style.backgroundColor = "red";
              containerElement.style.color = "black"; // Set font color to black for clear weather
            } else if (description.includes("cloud")) {
              containerElement.style.backgroundColor = "gray";
              containerElement.style.color = "white"; // Set font color to white for cloudy weather
            } else if (description.includes("rain")) {
              containerElement.style.backgroundColor = "blue";
              containerElement.style.color = "black"; // Set font color to black for rainy weather
            } else if (description.includes("snow")) {
              containerElement.style.backgroundColor = "white";
              containerElement.style.color = "black"; // Set font color to black for snowy weather
            } else if (description.includes("thunderstorm")) {
              containerElement.style.backgroundColor = "purple";
              containerElement.style.color = "white"; // Set font color to white for thunderstorms
            } else {
              containerElement.style.backgroundColor = "orange";
              containerElement.style.color = "black"; // Set default font color to black
            }
          })
          .catch((error) => {
            console.log("Error fetching weather data:", error);
            locationElement.textContent = "Error fetching weather data.";
          });
      },
      function (error) {
        console.log("Error getting geolocation:", error);
        locationElement.textContent = "Error getting geolocation.";
      }
    );
  });
  