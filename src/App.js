import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/globalStyles.css";
import styled from "styled-components";
import Home from "./pages/Home";
import CaseStudy from "./pages/CaseStudy";

const AppContainer = styled.div`
  // Your App container styles here
`;

const Footer = styled.footer`
  padding: var(--spacing-48);

  .footerWrapper {
    justify-content: space-between;
    align-items: flex-end;
    display: flex;
    max-width: 1400px;
    margin: 0 auto;
  }

  .footerLinks {
    display: flex;
    gap: var(--spacing-64);
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: var(--text-primary--dark);
    padding: var(--spacing-4) 0;

    &:hover {
      color: var(--text-secondary--dark);
    }
  }
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/casestudy/:projectId" element={<CaseStudy />} />
        </Routes>
        <Footer>
          <div className="footerWrapper">
            <p>© 2024 Corwin Harrell</p>
            <span className="footerLinks">
              <ul>
                <li>
                  <a href="#work">Work</a>
                </li>
                <li>
                  <a href="#experience">Experience</a>
                </li>
                <li>
                  <a href="mailto:hello@corwinharrell.com">Contact</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="https://twitter.com/heycorwin" target="_blank">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://github.com/heycorwin" target="_blank">
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/corwinharrell/"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </span>
          </div>
        </Footer>
      </AppContainer>
    </Router>
  );
}

export default App;
