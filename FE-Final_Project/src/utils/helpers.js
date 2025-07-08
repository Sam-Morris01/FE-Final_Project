// Utility functions for API responses
export const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

// Base URL configuration
export const baseUrl = "http://localhost:3001";

// NewsAPI configuration
export const newsApiBaseUrl =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

export const NEWS_API_KEY =
  import.meta.env.VITE_NEWS_API_KEY || "4ba9f3c896c741d2bd3938af33727824";
