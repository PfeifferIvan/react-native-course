import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.textInputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          placeholder="Your Course Goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonView}>
            <Button title="Cancel" onPress={props.onCancel} color={"#f31282"} />
          </View>
          <View style={styles.buttonView}>
            <Button
              title="Add Goal"
              onPress={addGoalHandler}
              color={"#ba8cf7ff"}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  textInputContainer: {
    flex: 1,
    flexDirection: "column", //Colums Left to right.
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "70%",
    height: 35,
    marginRight: 8,
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  buttonView: {
    width: "40%",
    marginHorizontal: 2,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
