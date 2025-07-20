import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../utils/colors";

function PrimaryButton(props) {
  function pressHandler() {
    props.onPress();
  }

  return (
    <View style={styles.buttonInnerContainer}>
      <Pressable
        onPress={pressHandler}
        android_ripple={{ color: Colors.primary600 }}
        style={({ pressed }) => (pressed ? styles.pressed : "")}
      >
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    margin: 4,
    overflow: "hidden",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },

  pressed: {
    opacity: 0.75,
  },
});
