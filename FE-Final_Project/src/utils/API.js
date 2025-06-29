import { getToken } from "./auth";

const baseUrl = "http://localhost:3001";

// NewsAPI configuration
const newsApiBaseUrl = process.env.NODE_ENV === "production"
  ? "https://nomoreparties.co/news/v2/everything"
  : "https://newsapi.org/v2/everything";

const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY || "4ba9f3c896c741d2bd3938af33727824";

export const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

// NewsAPI function
export const searchNews = async (query) => {
  if (NEWS_API_KEY === "your-news-api-key-here") {
    throw new Error("Please configure your NewsAPI key in the environment variables");
  }

  const today = new Date().toISOString().split('T')[0];
  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  
  const params = new URLSearchParams({
    q: query,
    apiKey: NEWS_API_KEY,
    from: sevenDaysAgo,
    to: today,
    pageSize: 100
  });

  const response = await fetch(`${newsApiBaseUrl}?${params}`);
  
  if (!response.ok) {
    throw new Error(`NewsAPI error: ${response.status}`);
  }
  
  return response.json();
};

// Mock authentication functions for frontend-only development
export const authorize = (email, password) => {
  // Pretend we did a fetch request that gave us back a token
  return new Promise((resolve, reject) => {
    // Simulate API delay
    setTimeout(() => {
      // Mock validation - you can customize these credentials
      if (email === "test@example.com" && password === "password123") {
        resolve({ 
          token: "mock-jwt-token-" + Date.now(),
          user: {
            _id: "mock-user-id",
            name: "Sam Morris",
            email: email
          }
        });
      } else {
        reject(new Error("Invalid email or password"));
      }
    }, 1000);
  });
};

export const checkToken = (token) => {
  // Pretend we did a fetch request that gave us back a user
  return new Promise((resolve, reject) => {
    // Simulate API delay
    setTimeout(() => {
      // Mock token validation
      if (token && token.startsWith("mock-jwt-token-")) {
        resolve({
          data: { 
            name: "Sam Morris", 
            email: "test@example.com", 
            _id: "mock-user-id",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
          },
        });
      } else {
        reject(new Error("Invalid token"));
      }
    }, 500);
  });
};



export function saveArticle(article) { // article is a result from the NewsAPI
  return new Promise((resolve, reject) => {
    // Simulate API delay
    setTimeout(() => {
      resolve({
        _id: "65f7371e7bce9e7d331b11a0", // another one made up from the generator
        url: article.url, // Use the properties the newsAPI gives you, I just made these up
        title: article.title,
        imageUrl: article.urlToImage,
        description: article.description,
        publishedAt: article.publishedAt,
        source: article.source
        // whatever other properties from the newsAPI-given article object you saved to the database
      });
    }, 600);
  });
}

export function deleteArticle(articleId) {
  return new Promise((resolve, reject) => {
    // Simulate API delay
    setTimeout(() => {
      resolve({ message: "Article deleted successfully" });
    }, 400);
  });
}

// Legacy mock functions (keeping for backward compatibility)
export const mockSignIn = async ({ email, password }) => {
  return authorize(email, password);
};

export const mockCheckToken = async (token) => {
  const response = await checkToken(token);
  return response.data;
};

export { baseUrl };