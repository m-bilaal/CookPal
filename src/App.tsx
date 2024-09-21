import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import RecipeDetailPage from './pages/recipedetailpage/RecipeDetailPage';
import Header from './components/header/Header';
import './App.css';
import Footer from './components/footer/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetailPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
