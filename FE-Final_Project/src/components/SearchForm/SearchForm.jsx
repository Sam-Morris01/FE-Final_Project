import "./SearchForm.css";
import { useUser } from "../../contexts/UserContext";
import { useState } from "react";

function SearchForm({ onSearch }) {
  const { isLoggedIn } = useUser();
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!searchQuery.trim()) {
      setError("Please enter a keyword");
      return;
    }

    if (onSearch) {
      onSearch(searchQuery.trim());
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    if (error) setError("");
  };

  return (
    <section className="search-section">
      <div className="search-section__text">
        <h1 className="search-form__title">What's going on in the world?</h1>
        <p className="search-form__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
      </div>
      <div className="search-form">
        <form className="search-form__form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="search-form__input"
            placeholder="Enter topic"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <button type="submit" className="search-form__button">
            Search
          </button>
        </form>
        {error && <p className="search-form__error">{error}</p>}
      </div>
    </section>
  );
}

export default SearchForm;
