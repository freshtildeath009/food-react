import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./component/Header"
import "./globalCSS.css"

// Page routes
import Footer from "./component/Footer"
import AboutPage from "./pages/AboutPage"
import BookingPage from "./pages/BookingPage"
import ContactPage from "./pages/ContactPage"
import HomePage from "./pages/HomePage"
import MenuPage from "./pages/MenuPage"
import ServicesPage from "./pages/ServicesPage"
import Team from "./pages/TeamPage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicesPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
