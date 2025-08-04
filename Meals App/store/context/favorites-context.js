import { createContext, useEffect } from "react";
import { useState } from "react";

export const FavoriteContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoriteContextProvider({ children }) {
  const [favoriteMealsId, setFavoritesMealsId] = useState([]);

  function addFavorite(id) {
    setFavoritesMealsId((currentFavId) => [...currentFavId, id]);
  }

  function removeFavorite(id) {
    setFavoritesMealsId((currentFavId) =>
      currentFavId.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids: favoriteMealsId,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContextProvider;
