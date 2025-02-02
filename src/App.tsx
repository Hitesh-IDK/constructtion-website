import "./App.css";
import AboutPage from "./components/about-page";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import HomePage from "./components/home-page";
import PortfolioPage from "./components/portfolio-page";
import TestimonialsPage from "./components/testimonials-page";

function App() {
  return (
    <>
      <Header />
      <TestimonialsPage />
      <Footer />
    </>
  );
}

export default App;
