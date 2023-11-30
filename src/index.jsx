import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/" element={<Home />} />
                    <Route path="inicio" element={<Home />} />
                    <Route path="detalle/:id" element={<Detail/>} />
                    <Route path="contacto" element={<Contact />} />
                    <Route path="favoritos" element={<Favs />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
