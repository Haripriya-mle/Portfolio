import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import PortfolioDetails from "./pages/PortfolioDetails";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  useEffect(() => {
    const loadScript = (src: string) => {
      return new Promise<void>((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
        document.body.appendChild(script);
      });
    };
    const loadScriptsSequentially = async () => {
      try {
        await loadScript("/assets/vendor/bootstrap/js/bootstrap.bundle.min.js");
        await loadScript("/assets/vendor/aos/aos.js");
        await loadScript("/assets/vendor/typed.js/typed.umd.js");
        await loadScript("/assets/vendor/purecounter/purecounter_vanilla.js");
        await loadScript("/assets/vendor/waypoints/noframework.waypoints.js");
        await loadScript("/assets/vendor/swiper/swiper-bundle.min.js");
        await loadScript("/assets/vendor/glightbox/js/glightbox.min.js");
        await loadScript("/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js");
        await loadScript("/assets/vendor/isotope-layout/isotope.pkgd.min.js");
        await loadScript("/assets/js/main.js");
      } catch (error) {
        console.error(error);
      }
    };

    loadScriptsSequentially();

    return () => {
      // Cleanup: Remove all dynamically added scripts
      document.querySelectorAll("script").forEach((script) => {
        if (script.src.includes("/assets/vendor") || script.src.includes("/assets/js")) {
          script.remove();
        }
      });
    };
  }, []);

  return (
    <Router>
      <Navbar name="Haripriya" logo="/src/assets/img/logo.png" />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<PortfolioDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <ScrollTop />
      <Footer />
    </Router>
  );
};

export default App;
