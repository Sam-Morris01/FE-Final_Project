import React, { useState } from 'react';
import './NewsCard.css';
import trashIcon from '../../assets/trash.svg';
import bookmarkIcon from '../../assets/bookmark.svg';
import savedBookmarkIcon from '../../assets/saved-bookmark.svg';
import { useUser } from '../../contexts/UserContext';
import { useSavedArticles } from '../../contexts/SavedArticlesContext';

const NewsCard = ({ image, category, date, title, description, source, id, url, onDelete }) => {
  const { isLoggedIn } = useUser();
  const { isArticleSaved, saveArticle, unsaveArticle } = useSavedArticles();
  const [showTooltip, setShowTooltip] = useState(false);
  
  const isSaved = isArticleSaved(id);

  const handleSaveToggle = () => {
    if (!isLoggedIn) {
      // If not logged in, you might want to show a login modal
      return;
    }

    if (isSaved) {
      unsaveArticle(id);
    } else {
      saveArticle({ id, image, category, date, title, description, source, url });
    }
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(id);
    }
  };

  const handleCardClick = () => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  // Determine which icon to show
  const getIconSrc = () => {
    if (!isLoggedIn) {
      return bookmarkIcon;
    }
    if (isSaved) {
      // On main page, show saved bookmark. On saved articles page, show trash
      return onDelete ? trashIcon : savedBookmarkIcon;
    }
    return bookmarkIcon;
  };

  // Determine click handler
  const getClickHandler = () => {
    if (!isLoggedIn) {
      return handleSaveToggle; // Will do nothing since not logged in
    }
    if (isSaved) {
      return onDelete ? handleDelete : handleSaveToggle; // Trash on saved page, toggle on main page
    }
    return handleSaveToggle;
  };

  return (
    <div className="news-card" onClick={handleCardClick}>
      <div className="news-card__image-wrapper">
        <img src={image} alt={title} className="news-card__image" />
        {isLoggedIn && (
          <span className="news-card__category">{category}</span>
        )}
        <div
          className="news-card__action-tooltip-wrapper"
          onMouseEnter={() => {
            if (!isLoggedIn) setShowTooltip(true);
            if (isLoggedIn && isSaved && onDelete) setShowTooltip(true);
          }}
          onMouseLeave={() => setShowTooltip(false)}
          onClick={(e) => e.stopPropagation()} // Prevent card click when clicking bookmark
        >
          <button 
            className="news-card__action-button" 
            onClick={getClickHandler()} 
            aria-label={isLoggedIn && isSaved && onDelete ? "Delete" : "Save"}
          >
            <img 
              className="news-card__action-icon" 
              src={getIconSrc()} 
              alt={isLoggedIn && isSaved && onDelete ? "Delete" : "Save"}
            />
          </button>
          {!isLoggedIn && showTooltip && (
            <div className="news-card__tooltip">
              Sign in to save articles
            </div>
          )}
          {isLoggedIn && isSaved && onDelete && showTooltip && (
            <div className="news-card__tooltip">
              Remove from saved
            </div>
          )}
        </div>
      </div>
      <div className="news-card__content">
        <div className="news-card__date">{date}</div>
        <h2 className="news-card__title">{title}</h2>
        <p className="news-card__description">{description}</p>
        <div className="news-card__source">{source}</div>
      </div>
    </div>
  );
};

export default NewsCard;
