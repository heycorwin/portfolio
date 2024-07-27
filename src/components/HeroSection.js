import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const flowerBookImageUrl = `${process.env.PUBLIC_URL}/images/flowerbook.png`;

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    max-height: 90vw;
    gap: 10vw;
  }

  @media (min-width: 1024px) {
    gap: 15vw;
    height: 95vh;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const HeroImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 60vh;
  overflow: hidden;
  z-index: -999;
  will-change: transform; /* Optimize for animations */

  @media (min-width: 768px) {
    flex: 1;
    height: 100%;
    overflow: visible;
  }

  @media (min-width: 1024px) {
    flex: 1;
  }

  &::before,
  &::after {
    will-change: transform, opacity; /* Optimize for animations */
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 105%;
    height: 100%;
    bottom: 16px;
    margin-right: -24px;
    background-image: url(${flowerBookImageUrl});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    transform-origin: center;
    transform: translateY(${(props) => props.offsetY * -0.2}px) rotate(13deg);

    @media (min-width: 768px) {
      width: 80vh;
      height: 100%;
      margin-left: -300px;
      margin-right: auto;
      bottom: 75px;
    }

    @media (min-width: 1024px) {
      width: 90vh;
      height: 100%;
      margin-left: -300px;
      bottom: 50px;
    }

    @media (min-width: 1200px) {
      margin-left: -300px;
    }
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    border-radius: 100%;
    background-color: #e1d5d0;
    z-index: -1000;
    transform-origin: center;
    height: ${(props) => Math.max(0, 70 - props.offsetY * 0.15)}px;
    width: ${(props) => Math.max(30, 36 - props.offsetY * 0.05)}vh;
    opacity: ${(props) => Math.max(0, 1 - props.offsetY * 0.0025)};

    @media (min-width: 768px) {
      margin-left: -350px;
      width: ${(props) => Math.max(40, 50 - props.offsetY * 0.05)}vh;
      height: ${(props) => Math.max(0, 80 - props.offsetY * 0.15)}px;
    }

    @media (min-width: 1024px) {
      margin-left: -325px;
      width: ${(props) => Math.max(45, 50 - props.offsetY * 0.05)}vh;
    }

    @media (min-width: 1200px) {
      margin-left: -300px;
      height: ${(props) => Math.max(0, 100 - props.offsetY * 0.15)}px;
    }
  }
`;

const HeroWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column-reverse;
  padding: var(--spacing-24);
  margin-top: var(--spacing-24);

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    margin-top: 0;
    flex: 2.5;
  }

  @media (min-width: 1024px) {
    flex: 3;
    padding: var(--spacing-24) var(--spacing-24) 0 0;
  }

  @media (min-width: 1200px) {
    flex: 4;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex: 100%;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    max-width: 640px;
  }

  @media (min-width: 1200px) {
    max-width: none;
  }

  h1 {
    font-size: 28px;
    font-weight: 400;
    color: var(--text-primary);
    letter-spacing: -1px;
    line-height: 1.3;
    word-spacing: 0.1em;
    font-feature-settings: "salt" on;
    max-width: 900px;

    @media (min-width: 480px) {
      font-size: var(--font-size-32);
      line-height: 1.25;
    }

    @media (min-width: 1024px) {
      font-size: var(--font-size-40);
    }

    @media (min-width: 1200px) {
      font-size: var(--font-size-48);
      line-height: 1.2;
      font-weight: 350;
    }
  }

  a {
    display: none;
    width: auto;
    font-weight: 500;
    font-size: var(--font-size-16);
    text-decoration: none;
    color: var(--violet-100);
    letter-spacing: -0.25px;
    margin-top: var(--spacing-56);

    @media (min-width: 768px) {
      display: block;
    }

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
  }
`;

const HeroSection = ({ offsetY }) => {
  return (
    <Hero id="Hero">
      <HeroImageContainer offsetY={offsetY} />
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
