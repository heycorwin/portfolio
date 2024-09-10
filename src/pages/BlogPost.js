import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import posts from "../posts/posts.json";

const BlogPostWrapper = styled.div`
  max-width: 640px;
  padding: var(--spacing-16);
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: var(--spacing-48);
  }

  h2 {
    font-size: var(--font-size-24);
    font-weight: 450;
    margin: var(--spacing-40) 0 var(--spacing-16);
  }

  p {
    margin-bottom: var(--spacing-16);
  }

  a {
    color: var(--violet-200);
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
    margin: var(--spacing-32) 0;
    border-radius: 4px;
  }

  ol {
    list-style-type: numeral;
    list-style-position: inside;
    margin: var(--spacing-24) 0;
  }

  li {
    line-height: 1.5;
    margin-bottom: var(--spacing-12);
    text-indent: -20px;
    padding-left: 20px;

    p {
      margin: 0;
      display: inline;
    }
  }

  strong {
    font-weight: 600;
  }

  em {
    font-style: italic;
  }
`;

const PostHeader = styled.div`
  margin-bottom: var(--spacing-56);

  h1 {
    font-size: var(--font-size-32);
    font-weight: 400;
    color: var(--text-primary);
    letter-spacing: -1px;
    line-height: 1.2;
    word-spacing: 0.1em;
    font-feature-settings: "salt" on;
    max-width: 900px;
    margin-bottom: var(--spacing-16);

    @media (min-width: 1200px) {
      font-size: var(--font-size-40);
      line-height: 1.15;
    }
  }
`;

const PostMetadata = styled.div`
  display: flex;
  align-items: center;
  font-size: var(--font-size-14);
  color: var(--text-secondary);
`;

const calculateReadingTime = (text) => {
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
};

const ReadingTime = ({ content }) => {
  const readingTime = calculateReadingTime(content);
  return <span>{readingTime} min read</span>;
};

const BlogPost = () => {
  const { postId } = useParams();
  const [content, setContent] = useState("");
  const post = posts.find((post) => post.id === postId);

  useEffect(() => {
    import(`../posts/${postId}.md`)
      .then((res) => fetch(res.default))
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, [postId]);

  return (
    <BlogPostWrapper>
      <PostHeader>
        <h1>{post?.title}</h1>
        <PostMetadata>
          <span>
            by&nbsp;
            <a href="https://corwinharrell.com/" target="_blank">
              Corwin Harrell&nbsp;･&nbsp;
            </a>
          </span>
          <ReadingTime content={content} />
          <span>&nbsp;･&nbsp;{post?.date}</span>
        </PostMetadata>
      </PostHeader>
      <ReactMarkdown>{content}</ReactMarkdown>
    </BlogPostWrapper>
  );
};

export default BlogPost;
