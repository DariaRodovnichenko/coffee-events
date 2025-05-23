import { HeroSection } from "./components/HeroSection";
import { WorkShopCards } from "./components/WorkShopCards";
import { Footer } from "./components/Footer";
import { AboutUs } from "./components/AboutUs";
import "./App.css";
import { ForWho } from "./components/ForWho";

export const App = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <ForWho/>
      <WorkShopCards />
      <Footer />
    </>
  );
};
