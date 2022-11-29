import { Link } from "react-router-dom";
import "../clock.css";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">

      <div className="flex border border-green-500 w-1/2 p-8 mx-auto my-auto">

        <div className="text-wrapper border border-blue-500 p-4">
          <h1>Welcome to my Github.io homepage!</h1>

          <p>Much of my previous work belongs to individual companies and is not publicly accessible or hosted and maintained by another web development company, so I have developed this website as a prototype to display my design and development programming abilities.</p>

          <p>I saw the tick-tock concept online as a gif and thought it would be an exciting way to display some basic HTML and CSS skills.</p>

          <p>My slightly more exciting prototype is a small <Link to="/routing-app/weather-app">Weather App</Link>, which utilises the browser's geolocation functions to send the latitude and longitude to open-meteo.com and gets back real-time weather data via API.</p>
        </div>

        <div className="clock-wrapper flex items-center justify-center p-4">
          <div id="clock">
            <div id="t">t</div>
            <div id="i-o">
              <div id="hand-0">i</div>
              <div id="hand-1">o</div>
              <div id="hand-2">i</div>
              <div id="hand-3">o</div>
              <div id="hand-4">i</div>
              <div id="hand-5">o</div>
              <div id="hand-6">i</div>
              <div id="hand-7">o</div>
              <div id="hand-8">i</div>
              <div id="hand-9">o</div>
              <div id="hand-10">i</div>
              <div id="hand-11">o</div>
            </div>
            <div id="ck">
              <div>c</div>
              <div>k</div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Home;