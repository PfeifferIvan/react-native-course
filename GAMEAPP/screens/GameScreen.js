import { Text, StyleSheet, View, Alert } from "react-native";
import Tittle from "../components/Tittle";
import NumberContainer from "../components/Game/NumberContainer";
import { useState, useEffect } from "react";
import PrimaryButton from "../components/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  return rndNum === exclude ? generateRandomBetween(min, max, exclude) : rndNum;
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen(props) {
  const initialGuess = generateRandomBetween(1, 100, props.userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === props.userNumber) {
      props.onGameOver();
    }
  }, [currentGuess, props.userNumber, props.onGameOver]);

  function nextGuessHandler(sign) {
    if (
      (sign === "minis" && currentGuess < props.userNumber) ||
      (sign !== "minus" && currentGuess > props.userNumber)
    ) {
      Alert.alert("Don't lie", "you know this is wrong!", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (sign === "minus") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  }

  return (
    <View style={styles.screen}>
      <Tittle>Opponent's Guess</Tittle>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>+ -<View>Log Rounds</View>
        <View>
          <PrimaryButton onPress={() => nextGuessHandler("plus")}>
            +
          </PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler("minus")}>
            -
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40,
  },
});
