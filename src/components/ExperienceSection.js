import React from "react";
import styled from "styled-components";
import data from "../data.json";
import { Link } from "react-router-dom";

const Resume = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-64);
  padding: var(--spacing-128) var(--spacing-24);

  @media (min-width: 768px) {
    max-width: 640px;
    margin: 0 auto;
  }

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

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  .jobDuration {
    color: var(--text-secondary);
    margin-bottom: var(--spacing-16);

    @media (min-width: 768px) {
      flex: 1;
    }
  }

  .job {
    @media (min-width: 768px) {
      flex: 2.5;
    }
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

const ExperienceSection = () => {
  return (
    <Resume>
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
    </Resume>
  );
};

export default ExperienceSection;
