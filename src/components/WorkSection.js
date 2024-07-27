import React from "react";
import styled from "styled-components";
import data from "../data.json";
import { Link } from "react-router-dom";

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

  @media (min-width: 768px) {
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;

    &:nth-child(odd) {
      flex-direction: row-reverse;
    }

    &:first-child .numeral {
      left: var(--spacing-32);
    }
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

  @media (min-width: 768px) {
    width: 50vw;
    height: 50vw;
  }

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
`;

const ProjectSummary = styled.div`
  padding: 0 var(--spacing-24);
  position: relative;

  @media (min-width: 768px) {
    width: 50%;

    padding-left: var(--spacing-72);
  }

  .numeral {
    display: none;
    color: var(--violet-100);
    left: var(--spacing-24);
    margin-top: calc(var(--spacing-16) * -1);
    position: absolute;
    font-family: "Clash Display", sans-serif;
    font-size: var(--font-size-24);
    font-weight: 500;
    letter-spacing: 1px;

    @media (min-width: 768px) {
      display: block;
    }
  }

  h3 {
    max-width: 250px;
    line-height: 1;
    font-size: 30px;
    font-weight: 450;
    margin-bottom: var(--spacing-24);
    letter-spacing: -1px;

    @media (min-width: 480px) {
      font-size: var(--font-size-40);
      line-height: 1.25;
    }

    @media (min-width: 768px) {
      font-size: var(--font-size-32);
      line-height: 1.3;
    }

    @media (min-width: 1024px) {
      font-size: var(--font-size-48);
    }
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
  }
`;

const WorkSection = () => {
  return (
    <FeaturedWork>
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
  );
};

export default WorkSection;
