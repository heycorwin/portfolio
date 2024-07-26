import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import data from "../data.json";

const FeaturedWork = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: var(--spacing-128);
  padding: var(--spacing-128) 0;
`;

const Project = styled.div`
  display: flex;
  flex-direction: column;

  &:nth-child(odd) {
  }

  &:first-child .numeral {
    top: var(--spacing-12);
  }

  &:nth-child(2) {
  }
`;

const FeaturedImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vw;
  position: relative;
  box-sizing: border-box;
  overflow-x: hidden;
  margin-bottom: -50px;

  img {
    width: 100%;
    object-fit: contain;
    position: absolute;
  }

  &.near-dev {
    img {
      right: -15px;
    }
  }

  &.kit {
    img {
      right: 30px;
      width: 70%;
    }
  }

  &.fora {
  }
`;

const ProjectSummary = styled.div`
  padding: 0 var(--spacing-24);
  position: relative;

  .numeral {
    display: none;
    color: var(--violet-100);
    left: 0;
    top: 0;
    position: absolute;
    font-family: 'Clash Display', sans-serif;
    font-size: var(--font-size-32);
    font-weight: 450;
    letter-spacing: 0;
    text-align: right;

    @media (min-width: 480px) { display: block; }
  }

  h3 {
    max-width: 250px;
    line-height: 1;
    font-size: 30px;
    font-weight: 450;
    margin-bottom: var(--spacing-24);
    letter-spacing: -1px;
  }

  p {
    margin-bottom: var(--spacing-24);
  }

  a {
    font-weight: 500;
    text-decoration: none;
    color: var(--violet-100);
    letter-spacing: -0.25px;

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

const Experience = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-64);
  padding: var(--spacing-128) var(--spacing-24);

  header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    a {
      font-weight: 500;
      text-decoration: none;
      color: var(--violet-100);
      letter-spacing: -0.25px;

      &:hover {
        color: var(--violet-200);
      }
    }
  }

  h2 {
    font-size: 30px;
    font-weight: 450;
    letter-spacing: -0.5px;
  }

  ol {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-64);
  }

  .resumeItem {
    display: flex;
    flex-direction: column;
  }

  .jobDuration {
    color: var(--text-secondary);
    margin-bottom: var(--spacing-16);
  }

  .jobTitle {
    color: var(--text-primary);
    font-weight: 550;

    a {
      color: var(--text-primary);
      letter-spacing: -0.25px;

      &:hover {
        color: var(--text-secondary);
      }
    }
  }

  p {
    margin-top: var(--spacing-24);
  }
`;

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
      <FeaturedWork id="work">
        {data.projects.map((project, index) => (
          <Project key={index}>
            <FeaturedImageContainer className={project.id}>
              <img
                src={process.env.PUBLIC_URL + project.featuredImage.src}
                alt={project.featuredImage.alt}
              />
            </FeaturedImageContainer>
            <ProjectSummary>
              <span className="numeral">{project.numeral}</span>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <Link to={`/casestudy/${project.id}`}>View Project</Link>
            </ProjectSummary>
          </Project>
        ))}
      </FeaturedWork>
      <Experience id="experience">
        <header>
          <h2>Experience</h2>
          <Link to="https://www.linkedin.com/in/corwinharrell/" target="_blank">
            View on LinkedIn
          </Link>
        </header>
        <ol>
          {data.experience.map((exp) => (
            <li key={exp.id} className="resumeItem">
              <span className="jobDuration">{exp.duration}</span>
              <span className="job">
                <span
                  className="jobTitle"
                  dangerouslySetInnerHTML={{ __html: exp.title }}
                />
                <div
                  className="jobDescription"
                  dangerouslySetInnerHTML={{ __html: exp.description }}
                />
              </span>
            </li>
          ))}
        </ol>
      </Experience>
    </>
  );
};

export default Home;
