# Weather-Chrome-Extension
The Weather Extension is a Chrome extension that displays weather information for your location. It provides real-time weather data, including temperature, weather description, and wind speed, in a simple and elegant popup window.

## Features

- Fetches weather data based on your geolocation
- Displays current temperature in Celsius
- Shows weather description and wind speed
- Dynamically changes background color based on weather conditions
- Uses weather icons for visual representation

## Installation

1. Clone or download the repository.
2. Open Google Chrome browser.
3. Navigate to `chrome://extensions` in the address bar.
4. Enable Developer mode (toggle switch on the top right).
5. Click on "Load unpacked" button.
6. Select the cloned/downloaded folder of the extension.

## Usage

1. Click on the Weather Extension icon in the Chrome toolbar.
2. The popup window will display the current weather information for your location.
3. The background color changes based on weather conditions.
4. The weather icon, temperature, location, description, and wind speed are shown.

Note: Get your own API key from https://openweathermap.org/api and replace it in line 14 of `popup.js` file. The current API is specific to the owner and woudnot work for other users.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

