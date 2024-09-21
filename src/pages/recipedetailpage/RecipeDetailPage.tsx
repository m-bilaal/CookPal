import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipeById } from "../../utils/api";
import { Recipe } from "../../types/recipe";
import "./RecipeDetailPage.css";
import logo from "../../assets/images/logo.png";
import Banner from "../../components/banner/Banner";

const RecipeDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    if (id) {
      fetchRecipeById(parseInt(id)).then((data) => setRecipe(data));
    }
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe-detail">
      <div className="searchInputCon">
        <img src={logo} alt="Cookpal Logo" className="logo" />
      </div>
      <Banner />
      <div className="recipeDetailsWrapper">
        <div className="recipeDetailsCol1">
          <h2>{recipe.name}</h2>
          <p>{recipe.instructions}</p>
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <img
          className="recipeDetailsCol2"
          src={recipe.image}
          alt={recipe.name}
        />
      </div>
    </div>
  );
};

export default RecipeDetailPage;
