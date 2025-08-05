import { View, StyleSheet, Text, Alert } from "react-native";
import Input from "./Input";
import { isValidElement, useState } from "react";
import Button from "../UI/Button";
import { GlobalStyles } from "../../constants/styles";

export default function ExpenseForm({
  onCancel,
  onSubmit,
  submitButtonLabel,
  defaultValue,
}) {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValue ? defaultValue.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultValue ? defaultValue.date.toISOString().slice(0, 10) : "",
      isValid: true,
    },
    description: {
      value: defaultValue ? defaultValue.description : "",
      isValid: true,
    },
  });

  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInputs((currentInputs) => {
      return {
        ...currentInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  }

  function submitHandler() {
    const expensaData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const isValidAmount = !isNaN(expensaData.amount) && expensaData.amount > 0;
    const isValidDate = expensaData.date.toString() !== "Invalid Date";
    const isValidDescription = expensaData.description.trim().length > 0;

    if (!isValidAmount || isValidDate || isValidDescription) {
      //   Alert.alert("Invalid input", "Please check input values");
      setInputs((currInputs) => {
        return {
          amount: { value: currInputs.amount.value, isValid: isValidAmount },
          date: { value: currInputs.date.value, isValid: isValidDate },
          description: {
            value: currInputs.description.value,
            isValid: isValidDescription,
          },
        };
      });
      return;
    }

    onSubmit(expensaData);
  }

  const formIsInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          invalid={!inputs.amount.isValid}
          label={"Amount"}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputs.amount.value,
          }}
          style={styles.rowInput}
        />
        <Input
          invalid={!inputs.date.isValid}
          style={styles.rowInput}
          label={"Date"}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            placeholderTextColor: "black",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputs.date.value,
          }}
        />
      </View>

      <Input
        invalid={!inputs.description.isValid}
        label={"Description"}
        textInputConfig={{
          multiline: true,
          autoCorrect: true,
          autoCapitalize: "sentences",
          onChangeText: inputChangeHandler.bind(this, "description"),
          value: inputs.description.value,
        }}
      />
      {formIsInvalid && (
        <Text style={styles.errorText}>Invalid input value!!</Text>
      )}
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  rowInput: {
    flex: 1,
  },
  form: {
    marginTop: 60,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  errorText: {
    textAlign: "center",
    color: GlobalStyles.colors.error500,
    margin: 8,
  },
});
