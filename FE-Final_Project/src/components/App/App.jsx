import { Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from '../Footer/footer'
import About from '../About/about'
import Header from '../Header/Header'
import Main from '../Main/main'
import SavedArticles from '../SavedArticles/SavedArticles'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import ModalWithForm from '../ModalWithForm/ModalWithForm'
import { UserProvider, useUser } from '../../contexts/UserContext'
import { SavedArticlesProvider } from '../../contexts/SavedArticlesContext'
import AuthModalManager from '../AuthModalManager/AuthModalManager'
import { useState } from 'react'

function Home({ onSignUpClick }) {
  return (
    <>
      <Main onSignUpClick={onSignUpClick} />
      <About />
    </>
  );
}

function AppContent() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleSignInClick = () => {
    setIsAuthModalOpen(true);
  };

  const handleCloseAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <>
      <Header 
        onSignUpClick={handleSignInClick} 
        isModalOpen={isAuthModalOpen} 
        onModalClose={handleCloseAuthModal}
      />
      <Routes>
        <Route path="/" element={<Home onSignUpClick={handleSignInClick} />} />
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
      />
    </>
  )
}

function App() {
  return (
    <UserProvider>
      <SavedArticlesProvider>
        <AppContent />
      </SavedArticlesProvider>
    </UserProvider>
  )
}

export default App
