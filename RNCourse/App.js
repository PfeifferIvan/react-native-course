import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.textInputContainer}>
        <TextInput placeholder="Your Course Goal" style={styles.textInput} />
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 70,
  },

  textInputContainer: {
    flexDirection: "row", //Colums Left to right.
    justifyContent: "space-between",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    marginRight: 8,
  },
});
