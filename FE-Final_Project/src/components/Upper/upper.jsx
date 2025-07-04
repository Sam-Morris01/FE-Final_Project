import "./upper.css";
import Header from "../Header/Header.jsx";
import SearchForm from "../SearchForm/SearchForm.jsx";
import React from "react";
import { useUser } from "../../contexts/UserContext";

function Upper({ onSignUpClick, onSearch }) {
  const { isLoggedIn } = useUser();

  return (
    <div className="hero-background">
      <section className="upper">
        <Header onSignUpClick={onSignUpClick} />
        <SearchForm onSearch={onSearch} />
      </section>
    </div>
  );
}

export default Upper;
