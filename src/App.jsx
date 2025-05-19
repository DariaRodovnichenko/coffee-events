import { HeroSection } from "./components/HeroSection";
import { WorkShopCards } from "./components/WorkShopCards";
import { Footer } from "./components/Footer";
import { AboutUs } from "./components/AboutUs";
import "./App.css";

export const App = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <WorkShopCards />
      <Footer />
    </>
  );
};
