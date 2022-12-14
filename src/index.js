import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import WeatherApp from "./pages/weather-app";
import NoPage from "./pages/nopage";
import "./style.css";

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/routing-app" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="/routing-app/weather-app" element={<WeatherApp />}/>
            <Route path="/routing-app/*" element={<NoPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);