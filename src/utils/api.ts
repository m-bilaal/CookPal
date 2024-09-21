import axios from 'axios';
import { Recipe } from '../types/recipe';

export const fetchRecipes = async (): Promise<Recipe[]> => {
  try {
    const response = await axios.get('https://dummyjson.com/recipes');
    return response.data.recipes;
  } catch (error) {
    console.error('Error fetching recipes', error);
    return [];
  }
};

export const fetchRecipeById = async (id: number): Promise<Recipe | null> => {
  try {
    const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipe', error);
    return null;
  }
};
