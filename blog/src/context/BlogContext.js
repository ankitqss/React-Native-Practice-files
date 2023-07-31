import { createContext, useReducer, useState } from "react";

const BlogContext = createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [...state, { title: `Blog Post ${state.length + 1}` }];
    case "delete_blogpost":
      return state.slice(0, state.length - 1);
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, []);

  const addBlogPost = () => {
    dispatch({ type: "add_blogpost" });
  };

  const deleteBlogPost = () => {
    dispatch({ type: "delete_blogpost" });
  };
  return (
    <BlogContext.Provider
      value={{ data: blogPosts, addBlogPost, deleteBlogPost }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
