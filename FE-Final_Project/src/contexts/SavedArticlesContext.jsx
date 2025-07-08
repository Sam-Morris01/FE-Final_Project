import React, { createContext, useContext, useState, useEffect } from "react";

const SavedArticlesContext = createContext();

export const useSavedArticles = () => {
  const context = useContext(SavedArticlesContext);
  if (!context) {
    throw new Error(
      "useSavedArticles must be used within a SavedArticlesProvider",
    );
  }
  return context;
};

export const SavedArticlesProvider = ({ children }) => {
  const [savedArticles, setSavedArticles] = useState([]);

  // Load saved articles from localStorage on app start
  useEffect(() => {
    const saved = localStorage.getItem("savedArticles");
    if (saved) {
      try {
        setSavedArticles(JSON.parse(saved));
      } catch (error) {
        console.error("Error loading saved articles:", error);
        setSavedArticles([]);
      }
    }
  }, []);

  // Save articles to localStorage whenever savedArticles changes
  useEffect(() => {
    localStorage.setItem("savedArticles", JSON.stringify(savedArticles));
  }, [savedArticles]);

  const saveArticle = (article) => {
    setSavedArticles((prev) => {
      // Check if article is already saved
      const isAlreadySaved = prev.some((saved) => saved.id === article.id);
      if (isAlreadySaved) {
        return prev;
      }
      return [...prev, article];
    });
  };

  const unsaveArticle = (articleId) => {
    setSavedArticles((prev) =>
      prev.filter((article) => article.id !== articleId),
    );
  };

  const isArticleSaved = (articleId) => {
    return savedArticles.some((article) => article.id === articleId);
  };

  const value = {
    savedArticles,
    saveArticle,
    unsaveArticle,
    isArticleSaved,
  };

  return (
    <SavedArticlesContext.Provider value={value}>
      {children}
    </SavedArticlesContext.Provider>
  );
};
