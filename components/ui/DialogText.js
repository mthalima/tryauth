import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/styles";
import { useState } from "react";

function DialogText({ message }) {
  return (
    <View style={styles.dialogContainer}>
      <Text style={styles.messageText}>{message}</Text>
    </View>
  );
}

export default DialogText;

const styles = StyleSheet.create({
  dialogContainer: {
    backgroundColor: Colors.primary800,
    alignItems: "center",
    borderRadius: 20,
    padding: 10,
    marginTop: 70,
    elevation: 5,
  },

  messageText: {
    textAlign: "center",
  },
});
