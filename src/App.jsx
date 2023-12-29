import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./component/Header"
import "./globalCSS.css"

// Page routes
import { useState } from "react"
import styled from "styled-components"
import Footer from "./component/Footer"
import AboutPage from "./pages/AboutPage"
import BookingPage from "./pages/BookingPage"
import ContactPage from "./pages/ContactPage"
import HomePage from "./pages/HomePage"
import MenuPage from "./pages/MenuPage"
import ServicesPage from "./pages/ServicesPage"
import Team from "./pages/TeamPage"
import TestimonialPage from "./pages/TestimonialPage"

function App() {

  const [background, setBackground] = useState(false)

  const styles = {
    backgroundColor: background ? "white" : "black",
    transition: "ease-in-out 0.5s"
  }
  function _handleBAckground() {
    if (window.scrollY > 300) {
      setBackground(true)
    } else {
      setBackground(false)
    }
  }

  window.addEventListener("scroll", _handleBAckground)
  return (
    <AppContainer style={styles} >
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
          <Route path="/testimonial" element={<TestimonialPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppContainer>
  )
}

export default App

const AppContainer = styled.main`
    .animation-reveal{
    transform: translateY(0px);
    animation: REVEAL linear both;
    animation-timeline: view(block);
    animation-range: cover 0% entry 100%;
    view-timeline-inset: 30%;
    opacity: 0;
    transition: ease 1s;
    background: black;
  }

  @keyframes REVEAL{
    0%{
      opacity: 0;
      transform: translateY(300px);
    }
    50%{
      opacity: 0.5;
      transform: translateY(150px);
    }
    100%{
        background: white;
        opacity: 1;
        transform: translateY(0px);
      }
  }

  .animation-scale{
    transition: ease 2s;
    animation: SCALE ease-in-out 4s both;
    opacity: 0;
    position: relative;
    top: -200px;
    left: -10px;
  }

  @keyframes SCALE{
    0%{
      overflow: hidden;
      width: 0%;
    }
    50%{
      display: block;
      opacity: 0.5;
    }
    100%{
      overflow: visible;
      left: 0px;
      top: 0px;
      position: relative;
      opacity: 1;
      width: 100%;
    }
  }
`