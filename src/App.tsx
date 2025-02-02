import "./App.css";
import AboutPage from "./components/about-page";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import HomePage from "./components/home-page";
import PortfolioPage from "./components/portfolio-page";

function App() {
  return (
    <>
      <Header />
      {/* <HomePage /> */}
      <AboutPage />
      <Footer />
    </>
  );
}

export default App;
