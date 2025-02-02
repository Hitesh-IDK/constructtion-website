import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./components/about-page";
import ContactPage from "./components/contact-page";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import HomePage from "./components/home-page";
import PortfolioPage from "./components/portfolio-page";
import TestimonialsPage from "./components/testimonials-page";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
