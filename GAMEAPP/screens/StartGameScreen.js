import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Colors from "../utils/colors";
import Tittle from "../components/Tittle";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";

function StartGameScreen(props) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputhHandler() {
    const chosenNummber = parseInt(enteredNumber);
    console.log(isNaN(chosenNummber));
    if (isNaN(chosenNummber) || chosenNummber <= 0 || chosenNummber > 99) {
      Alert.alert("Invalid Number", "Number must be between 1 and 99.", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }

    props.onPickedNumber(chosenNummber);
  }

  return (
    <View style={styles.rootContainer}>
      <Tittle>Guess My Number</Tittle>
      <Card>
        <InstructionText>Enter a Number Between 1 and 99</InstructionText>
        <TextInput
          style={styles.input}
          maxLength={2}
          keyboardType="number-pad"
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainers}>
          <View style={styles.buttonContainers}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainers}>
            <PrimaryButton onPress={confirmInputhHandler}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },

  input: {
    height: 50,
    width: 60,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
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
