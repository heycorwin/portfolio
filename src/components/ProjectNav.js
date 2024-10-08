import React from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import data from "../data.json";

const Nav = styled.nav`
  top: 0;
  padding: var(--spacing-16);
  z-index: 1000;
  font-weight: 500;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding: var(--spacing-24);
    position: fixed;
  }

  ol {
    display: flex;
    flex-direction: row;
    gap: var(--spacing-8);
  }

  li {
    display: flex;
  }

  a {
    text-decoration: none;
    color: var(--text-secondary);
    margin-right: var;
    opacity: 0.5;

    &:hover {
      color: var(--text-primary);
      opacity: 1;
    }
  }

  .backLink {
    display: flex;

    &::before {
      content: "←";
      font-size: 1.25rem;
      margin-right: var(--spacing-8);
    }
  }
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-8);
  font-weight: 500;

  a {
    text-decoration: none;
    color: var(--text-secondary);
  }
`;

const DisabledLink = styled.span`
  opacity: 0.5;
`;

const ProjectPagination = ({ projectId }) => {
  const projectIndex = data.projects.findIndex(
    (project) => project.id === projectId
  );
  const previousProject =
    projectIndex > 0 ? data.projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < data.projects.length - 1
      ? data.projects[projectIndex + 1]
      : null;

  return (
    <PaginationWrapper>
      {previousProject ? (
        <Link to={`/casestudy/${previousProject.id}`}>Prev</Link>
      ) : (
        <DisabledLink>Prev</DisabledLink>
      )}
      <span>/</span>
      {nextProject ? (
        <Link to={`/casestudy/${nextProject.id}`}>Next</Link>
      ) : (
        <DisabledLink>Next</DisabledLink>
      )}
    </PaginationWrapper>
  );
};

const ProjectNav = ({ project }) => (
  <Nav>
    <ol>
      <li>
        <Link className="backLink" to="/">
          Home
        </Link>
      </li>
      <span>/</span>
      <li>
        {project.numeral} {project.title}
      </li>
    </ol>
    <ProjectPagination projectId={project.id} />
  </Nav>
);

export default ProjectNav;
