import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
} from "react-native";
import { useContext, useLayoutEffect } from "react";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import IconButton from "../components/IconButton";
import { FavoriteContext } from "../store/context/favorites-context";

export default function MealDetailScreen({ route, navigation }) {
  const favoriteMealCtx = useContext(FavoriteContext);

  const mealId = route.params.id;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const isFavorite = favoriteMealCtx.ids.includes(mealId);

  function pressHeaderButtonHandler() {
    if (isFavorite) {
      favoriteMealCtx.removeFavorite(mealId);
    } else {
      favoriteMealCtx.addFavorite(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={pressHeaderButtonHandler}
            icon={isFavorite ? "star" : "star-outline"}
            color={"white"}
          />
        );
      },
    });
  }, [navigation, pressHeaderButtonHandler]);

  return (
    <View>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={{ color: "white" }}
      />
      <Text style={styles.subtitle}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <Text style={styles.detailText} key={ingredient}>
          {ingredient}
        </Text>
      ))}
      <Text style={styles.subtitle}>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <Text style={styles.detailText} key={step}>
          {step}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "350",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    margin: 4,
    padding: 6,
    fontWeight: "bold",
    textAlign: "center",
    borderBottomColor: "white",
    borderBottomWidth: 2,
  },
});
