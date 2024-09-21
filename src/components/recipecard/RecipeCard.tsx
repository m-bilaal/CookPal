import React from "react";
import { Recipe } from "../../types/recipe";
import "./RecipeCard.css";
import { Link } from "react-router-dom";
import PrepIcon from "../../assets/images/prepIcon.svg";
import RatingStar from "../../assets/images/ratingStar.svg";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <Link to={`/recipe/${recipe.id}`}>
        <div>
          <img src={recipe.image} alt={recipe.name} />
          <div className="recipeDetails1">
            <h2>{recipe.name}</h2>
            <p>Reviews: {recipe.rating}</p>
          </div>
          <div className="recipeDetails2">
            <p>
              <img src={PrepIcon} alt="Preparation Time" />
              {recipe.prepTimeMinutes} minutes
            </p>
            <p>{recipe.mealType}</p>
          </div>
          <div className="ratingStar">
            <img src={RatingStar} alt="Star" />
            <img src={RatingStar} alt="Star" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RecipeCard;
