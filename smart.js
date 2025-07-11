async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const apiKey = "YOUR_API_KEY"; // 🔁 Replace this with your actual OpenWeatherMap API key

  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    // Populate weather data
    document.getElementById("cityName").textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById("temp").textContent = data.main.temp;
    document.getElementById("desc").textContent = data.weather[0].description;
    document.getElementById("humidity").textContent = data.main.humidity;

    // Show the weather card
    document.getElementById("weatherCard").classList.remove("hidden");
  } catch (error) {
    alert(error.message);
    document.getElementById("weatherCard").classList.add("hidden");
  }
}
