import { Text, StyleSheet } from "react-native";
import Colors from "../utils/colors";

function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 12,
    fontFamily: "open-sans",
  },
});
