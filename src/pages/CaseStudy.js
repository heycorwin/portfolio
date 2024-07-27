import styled from "styled-components";
import data from "../data.json";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProjectNav from "../components/ProjectNav";

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 960px;
  margin: var(--spacing-48) auto 0;
  padding: var(--spacing-16);

  @media (min-width: 768px) {
    margin: var(--spacing-96) auto 0;
  }

  .heroText {
    display: block;
    max-width: 450px;
    text-align: center;
    margin-bottom: var(--spacing-24);

    @media (min-width: 768px) {
      margin-bottom: var(--spacing-96);
    }
  }

  h1 {
    font-size: var(--font-size-64);
    font-weight: 350;
    letter-spacing: -2px;
    line-height: 0.95;

    @media (min-width: 768px) {
      font-size: var(--font-size-112);
      letter-spacing: -5px;
    }
  }

  p {
    margin-top: var(--spacing-32);
  }
`;

const FeaturedImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  padding: var(--spacing-32) 0;
  background: linear-gradient(180deg, #eadeda 0%, rgba(234, 222, 218, 0) 100%);
  margin: var(--spacing-64) 0;

  @media (min-width: 768px) {
    margin: 0;
    padding: var(--spacing-64) 0;
  }
`;

const FeaturedImage = styled.img`
  width: 100%;
  height: auto;

  @media (min-width: 768px) {
    width: 90%;
  }

  &.near-dev {
    margin-bottom: -150px;
    margin-right: -24px;

    @media (min-width: 768px) {
      margin-right: -50px;
    }
  }

  &.kit {
    width: 80%;
    margin-right: calc(var(--spacing-48) * -1);
    margin-bottom: -200px;

    @media (min-width: 768px) {
      width: 90%;
      margin-right: -90px;
    }
  }

  &.fora {
    width: 100%;
    margin-bottom: -150px;

    @media (min-width: 768px) {
      width: 80%;
    }
  }
`;

const Overview = styled.section`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-row-gap: var(--spacing-48);
  width: 100%;
  margin: var(--spacing-96) auto var(--spacing-48);
  padding: var(--spacing-16);

  @media (min-width: 768px) {
    grid-column-gap: var(--spacing-64);
    max-width: 960px;
    margin-bottom: var(--spacing-128);
  }

  h2 {
    font-size: var(--font-size-40);
    letter-spacing: -1px;
    grid-column: span 2;

    @media (min-width: 768px) {
      font-size: var(--font-size-56);
      letter-spacing: -1px;
    }
  }

  .overviewText {
    grid-column: span 2;

    @media (min-width: 768px) {
      grid-column: 1 / 2;
    }
  }

  p:not(:last-child) {
    margin-bottom: var(--spacing-24);
  }

  ol {
    list-style-type: numeral;
    list-style-position: inside;
    margin-bottom: var(--spacing-24);
  }

  li {
    line-height: 1.5;
    margin-bottom: var(--spacing-12);
    text-indent: -20px;
    padding-left: 20px;
  }

  .overviewMetadata {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-8);
    grid-column: span 2;
    margin-top: var(--spacing-16);

    @media (min-width: 768px) {
      grid-column: 2 / 2;
      max-width: 320px;
    }
  }

  .metadataItem {
    margin-bottom: var(--spacing-40);

    label {
      display: block;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: var(--spacing-12);
    }
  }

  .tagGroup {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-8);
  }

  .metadataTag {
    border-radius: 50px;
    background: var(--bg-secondary);
    color: var(--text-secondary);
    padding: 10px 16px;
    font-size: var(--font-size-14);
    font-weight: 500;
  }
`;

const ImageGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-8);
  margin: var(--spacing-8);

  @media (min-width: 768px) {
    gap: var(--spacing-16);
    margin: var(--spacing-16);
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) =>
    props.position === "bottom" ? "flex-start" : "center"};
  background-color: ${(props) =>
    props.theme === "light"
      ? "var(--bg-secondary)"
      : props.theme === "dark"
      ? "var(--bg-primary--dark)"
      : props.theme === "white"
      ? "white"
      : "none"};
  padding-top: ${(props) =>
    props.shadow === "none" ? "var(--spacing-96)" : "var(--spacing-64)"};
  padding-bottom: ${(props) =>
    props.position === "bottom" ? "0" : "var(--spacing-64)"};
  grid-column: span ${(props) => (props.width === "half" ? 1 : 2)};
  gap: var(--spacing-48);
  max-height: 50vw;
  overflow: hidden;
  width: 100%;

  .imageCaption {
    display: block;
    font-size: var(--font-size-14);
    font-weight: 400;
    color: var(--text-primary);
  }

  img {
    background: none;
    box-shadow: ${(props) =>
      props.shadow === "dark"
        ? "var(--diffused-shadow-dark)"
        : props.shadow === "light"
        ? "var(--diffused-shadow-light)"
        : "none"};
    max-width: 60%;
  }
`;

const CaseStudy = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const currentProject = data.projects.find((p) => p.id === projectId);
    setProject(currentProject);
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ProjectNav project={project} />

      <Hero id="project-hero">
        <span className="heroText">
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
        </span>
        <FeaturedImageWrapper>
          <FeaturedImage
            src={process.env.PUBLIC_URL + project.featuredImage.src}
            alt={project.featuredImage.alt}
            className={project.id}
          />
        </FeaturedImageWrapper>
      </Hero>

      <Overview id="project-overview">
        <h2>Overview</h2>
        <div
          className="overviewText"
          dangerouslySetInnerHTML={{ __html: project.overview }}
        />
        <div className="overviewMetadata">
          <span className="metadataItem">
            <label>Role</label>
            <span>{project.role}</span>
          </span>
          <span className="metadataItem">
            <label>Team</label>
            <span>{project.team}</span>
          </span>
          <span className="metadataItem tagGroup">
            {project.tags &&
              project.tags.map((tag, index) => (
                <span className="metadataTag" key={index}>
                  {tag}
                </span>
              ))}
          </span>
        </div>
      </Overview>
      <ImageGrid id="project-highlights">
        {project.projectImages &&
          project.projectImages.map((image, index) => {
            return (
              <ImageContainer
                key={index}
                position={image.position}
                theme={image.theme}
                width={image.width}
                shadow={image.shadow}
              >
                <img src={process.env.PUBLIC_URL + image.src} alt={image.alt} />
                {image.caption && (
                  <span className="imageCaption">{image.caption}</span>
                )}
              </ImageContainer>
            );
          })}
      </ImageGrid>
    </>
  );
};

export default CaseStudy;
