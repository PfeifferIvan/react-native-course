import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "../MealItem";
import { useNavigation } from "@react-navigation/native";

export default function MealList({ items }) {
  const navigation = useNavigation();

  function renderMealItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealDetails", { id: itemData.item.id });
    }
    const itemDataItem = itemData.item;
    const mealItemProps = {
      title: itemDataItem.title,
      imgURL: itemDataItem.imageUrl,
      duration: itemDataItem.duration,
      affordability: itemDataItem.affordability,
      complexity: itemDataItem.complexity,
      onPress: pressHandler,
    };

    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
