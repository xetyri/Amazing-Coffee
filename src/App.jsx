import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { About } from "./views/About/About";
import { Story } from "./views/Story/Story";
import { Products } from "./views/Products/Products";
import { Nav } from "./components/Nav/Nav";

function App() {
    return (
        <BrowserRouter basename="/amazing-coffee">
            <Nav/>
            <Routes>
                <Route path="/" element={<Nav />} />
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/story" element={<Story />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;