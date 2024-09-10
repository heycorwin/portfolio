import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import posts from "../posts/posts.json"; // We'll create this JSON file next

const BlogWrapper = styled.div`
  // Add your styles here
`;

const Blog = () => {
  return (
    <BlogWrapper>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
            <span>{post.date}</span>
          </li>
        ))}
      </ul>
    </BlogWrapper>
  );
};

export default Blog;
