import { View, TextInput, StyleSheet } from "react-native";

function MessageInput() {
  const [value, onChangeText] = React.useState("Useless Multiline Placeholder");
  return (
    <View style={styles.inputContainer}>
      <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        style={{ padding: 10 }}
      ></TextInput>
    </View>
  );
}

export default MessageInput;

const styles = StyleSheet.create({
  inputContainer: {
    width: "90%",
    height: 60,
    borderBottomColor: "green",
    borderWidt: 2,
    borderRadius: 3,
  },
});
