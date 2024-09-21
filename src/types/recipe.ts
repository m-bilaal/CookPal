export interface Recipe {
    id: number;
    name: string;
    instructions: string;
    ingredients: string[];
    tags: string[];
    rating: number;
    prepTimeMinutes: number;
    image: string;
    mealType: string;
    cookTimeMinutes: number;
  }
  