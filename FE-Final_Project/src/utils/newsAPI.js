import { newsApiBaseUrl, NEWS_API_KEY } from "./helpers";

// NewsAPI function
export const searchNews = async (query) => {
  if (NEWS_API_KEY === "your-news-api-key-here") {
    throw new Error(
      "Please configure your NewsAPI key in the environment variables",
    );
  }

  const today = new Date().toISOString().split("T")[0];
  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];

  const params = new URLSearchParams({
    q: query,
    apiKey: NEWS_API_KEY,
    from: sevenDaysAgo,
    to: today,
    pageSize: 100,
  });

  const response = await fetch(`${newsApiBaseUrl}?${params}`);

  if (!response.ok) {
    throw new Error(`NewsAPI error: ${response.status}`);
  }

  return response.json();
};
