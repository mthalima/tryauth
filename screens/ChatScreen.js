import { StyleSheet, View, Text } from "react-native";

import { Avatar, useTheme, TextInput } from "react-native-paper";
import { Colors } from "../constants/styles";
import { useState } from "react";
import DialogText from "../components/ui/DialogText";

function ChatScreen({ username }) {
  const theme = useTheme();
  const [text, setText] = useState("");

  function sendMessage() {
    console.log("enviou mensagem");
  }

  return (
    <View style={styles.OverallContainer}>
      <View style={styles.profileContainer}>
        <Avatar.Image
          style={styles.avatar}
          size={65}
          source={require("../assets/profile-img.jpeg")}
        />
        <Text style={styles.username}>Zallera</Text>
      </View>
      <View style={styles.chatHistory}>
        <DialogText message="aqui o texto" />
      </View>
      <View style={styles.dialogInputContainer}>
        <TextInput
          style={styles.textContainer}
          mode="outlined"
          placeholder="Mensagem"
          cursorColor={Colors.primary800}
          value={text}
          onChangeText={(text) => setText(text)}
          theme={theme.colors.secondary}
          outlineStyle={styles.textContainerOutline}
        ></TextInput>
      </View>
    </View>
  );
}

export default ChatScreen;

const styles = StyleSheet.create({
  OverallContainer: {
    flex: 1,
    backgroundColor: Colors.primary100,

    alignItems: "center",
  },

  avatar: {
    justifyContent: "center",
    marginHorizontal: 10,
    marginVertical: 8,
    backgroundColor: Colors.lightblack,
    width: 70,
    height: 70,
    alignItems: "center",
    borderRadius: 200,
    elevation: 30,
  },

  profileContainer: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: Colors.primary500,
    elevation: 10,
  },

  textContainer: {
    fontSize: 18,

    borderColor: "red",
    marginBottom: 5,
    color: "red",
    backgroundColor: "white",
    height: 50,
  },

  textContainerOutline: {
    borderRadius: 10,
    borderColor: Colors.primary800,
    borderWidth: 2,
  },

  username: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 30,
  },

  chatHistory: {
    flex: 2,
  },

  dialogInputContainer: {
    width: "100%",
    flexDirection: "row",
  },
});
