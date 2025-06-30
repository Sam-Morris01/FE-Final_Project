import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard.jsx";

function NewsCardList({
  cards = [],
  onShowMore,
  hasMoreCards = false,
  onDeleteCard,
}) {
  return (
    <div className="news-card-list__container">
      <section className="news-card-list">
        {cards.map((card) => (
          <NewsCard
            key={card.id}
            id={card.id}
            image={card.image}
            category={card.category}
            date={card.date}
            title={card.title}
            description={card.description}
            source={card.source}
            url={card.url}
            onDelete={onDeleteCard}
          />
        ))}
      </section>
      {hasMoreCards && (
        <button className="news-card-list__show-more" onClick={onShowMore}>
          Show more
        </button>
      )}
    </div>
  );
}

export default NewsCardList;
