import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from './components/home/Home'

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/rooms" element={<App />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);