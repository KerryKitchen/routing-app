import { Link } from "react-router-dom";

const WeatherApp = () => {
  return (
    <div>
      <h1>Weather App</h1>
      <Link to="/routing-app/">Home</Link>
    </div>
  );
};

export default WeatherApp;