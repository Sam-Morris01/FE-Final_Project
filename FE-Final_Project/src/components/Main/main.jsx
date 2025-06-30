import "./main.css";
import Upper from "../Upper/upper.jsx";
import NewsCard from "../NewsCard/NewsCard.jsx";
import NewsCardList from "../NewsCardList/NewsCardList.jsx";
import Preloader from "../Preloader/Preloader.jsx";
import NothingFound from "../NothingFound/NothingFound.jsx";
import { useState } from "react";
import { searchNews } from "../../utils/newsAPI";

function Main({ onSignUpClick }) {
  const [visibleCards, setVisibleCards] = useState(3);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (query) => {
    setIsLoading(true);
    setError("");
    setHasSearched(true);
    setVisibleCards(3);

    try {
      const response = await searchNews(query);

      if (response.articles && response.articles.length > 0) {
        // Transform the API response to match our card structure
        const transformedArticles = response.articles.map((article, index) => ({
          id: index + 1,
          image:
            article.urlToImage ||
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
          category: "News",
          date: new Date(article.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          title: article.title,
          description: article.description,
          source: article.source.name,
          url: article.url,
        }));

        setArticles(transformedArticles);
      } else {
        setArticles([]);
        setError("Nothing Found");
      }
    } catch (err) {
      console.error("Search error:", err);
      setError(
        "Sorry, something went wrong during the request. Please try again later.",
      );
      setArticles([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleShowMore = () => {
    setVisibleCards((prev) => Math.min(prev + 3, articles.length));
  };

  const displayedCards = articles.slice(0, visibleCards);
  const hasMoreCards = visibleCards < articles.length;

  return (
    <main className="main">
      <Upper onSignUpClick={onSignUpClick} onSearch={handleSearch} />
      {hasSearched && (
        <div className="main__news-cards">
          {isLoading ? (
            <Preloader />
          ) : error === "Nothing Found" ? (
            <NothingFound />
          ) : error ? (
            <p className="main__error">{error}</p>
          ) : articles.length > 0 ? (
            <>
              <h2 className="main__news-cards-title">Search results</h2>
              <NewsCardList
                cards={displayedCards}
                onShowMore={handleShowMore}
                hasMoreCards={hasMoreCards}
              />
            </>
          ) : null}
        </div>
      )}
    </main>
  );
}

export default Main;
