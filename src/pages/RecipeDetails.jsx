import { useEffect, useState } from "react";
import { getMealDetails } from "../service/theMealDB";
import { useParams } from "react-router-dom";

const RecipesPage = () => {
  const { id } = useParams();
  const [recipe, setMeal] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const meal = await getMealDetails(id);
      if (meal) {
        setMeal(meal);
      }
      setLoading(false);
    }

    fetchData();
  }, [id]);

  const renderIngredients = () => {
    return Array.from({ length: 20 }).map((_, i) => {
      const ingredient = recipe[`strIngredient${i + 1}`];
      const measure = recipe[`strMeasure${i + 1}`];

      if (ingredient && ingredient.trim()) {
        return (
          <p key={i} className="text-gray-800 dark:text-gray-200 transition-colors duration-200">
            - {ingredient} {measure && `(${measure})`}
          </p>
        );
      }

      return null;
    });
  };

  if (loading) {
    return (
      <div className="p-6 text-center bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-200">
        <p className="text-gray-600 dark:text-gray-400 transition-colors duration-200">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12 w-full">
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="w-full h-80 object-cover rounded-xl"
          />
        </div>

        <div className="flex place-items-center justify-between flex-wrap gap-4">
          <h1 className="font-bold text-3xl text-gray-900 dark:text-white transition-colors duration-200">
            {recipe.strMeal}{" "}
            <span className="text-xl text-orange-600 dark:text-orange-400 transition-colors duration-200">
              ({recipe.strCategory}){" "}
              <span className="text-black dark:text-white transition-colors duration-200">
                | {recipe.strArea}
              </span>
            </span>
          </h1>
          {recipe.strTags && (
            <p className="font-bold text-gray-900 dark:text-white transition-colors duration-200">
              Tags:{" "}
              <span className="text-orange-600 dark:text-orange-400 text-xl transition-colors duration-200">
                {recipe.strTags}
              </span>
            </p>
          )}
        </div>

        <div className="py-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-200">
            Ingredients:
          </h2>
          <div className="text-xl space-y-2 pt-2">{renderIngredients()}</div>

          <h2 className="text-2xl font-bold pt-4 text-gray-900 dark:text-white transition-colors duration-200">
            Instructions:
          </h2>
          <p className="mt-2 whitespace-pre-line text-gray-800 dark:text-gray-200 transition-colors duration-200">
            {recipe.strInstructions}
          </p>
        </div>

        {recipe.strYoutube && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white transition-colors duration-200">
              Video Tutorial
            </h3>
            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${recipe.strYoutube.split("=")[1]}`}
              title="YouTube video"
              frameBorder="0"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipesPage;