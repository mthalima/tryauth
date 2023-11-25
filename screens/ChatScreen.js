import { StyleSheet, View, Text } from "react-native";

import { Avatar, useTheme, TextInput } from "react-native-paper";
import { Colors } from "../constants/styles";
import { useState } from "react";
import DialogText from "../components/ui/DialogText";

function ChatScreen({ Username }) {
  const theme = useTheme();
  const [text, setText] = useState("");

  return (
    <View style={styles.OverallContainer}>
      <View style={styles.profileContainer}>
        <Avatar.Image
          style={styles.avatar}
          size={65}
          source={require("../assets/profile-img.jpeg")}
        />
        <Text style={styles.username}>zallera</Text>
      </View>
      <View style={styles.chatHistory}>
        <DialogText message="aqui o texto" />
      </View>
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
    width: "97%",
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
});
