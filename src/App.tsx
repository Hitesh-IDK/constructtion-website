import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./components/about-page";
import ContactPage from "./components/contact-page";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import HomePage from "./components/home-page";
import PortfolioPage from "./components/portfolio-page";
import TestimonialsPage from "./components/testimonials-page";
import { useState } from "react";
import Wrapper from "./util/scroll-to-top";

function App() {
  const [headerModalOpen, setHeaderModalOpen] = useState(false);

  return (
    <>
      <Header isMenuOpen={headerModalOpen} setIsMenuOpen={setHeaderModalOpen} />
      <Wrapper setIsOpen={setHeaderModalOpen}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;
