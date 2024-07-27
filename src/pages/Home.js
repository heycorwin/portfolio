import React, { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import WorkSection from "../components/WorkSection";
import ExperienceSection from "../components/ExperienceSection";

const Home = () => {
  // Parallax effect for Hero background image
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    requestAnimationFrame(() => {
      setOffsetY(window.scrollY);
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <HeroSection offsetY={offsetY} />
      <WorkSection />
      <ExperienceSection />
    </>
  );
};

export default Home;
