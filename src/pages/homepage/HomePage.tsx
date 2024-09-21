import React, { useEffect, useState } from "react";
import { fetchRecipes } from "../../utils/api";
import RecipeCard from "../../components/recipecard/RecipeCard";
import SearchInput from "../../components/searchinput/SearchInput";
import { Recipe } from "../../types/recipe";
import "./HomePage.css";
import logo from "../../assets/images/logo.png";
import Banner from "../../components/banner/Banner";

const HomePage: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchRecipes().then((data) => setRecipes(data));
  }, []);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="searchInputCon">
        <img src={logo} alt="Cookpal Logo" className="logo" />
        <SearchInput
          searchTerm={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Banner />
      <div className="recipe-list">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
