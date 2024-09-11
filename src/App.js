import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import "./styles/globalStyles.css";
import styled from "styled-components";
import Home from "./pages/Home";
import CaseStudy from "./pages/CaseStudy";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Footer = styled.footer`
  padding: var(--spacing-24);

  .footerWrapper {
    justify-content: space-between;
    align-items: flex-start;
    display: flex;
    flex-direction: column-reverse;
    max-width: 1400px;
    gap: var(--spacing-48);

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: flex-end;
    }
  }

  .footerLinks {
    display: flex;
    gap: var(--spacing-48);
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
          <Route path="/blog/:postId" element={<BlogPost />} />
        </Routes>
        <Footer>
          <div className="footerWrapper">
            <p>© 2024 Corwin Harrell</p>
            <span className="footerLinks">
              <ul>
                <li>
                  <Link smooth to="/#work">
                    Work
                  </Link>
                </li>
                <li>
                  <Link smooth to="/#experience">
                    Experience
                  </Link>
                </li>
                <li>
                  <a href="mailto:hello@corwinharrell.com">Contact</a>
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
