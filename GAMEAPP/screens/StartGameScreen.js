import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} maxLength={2} keyboardType="number-pad" />
      <View style={styles.buttonsContainers}>
        <View style={styles.buttonContainers}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainers}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: "#3b021f",
    elevation: 4, //Shadow for android.
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },

  input: {
    height: 50,
    width: 60,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },

  buttonsContainers: {
    flexDirection: "row",
  },
  buttonContainers: {
    flex: 1,
  },
});
