import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  top: 0;
  font-weight: 450;
  padding-top: var(--spacing-48);
  margin-left: calc(var(--spacing-16) * -1);
  font-size: var(--font-size-16);

  &::before {
    content: "/";
    display: inline-block;
    margin-right: var(--spacing-12);
    padding: 4px 0;
  }

  ul {
    display: flex;
    flex-direction: column;

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
        <Link href="#work">Work</Link>
      </li>
      <li>
        <Link href="#experience">Experience</Link>
      </li>
      <li>
        <Link href="mailto:hello@corwinharrell.com">Contact</Link>
      </li>
    </ul>
  </Nav>
);

export default Navigation;
