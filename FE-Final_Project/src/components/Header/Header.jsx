import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";
import close from "../../assets/icons/back.svg";
import logout from "../../assets/icons/logout.svg";
import logoutBlack from "../../assets/icons/logout-black.svg";
import closeIcon from "../../assets/icons/close.svg";
import { useUser } from "../../contexts/UserContext";

function Header({ onSignUpClick, isModalOpen, onModalClose }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { currentUser, isLoggedIn, handleLogout } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = () => {
    navigate("/");
    setSidebarOpen(false);
  };

  const handleSavedArticlesClick = () => {
    navigate("/saved-articles");
    setSidebarOpen(false);
  };

  const handleSignInClick = () => {
    onSignUpClick();
    setSidebarOpen(false);
  };

  const handleLogoutClick = () => {
    handleLogout();
    setSidebarOpen(false);
  };

  // Determine which page we're on
  const isOnSavedArticlesPage = location.pathname === "/saved-articles";
  const isOnHomePage = location.pathname === "/";

  // Create dynamic header classes
  const headerClasses = `header ${isOnSavedArticlesPage ? "header--theme-saved-articles" : ""} ${isOnHomePage ? "header--home" : ""}`;

  return (
    <header className={headerClasses}>
      <a href="/" className="header__name" aria-label="NewsExplorer Home">NewsExplorer</a>
      <nav className="header__auth-buttons">
        <ul className="header__nav-list">
          <li>
            <button
              className={`home-button header__auth-button ${isOnHomePage ? "header__auth-button--active" : ""}`}
              onClick={handleHomeClick}
            >
              Home
            </button>
          </li>
          {isLoggedIn ? (
            <>
              <li>
                <button
                  className={`saved-news-button header__auth-button ${isOnSavedArticlesPage ? "header__auth-button--active" : ""}`}
                  onClick={handleSavedArticlesClick}
                >
                  Saved articles
                </button>
              </li>
              <li>
                <button
                  className="logout-button header__auth-button"
                  onClick={handleLogout}
                >
                  {currentUser?.name}
                  <img
                    src={isOnSavedArticlesPage ? logoutBlack : logout}
                    alt="Logout"
                    className="header__logout-icon"
                  />
                </button>
              </li>
            </>
          ) : (
            <li>
              <button
                className="sign-in-button header__auth-button"
                onClick={onSignUpClick}
              >
                Sign In
              </button>
            </li>
          )}
        </ul>
      </nav>
      {/* Hamburger menu: only show if modal is not open */}
      {!isModalOpen && (
        <button
          className="header__hamburger"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="header__hamburger-bar" />
          <span className="header__hamburger-bar" />
        </button>
      )}
      {/* Close icon: only show on mobile if modal is open */}
      {isModalOpen && (
        <button className="header__modal-close" onClick={onModalClose}>
          <img src={closeIcon} alt="Close modal" />
        </button>
      )}
      {sidebarOpen && (
        <div
          className="header__sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        >
          <nav className="header__sidebar">
            <button
              className="header__sidebar-close"
              aria-label="Close menu"
              onClick={() => setSidebarOpen(false)}
            >
              <img src={close} alt="Close menu" />
            </button>
            <div className="header__sidebar-content">
              <span className="header__name header__sidebar-title">
                NewsExplorer
              </span>
              <button
                className="home-button header__sidebar-link"
                onClick={handleHomeClick}
              >
                Home
              </button>
              {isLoggedIn ? (
                <>
                  <span className="header__user-name">{currentUser?.name}</span>
                  <button
                    className="saved-news-button header__sidebar-link"
                    onClick={handleSavedArticlesClick}
                  >
                    Saved articles
                  </button>
                  <button
                    className="sign-in-button header__sidebar-signin"
                    onClick={handleLogoutClick}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  className="sign-in-button header__sidebar-signin"
                  onClick={handleSignInClick}
                >
                  Sign In
                </button>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
