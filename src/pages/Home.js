import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import data from "../data.json";

const FeaturedWork = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 100px 0 150px;
  gap: 150px;
  width: 100%;
  max-width: 1400px;
`;

const Project = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 var(--spacing-96);
  gap: var(--spacing-24);

  &:nth-child(odd) {
    flex-direction: row-reverse;
  }

  &:first-child .numeral {
    top: var(--spacing-12);
  }

  &:nth-child(2) { margin-left: -100px;
`;

const FeaturedImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
`;

const FeaturedImage = styled.img`
  width: 100%;
  object-fit: contain;

  &.near-dev {
    margin-bottom: -175px;
  }

  &.kit {
    width: 70%;
    margin-bottom: -150px;
    margin-right: -150px;
  }

  &.fora {
    margin-bottom: -150px;
  }
`;

const ProjectSummary = styled.div`
  width: 40%;
  padding-left: var(--spacing-40);
  padding-top: var(--spacing-48);
  position: relative;

  .numeral {
    color: var(--violet-100);
    left: 0;
    top: 0;
    position: absolute;
    font-family: 'Clash Display', sans-serif;
    font-size: var(--font-size-32);
    font-weight: 450;
    letter-spacing: 0;
    text-align: right;
  }

  h3 {
    max-width: 250px;
    line-height: 1;font-size: var(--font-size-56);
    margin-bottom: var(--spacing-24);
    letter-spacing: -2px;
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
  max-width: 672px;
  margin: 0 auto;
  padding: var(--spacing-128) 0;

  header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: var(--spacing-96);

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
    font-size: var(--font-size-40);
    font-weight: 450;
    letter-spacing: -0.5px;
  }

  .resumeItem {
    display: flex;
    margin: var(--spacing-64) 0;
    gap: var(--spacing-64);
  }

  .jobDuration {
    color: var(--text-secondary);
    flex: 0 0 100px;
  }

  .jobTitle {
    color: var(--text-primary);
    font-weight: 500;
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
            <FeaturedImageWrapper>
              <FeaturedImage
                src={process.env.PUBLIC_URL + project.featuredImage.src}
                alt={project.featuredImage.alt}
                className={project.id}
              />
            </FeaturedImageWrapper>
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
                <span className="jobTitle">{exp.title}</span>
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
