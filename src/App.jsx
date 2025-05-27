import { HeroSection } from "./components/HeroSection";
import { WorkShopCards } from "./components/WorkShopCards";
import { Footer } from "./components/Footer";
import { AboutUs } from "./components/AboutUs";
import { ForWho } from "./components/ForWho";
import { Toaster } from "react-hot-toast";

import "./App.css";

export const App = () => {
  return (
    <>
      <Toaster position="top-right" />
      <HeroSection />
      <AboutUs />
      <ForWho />
      <WorkShopCards />
      <Footer />
    </>
  );
};
