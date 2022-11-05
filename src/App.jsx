import { Routes, Route } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { About } from "./views/About/About";
import { Story } from "./views/Story/Story";
import { Products } from "./views/Products/Products";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <BrowserRouter basename="/amazing-coffee">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/story" element={<Story />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;