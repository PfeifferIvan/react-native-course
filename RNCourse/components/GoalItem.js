import { Pressable, StyleSheet, Text, View } from "react-native";
import DeleteIconSVG from "./DeleteItem";

function GoalItem(props) {
  return (
    <View style={styles.listItemView}>
      <Text style={styles.listItem}>{props.text}</Text>
      <View style={styles.deleteIconView}>
        <Pressable
          onPress={() => props.onDeleteItem(props.id)}
          android_ripple={{ color: "#dddddd" }}
          style={({ pressed }) => pressed && styles.pressedItem}
        >
          <DeleteIconSVG />
        </Pressable>
      </View>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  listItemView: {
    flexDirection: "row",
    backgroundColor: "#5e0acc",
    borderRadius: 6,
    alignItems: "center",
    marginTop: 10,
  },

  listItem: {
    margin: 8,
    padding: 8,
    color: "white",
    flex: 9,
  },

  deleteIconView: {
    flex: 1,
    margin: 8,
    padding: 6,
  },

  pressedItem: {
    opacity: 0.5,
  },
});
