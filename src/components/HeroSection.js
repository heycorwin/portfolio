import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const flowerBookImageUrl = `${process.env.PUBLIC_URL}/images/flowerbook.png`;
const heroShadowUrl = `${process.env.PUBLIC_URL}/images/heroshadow.png`;

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: var(--spacing-24);
  height: 90vh;
  width: 100%;
  overflow: hidden;

  @media (min-width: 768px) {
    flex-direction: row;
    max-height: 90vw;
    gap: 5%;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
    gap: 10%;
    margin: 0 auto;
    overflow: visible;
  }
`;

const HeroImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  flex: 100%;
  z-index: -999;
  will-change: transform, opacity, filter; /* Optimize for animations */

  @media (min-width: 768px) {
    height: 110%;
    flex: 1;
    margin-top: calc(var(--spacing-32) * -1);
  }

  @media (min-width: 1024px) {
    flex: 1.5;
  }

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    transform-origin: center;
    will-change: transform, opacity, filter; /* Optimize for animations */

    @media (min-width: 768px) {
      width: 300%;
      margin-left: -125%;
    }
  }

  &::before {
    background-image: url(${flowerBookImageUrl});
    transform: translateY(${(props) => props.offsetY * -0.2}px);
  }

  &::after {
    bottom: 0;
    background-image: url(${heroShadowUrl});
    z-index: -1000;
    opacity: ${(props) => Math.max(0, 0.35 - props.offsetY * 0.001)};
    filter: blur(${(props) => Math.max(0, props.offsetY * 0.025)}px);
  }
`;

const HeroWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column-reverse;
  padding: var(--spacing-24);

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
