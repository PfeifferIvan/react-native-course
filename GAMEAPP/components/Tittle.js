import { Text, StyleSheet } from "react-native";
import Colors from "../utils/colors";

function Tittle({ children }) {
  return <Text style={styles.tittle}>{children}</Text>;
}

export default Tittle;

const styles = StyleSheet.create({
  tittle: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: Colors.accent500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12,
  },
});
