import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const flowerBookImageUrl = `${process.env.PUBLIC_URL}/images/flowerbook.png`;

const HeroWrapper = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 0 auto 0 30%;
  padding: 0 var(--spacing-24);
`;

const Hero = styled.section`
  position: relative;
  will-change: transform; /* Optimize for animations */

  &::before,
  &::after {
    will-change: transform, opacity; /* Optimize for animations */
  }

  &::before {
    content: "";
    position: absolute;
    top: -25px;
    left: -450px;
    width: 95vh;
    height: 95vh;
    max-height: 1000px;
    background-image: url(${flowerBookImageUrl});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: auto;
    transform-origin: center;
    z-index: -999;
    transform: translateY(${(props) => props.offsetY * -0.2}px) rotate(13deg);
  }

  &::after {
    content: "";
    position: absolute;
    top: 96vh;
    left: -300px;
    width: 55vh;
    border-radius: 100%;
    background-color: #e1d5d0;
    z-index: -1000;
    height: ${(props) => Math.max(25, 85 - props.offsetY * 0.15)}px;
    opacity: ${(props) => Math.max(0, 1 - props.offsetY * 0.001)};
    transform: translateX(${(props) => props.offsetY * -0.1}px);
  }

  h1 {
    position: relative;
    font-size: var(--font-size-56);
    font-weight: 350;
    color: var(--text-primary);
    letter-spacing: -2px;
    line-height: 1.2;
    word-spacing: 0.1em;
    font-feature-settings: "salt" on;
    max-width: 900px;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 200px 0;

  a {
    width: auto;
    font-weight: 500;
    font-size: var(--font-size-16);
    text-decoration: none;
    color: var(--violet-100);
    letter-spacing: -0.25px;
    margin-top: var(--spacing-56);

    &::after {
      content: "→";
      font-size: 1.25rem;
      margin-left: var(--spacing-4);
    }

    &:hover {
      color: var(--violet-200);

      &::after {
        margin-left: var(--spacing-8);
    }
  }
`;

const HeroSection = ({ offsetY }) => {
  return (
    <Hero id="Hero" offsetY={offsetY}>
      <HeroWrapper>
        <Navigation />
        <HeroContent>
          <h1>
            Corwin Harrell is a product designer cultivating beautiful &
            thoughtfully designed software with startup founders & product
            teams.
          </h1>

          <a className="contactLink" href="mailto:hello@corwinharrell.com">
            Get in Touch
          </a>
        </HeroContent>
      </HeroWrapper>
    </Hero>
  );
};

export default HeroSection;
