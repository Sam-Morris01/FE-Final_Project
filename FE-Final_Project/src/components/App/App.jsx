import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "../Footer/footer";
import About from "../About/about";
import Header from "../Header/Header";
import Main from "../Main/main";
import SavedArticles from "../SavedArticles/SavedArticles";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { UserProvider } from "../../contexts/UserContext";
import { SavedArticlesProvider } from "../../contexts/SavedArticlesContext";
import AuthModalManager from "../AuthModalManager/AuthModalManager";
import { useState } from "react";

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleOpenAuthModal = () => setIsAuthModalOpen(true);
  const handleCloseAuthModal = () => setIsAuthModalOpen(false);

  const handleOpenSuccessModal = () => setIsSuccessModalOpen(true);
  const handleCloseSuccessModal = () => setIsSuccessModalOpen(false);

  // New: close both modals
  const handleCloseAllModals = () => {
    setIsAuthModalOpen(false);
    setIsSuccessModalOpen(false);
  };

  return (
    <UserProvider>
      <SavedArticlesProvider>
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Main
                  onSignUpClick={handleOpenAuthModal}
                  isModalOpen={isAuthModalOpen || isSuccessModalOpen}
                  onModalClose={handleCloseAllModals}
                />
                <About />
              </>
            } 
          />
          <Route
            path="/saved-articles"
            element={
              <ProtectedRoute>
                <SavedArticles />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
        <AuthModalManager
          isOpen={isAuthModalOpen}
          onClose={handleCloseAuthModal}
          isSuccessModalOpen={isSuccessModalOpen}
          onOpenSuccessModal={handleOpenSuccessModal}
          onCloseSuccessModal={handleCloseSuccessModal}
        />
      </SavedArticlesProvider>
    </UserProvider>
  );
}

export default App;
