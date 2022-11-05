import { Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";
import { About } from "./views/About";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <BrowserRouter basename="/amazing-coffee">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;