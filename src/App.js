import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </div>
    );
};

export default App;
