import React from "react";
import "./SavedArticles.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import { useSavedArticles } from "../../contexts/SavedArticlesContext";
import { useUser } from "../../contexts/UserContext";
import Header from "../Header/Header";

function SavedArticles() {
  const { savedArticles, unsaveArticle } = useSavedArticles();
  const { currentUser } = useUser();

  const handleDeleteCard = (cardId) => {
    unsaveArticle(cardId);
  };

  return (
    <>
      <Header />
    <main className="saved-articles">
      <div className="saved-articles__container">
        {savedArticles.length === 0 ? (
          <p className="saved-articles__subtitle">
            Your saved articles will appear here
          </p>
        ) : (
          <>
            <header className="saved-articles__header">
              <h3 className="saved-articles__title">Saved articles</h3>
              <h4 className="saved-articles__subtitle">
                {currentUser?.name}, you have {savedArticles.length} saved
                article{savedArticles.length !== 1 ? "s" : ""}
              </h4>
              <p className="saved-articles__keyword">
                By keywords:
                <span className="saved-articles__keyword-text">Nature,</span>
                <span className="saved-articles__keyword-text">
                  Yellowstone,
                </span>
                <span className="saved-articles__keyword-text">
                  {" "}
                  and 2 other
                </span>
              </p>
            </header>
          </>
        )}
      </div>
      <section className="saved-articles__cards">
        <div className="saved-articles__cards-inner">
          <NewsCardList cards={savedArticles} onDeleteCard={handleDeleteCard} />
        </div>
      </section>
    </main>
    </>
  );
}

export default SavedArticles;
