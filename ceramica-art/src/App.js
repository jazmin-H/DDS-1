import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Products from "./pages/Products"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Pagos from "./pages/Pagos"
import "./styles.css"

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pagos" element={<Pagos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
