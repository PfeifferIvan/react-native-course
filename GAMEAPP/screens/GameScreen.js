import { Text, StyleSheet, View } from "react-native";

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.tittle}>Opponent's Guess</Text>;
      <View>
        <Text>Higher or Lower?</Text>+ -<View>Log Rounds</View>
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

  tittle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ddb52f",
    textAlign: "center",
  },
});
