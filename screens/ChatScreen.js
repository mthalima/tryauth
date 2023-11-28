import { StyleSheet, View, Text, TextInput } from "react-native";

import { Avatar, useTheme, Button } from "react-native-paper";
import { Colors } from "../constants/styles";
import { useState } from "react";
import DialogText from "../components/ui/DialogText";

function ChatScreen({ username }) {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  function sendMessage() {
    if (text.trim() !== "") {
      setMessage(text);
    } else {
      setMessage("");
    }
    setText("");
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
        <DialogText message={message} />
      </View>
      <View style={styles.dialogInputContainer}>
        <TextInput
          style={styles.textContainer}
          cursorColor={Colors.lightblack}
          placeholder="Mensagem"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <Button
          textColor="black"
          style={styles.enterButton}
          icon="send"
          type="contained-tonal"
          onPress={sendMessage}
        ></Button>
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
    marginLeft: 1,
    fontSize: 18,
    width: "80%",
    borderWidth: 1.5,
    borderColor: Colors.primary500,
    borderRadius: 30,
    padding: 13,
    marginBottom: 5,
    color: Colors.lightblack,
    backgroundColor: "white",
    height: 50,
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
    alignContent: "center",
    justifyContent: "center",
  },

  enterButton: {
    backgroundColor: Colors.primary800,
    marginTop: 3,
    justifyContent: "center",
    textAlign: "center",
    width: 50,
    height: 45,
    marginLeft: 4,
    borderRadius: 50,
  },
});
