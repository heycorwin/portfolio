import React from "react";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
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
              <ul>
                <li>
                  <Link to="https://twitter.com/heycorwin" target="_blank">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link to="https://github.com/heycorwin" target="_blank">
                    Github
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.linkedin.com/in/corwinharrell/"
                    target="_blank"
                  >
                    LinkedIn
                  </Link>
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
