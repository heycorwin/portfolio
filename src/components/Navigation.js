import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";

const Nav = styled.nav`
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  top: 0;
  font-weight: 450;
  font-size: var(--font-size-16);
  padding-top: var(--spacing-32);

  @media (min-width: 480px) {
    margin-left: calc(var(--spacing-16) * -1);
  }

  &::before {
    content: "/";
    display: none;
    margin-right: var(--spacing-12);
    padding: 4px 0;

    @media (min-width: 480px) {
      display: inline-block;
    }
  }

  ul {
    display: flex;
    flex-direction: row;
    gap: var(--spacing-16);

    @media (min-width: 480px) {
      flex-direction: column;
      gap: 0;
    }

    &:hover li {
      opacity: 0.5;

      &:hover {
        opacity: 1;
      }
    }
  }

  a {
    text-decoration: none;
    color: var(--text-primary);
    margin: 0;
    display: block;
    padding: 4px 0;

    &:hover {
      opacity: 1;
    }
  }
`;

const Navigation = () => (
  <Nav>
    <ul>
      <li>
        <Link smooth to="#work">
          Work
        </Link>
      </li>
      <li>
        <Link smooth to="#experience">
          Experience
        </Link>
      </li>
      <li>
        <Link to="mailto:hello@corwinharrell.com">Contact</Link>
      </li>
    </ul>
  </Nav>
);

export default Navigation;
