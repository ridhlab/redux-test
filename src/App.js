import logo from "./logo.svg";
import "./App.css";
/** React Router */
import { Routes, Route } from "react-router-dom";
/** Screens */
import Home from "./screens/Home";
import List from "./screens/List";

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/list" element={<List />} />
            </Routes>
        </div>
    );
}

export default App;
