import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const flowerBookImageUrl = `${process.env.PUBLIC_URL}/images/flowerbook.png`;

const Hero = styled.section`
  display: flex;
  flex-direction: column;
`;

const HeroImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 450px;
  overflow: hidden;
  z-index: -999;
  will-change: transform; /* Optimize for animations */

  &::before,
  &::after {
    will-change: transform, opacity; /* Optimize for animations */
  }

  &::before {
    content: "";
    position: absolute;
    width: 425px;
    height: 450px;
    left: 0px;
    bottom: 15px;
    background-image: url(${flowerBookImageUrl});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: auto;
    transform-origin: center;
    transform: translateY(${(props) => props.offsetY * -0.2}px) rotate(13deg);

    @media (min-width: 480px) {
      height: 95vh;
      top: -25px;
      left: -450px;
    }
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    height: 50px;
    border-radius: 100%;
    background-color: #e1d5d0;
    z-index: -1000;
    transform-origin: center;
    height: ${(props) => Math.max(0, 50 - props.offsetY * 0.15)}px;
    width: ${(props) => Math.max(200, 300 - props.offsetY * 0.15)}px;
    opacity: ${(props) => Math.max(0, 1 - props.offsetY * 0.0025)};

    @media (min-width: 480px) {
      transform: translateX(${(props) => props.offsetY * -0.1}px);
    }
  }
`;

const HeroWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column-reverse;
  padding: var(--spacing-24);
  margin-top: var(--spacing-24);

  @media (min-width: 480px) {
    flex-direction: column;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;

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
      font-size: var(--font-size-40);
    }

    @media (min-width: 768px) {
      font-size: var(--font-size-48);
    }

    @media (min-width: 992px) {
      font-size: var(--font-size-56);
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

    @media (min-width: 480px) {
      display: inline-block;
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
