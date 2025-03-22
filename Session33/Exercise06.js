        const weatherData = {
            "hà nội": { temperature: 25, humidity: 68, windSpeed: 5, description: "Có mây", icon: "☁️" },
            "hồ chí minh": { temperature: 32, humidity: 75, windSpeed: 7, description: "Nắng", icon: "☀️" },
            "đà nẵng": { temperature: 28, humidity: 82, windSpeed: 12, description: "Mưa rào", icon: "🌧️" }
        };

        function searchWeather() {
            const cityInput = document.getElementById("city-input").value.trim().toLowerCase();
            const resultDiv = document.getElementById("weather-result");
            
            if (weatherData[cityInput]) {
                const weather = weatherData[cityInput];
                document.getElementById("city-name").innerText = cityInput.charAt(0).toUpperCase() + cityInput.slice(1);
                document.getElementById("weather-icon").innerText = weather.icon;
                document.getElementById("temperature").innerText = `${weather.temperature}°C`;
                document.getElementById("description").innerText = weather.description;
                document.getElementById("humidity").innerText = `Độ ẩm: ${weather.humidity}%`;
                document.getElementById("wind-speed").innerText = `Tốc độ gió: ${weather.windSpeed} km/h`;
                resultDiv.classList.remove("d-none");
            } else {
                alert("Không tìm thấy thành phố trong dữ liệu!");
                resultDiv.classList.add("d-none");
            }
        }